// src/app/api/route.js

export async function POST(req) {
    try {
      const body = await req.json();
      const { email, name, phone } = body;
  
      if (!email) {
        return new Response(JSON.stringify({ error: "Email is required" }), {
          status: 400,
        });
      }
  
      const API_KEY = process.env.MAILCHIMP_API_KEY;
      const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
      const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX; // e.g. us21
  
      const response = await fetch(
        `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
        {
          method: "POST",
          headers: {
            Authorization: `apikey ${API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email_address: email,
            status: "subscribed", // or "pending" if you want double opt-in
            merge_fields: {
              FNAME: name,
              PHONE: phone,
            },
          }),
        }
      );
  
      const data = await response.json();
  
      if (!response.ok) {
        let friendlyError = "Something went wrong. Please try again.";

        if (data.title === "Member Exists") {
          friendlyError = "This email is already registered.";
        } else if (data.title === "Invalid Resource") {
          friendlyError = "Please enter a valid email address.";
        }
        return new Response(JSON.stringify({ error: friendlyError }), {
          status: response.status,
        });
      }
  
      return new Response(JSON.stringify({ message: "Subscribed successfully!" }), {
        status: 200,
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }
  }
  
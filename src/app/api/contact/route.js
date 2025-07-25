export async function POST(req) {
  const body = await req.json();
  const { name, email, message } = body;

  // You can send this data to an email service or store it somewhere
  console.log("Contact form submitted:", body);

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'All fields are required.' }), {
      status: 400
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200
  });
}

import { z } from "zod";

const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    if (!WEB3FORMS_ACCESS_KEY) {
      return Response.json({ error: "Missing WEB3FORMS_ACCESS_KEY" }, { status: 500 });
    }

    const body = await req.json();
    const parsed = Email.safeParse(body);
    if (!parsed.success) {
      return Response.json({ error: parsed.error?.message }, { status: 400 });
    }
    const data = parsed.data;

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "Contact me from portfolio",
      name: data.fullName,
      email: data.email,
      message: data.message,
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const json = await res.json();
    if (!res.ok) {
      return Response.json({ error: json }, { status: res.status });
    }
    return Response.json(json);
  } catch (err: any) {
    return Response.json({ error: err?.message ?? err }, { status: 500 });
  }
}

const RH = { "Content-Type": "application/json" };

export async function onRequestGet(context) {
  const { request, env } = context;
  const q = new URL(request.url).searchParams.get("q") || "";
  if (!q.trim()) return new Response("Bad Request", { status: 400 });
  const res = await fetch(`${env.SERVER_URL}/stickers?q=${encodeURIComponent(q)}`, {
    headers: { "x-bridge-key": env.BRIDGE_KEY }
  });
  return new Response(await res.text(), { status: res.status, headers: RH });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const ct = request.headers.get("content-type") || "";

  if (ct.includes("multipart/form-data")) {
    const res = await fetch(`${env.SERVER_URL}/upload`, {
      method: "POST",
      headers: { "x-bridge-key": env.BRIDGE_KEY, "content-type": ct },
      body: request.body
    });
    return new Response(await res.text(), { status: res.status, headers: RH });
  }

  const res = await fetch(`${env.SERVER_URL}/process`, {
    method: "POST",
    headers: { "x-bridge-key": env.BRIDGE_KEY, "Content-Type": "application/json" },
    body: await request.text()
  });
  return new Response(await res.text(), { status: res.status, headers: RH });
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  let body = "";

  await new Promise((resolve) => {
    req.on("data", chunk => {
      body += chunk;
    });
    req.on("end", resolve);
  });

  const { password } = JSON.parse(body);

  if (password === process.env.SITE_PASSWORD) {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
};

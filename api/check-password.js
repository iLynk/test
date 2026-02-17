module.exports = function handler(req, res) {
  const { password } = req.body;

  if (password === process.env.SITE_PASSWORD) {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
};

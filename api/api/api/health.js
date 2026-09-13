module.exports = (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "Kan Kyi Kaung IPTV API",
    version: "1.0.0"
  });
};

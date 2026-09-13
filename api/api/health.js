module.exports = (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "FootballTV IPTV API",
    version: "1.0.0"
  });
};

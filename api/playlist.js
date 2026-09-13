module.exports = async (req, res) => {
  res.setHeader("Content-Type", "audio/x-mpegurl; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");

  const channels = [
    {
      name: "Example Live",
      group: "LIVE",
      logo: "",
      url: "https://example.com/authorized-stream.m3u8"
    }
  ];

  let output = "#EXTM3U\n\n";

  for (const channel of channels) {
    output += `#EXTINF:-1 group-title="${channel.group}" tvg-logo="${channel.logo}",${channel.name}\n`;
    output += `${channel.url}\n\n`;
  }

  res.status(200).send(output);
};

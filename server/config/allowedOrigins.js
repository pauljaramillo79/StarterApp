const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://www.wgsitetest.com", "https://wgsitetest.com"]
    : ["http://localhost:4001", "http://localhost:3000", "https://www.wgsitetest.com", "https://wgsitetest.com"];

module.exports = allowedOrigins;

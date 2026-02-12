const http = require("http");

const PORT = process.env.PORT || 3002;

const server = http.createServer((req, res) => {
  // CORS: allow shell (3000) and remote-a (3001) in development
  const origin = req.headers.origin;
  if (origin && (origin.includes("localhost:3000") || origin.includes("localhost:3001"))) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else {
    res.setHeader("Access-Control-Allow-Origin", "*");
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = new URL(req.url || "", `http://localhost:${PORT}`);
  if (url.pathname === "/square" && req.method === "GET") {
    const n = url.searchParams.get("n");
    const num = Number(n);
    if (n === null || n === "" || Number.isNaN(num)) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Missing or invalid query parameter: n" }));
      return;
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ number: num, square: num * num }));
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
});

server.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});

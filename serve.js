const http = require("http"), fs = require("fs"), path = require("path");
const root = path.join(__dirname, "panel");
const types = { ".html":"text/html; charset=utf-8", ".js":"text/javascript; charset=utf-8" };
http.createServer((q, r) => {
  const f = path.join(root, q.url === "/" ? "index.html" : decodeURIComponent(q.url.split("?")[0]));
  if (!f.startsWith(root)) { r.writeHead(403); return r.end(); }
  fs.readFile(f, (e, d) => { if (e) { r.writeHead(404); return r.end("no"); }
    r.writeHead(200, { "Content-Type": types[path.extname(f)] || "text/plain", "Cache-Control": "no-store" }); r.end(d); });
}).listen(8765, "127.0.0.1");

const http = require("http");
const fs = require("fs").promises;
const bicycles = require('./data/data.json')

const server = http.createServer(async (req, res) => {
  if (req.url === "/favicon.ico") return;

  const myUrl = new URL(req.url, `http://${req.headers.host}/`);
  const pathName = myUrl.pathname;
  const id = myUrl.searchParams.get("id");

  if (pathName === "/") {
    let html = await fs.readFile("./view/bicycles.html", "utf-8");

    const AllMainBicyles = await fs.readFile("./view/main/bmail.html", "utf-8")
    let allBicycles = '';
    for(let index = 0; index<6; index ++){
      allBicycles += replaceTemplate(AllMainBicyles,bicycles[index])
    }
    html = html.replace(/<%AllMainBicyles%>/g,allBicycles)

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  } else if (pathName === "/bicycle" && id >= 0 && id <= 5) {
    let html = await fs.readFile("./view/overview.html", "utf-8");

    const bicycle = bicycles.find((b)=>b.id === id)

    html = replaceTemplate(html, bicycle)
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  } else if (/\.(png)$/i.test(req.url)) {
    const image = await fs.readFile(`./public/image/${req.url.slice(1)}`);
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(image);
  }else if (/\.(css)$/i.test(req.url)) {
    const css = await fs.readFile(`./public/css/index.css`);
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(css);
  }else if (/\.(svg)$/i.test(req.url)) {
    const svg = await fs.readFile(`./public/image/icons.svg`);
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    res.end(svg);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>File Not Found</h1>");
  }
});

function replaceTemplate(html,bicycle){
  html = html.replace(/<%IMAGE%>/g,bicycle.image)
  html = html.replace(/<%NAME%>/g,bicycle.name)

  let price = bicycle.originalPrice
  if(bicycle.hasDiscount){
      price =( price *(100- bicycle.discount) )/ 100
  }
  html = html.replace(/<%NEWPRICE%>/g,'$'+price)
  html = html.replace(/<%OLDPRICE%>/g,'$'+bicycle.originalPrice)
  html = html.replace(/<%ID%>/g,bicycle.id)

  if(bicycle.hasDiscount){
    html = html.replace(/<%DISCOUNTRATE%>/g, `<div class="discount__rate"><p>${bicycle.discount}% off</p></div>`)
  }else{
    html = html.replace(/<%DISCOUNTRATE%>/g, '') 
  }

  for(let index = 0; index< bicycle.star; index ++){
    html = html.replace(/<%STAR%>/, 'checked') 
  }
  return html
}
server.listen(3001);

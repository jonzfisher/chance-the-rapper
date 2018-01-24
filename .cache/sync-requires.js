// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/fisherjon/talks/chance-the-rapper/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/fisherjon/talks/chance-the-rapper/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/fisherjon/talks/chance-the-rapper/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/fisherjon/talks/chance-the-rapper/src/pages/index.js")),
  "component---src-pages-songs-js": preferDefault(require("/Users/fisherjon/talks/chance-the-rapper/src/pages/songs.js"))
}

exports.json = {
  "layout-index.json": require("/Users/fisherjon/talks/chance-the-rapper/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/fisherjon/talks/chance-the-rapper/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/fisherjon/talks/chance-the-rapper/.cache/json/layout-index.json"),
  "404.json": require("/Users/fisherjon/talks/chance-the-rapper/.cache/json/404.json"),
  "layout-index.json": require("/Users/fisherjon/talks/chance-the-rapper/.cache/json/layout-index.json"),
  "index.json": require("/Users/fisherjon/talks/chance-the-rapper/.cache/json/index.json"),
  "layout-index.json": require("/Users/fisherjon/talks/chance-the-rapper/.cache/json/layout-index.json"),
  "songs.json": require("/Users/fisherjon/talks/chance-the-rapper/.cache/json/songs.json"),
  "layout-index.json": require("/Users/fisherjon/talks/chance-the-rapper/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/fisherjon/talks/chance-the-rapper/.cache/json/404-html.json")
}
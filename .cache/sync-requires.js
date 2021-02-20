const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/sergey/Sergey/WORK/www/vsa/src/pages/404.js"))),
  "component---src-pages-contato-js": hot(preferDefault(require("/Users/sergey/Sergey/WORK/www/vsa/src/pages/contato.js"))),
  "component---src-pages-empresa-js": hot(preferDefault(require("/Users/sergey/Sergey/WORK/www/vsa/src/pages/empresa.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/sergey/Sergey/WORK/www/vsa/src/pages/index.js"))),
  "component---src-pages-servicos-js": hot(preferDefault(require("/Users/sergey/Sergey/WORK/www/vsa/src/pages/servicos.js")))
}


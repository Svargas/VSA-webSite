// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contato-js": () => import("./../../../src/pages/contato.js" /* webpackChunkName: "component---src-pages-contato-js" */),
  "component---src-pages-empresa-js": () => import("./../../../src/pages/empresa.js" /* webpackChunkName: "component---src-pages-empresa-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-servicos-js": () => import("./../../../src/pages/servicos.js" /* webpackChunkName: "component---src-pages-servicos-js" */)
}


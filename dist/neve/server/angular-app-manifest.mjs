
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://andreabecerrab.github.io/neve/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/neve"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3356, hash: '7b7499fe2e0fb99a25df4404e5044f0db406831970a09125aea1157595778b58', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1054, hash: '1a88c567b9b918f73b143d90359ffc90aa55bc8f3871e410dd0250c141b907d2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 44458, hash: 'cd96d150d981b5ddcd6a02688372badfa0c5f4f8afb98da2346e0ce596e63033', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-F5IZY4XK.css': {size: 3576, hash: 'GYTg/kFdpf4', text: () => import('./assets-chunks/styles-F5IZY4XK_css.mjs').then(m => m.default)}
  },
};

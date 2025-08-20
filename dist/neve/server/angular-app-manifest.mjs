
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3319, hash: 'cc0b55a147c0c63067de4f42aab8d237c209ed16c025ed8c23f09b0cca7a7927', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1017, hash: '6b64afcec649b9c8972b638ab7645e71f50f4dc2d2fbf9327c869693b41abdb7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 63654, hash: '17d0d035e3aa53e7faa7b82a2aaacfad55eee01525598944de33f108ce46bd1c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-F5IZY4XK.css': {size: 3576, hash: 'GYTg/kFdpf4', text: () => import('./assets-chunks/styles-F5IZY4XK_css.mjs').then(m => m.default)}
  },
};

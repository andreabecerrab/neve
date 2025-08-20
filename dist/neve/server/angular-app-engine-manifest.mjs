
export default {
  basePath: 'https://andreabecerrab.github.io/neve',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};

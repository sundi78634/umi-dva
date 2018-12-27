// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'umi-dva',
      dll: true,
      hardSource: true,
      routes: {
        exclude: [
          /model\.(j | t)sx?$/,
          /service\.(j | t)sx?$/,
          /models\//,
          /components\//,
          /services\//,
        
        ],
      },
    }],
  ],
  hash: true,
  exportStatic: true,
  // ref: https://umijs.org/zh/config/#proxy
  proxy: {
    '/api': {
      'target': 'http://jsonplaceholder.typicode.com/',
      'changeOrigin': true,
      'pathRewrite': { '^/api': '' },
    },
  },
};

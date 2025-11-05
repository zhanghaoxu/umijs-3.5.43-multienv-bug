import { defineConfig } from 'umi';
const isProd = process.env.UMI_ENV === 'prod';
console.log(isProd, process.env.UMI_ENV);
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});

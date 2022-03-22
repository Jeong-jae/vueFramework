import { createApp } from 'vue';
import App from './App.vue';
// import Antd from 'ant-design-vue';
import { Button } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
//https://next.antdv.com/index

const app = createApp(App);

// app.use(Antd);
app.use(Button);
app.mount('#app');

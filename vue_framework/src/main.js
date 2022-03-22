import { createApp } from 'vue';
import App from './App.vue';
import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIcss from 'balm-ui/dist/balm-ui.css';
//https://material.balmjs.com/
const app = createApp(App);

app.use(BalmUI); // Mandatory
app.use(BalmUIcss); // Mandatory

app.mount('#app');

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import  App  from "./app.js";

window.addEventListener("DOMContentLoaded", function(){
	createApp(App).mount('#app');
    const indexOfSlash = window.location.href.lastIndexOf("/");
    const link = window.location.href.substring(indexOfSlash + 1);
    if(link === "users.html"){
        createApp(App).mount('#app2');
    }
    
});

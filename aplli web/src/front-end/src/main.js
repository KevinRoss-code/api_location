import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VueGoogleMaps from "@fawmi/vue-google-maps";

createApp(App)
  .use(store)
  .use(router)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyBfBrlpLvczfANalFiQ-GA4Z6dwpZEelgE",
      libraries: "places",
    },
    autobindAllEvents: true,
  })
  .mount(".container");

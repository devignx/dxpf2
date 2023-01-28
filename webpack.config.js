//add at the top
import { InjectManifest } from "workbox-webpack-plugin";

//add inside the plugins array:
plugins: [
, new InjectManifest({
  swSrc: "./src/src-sw.js",
  swDest: "sw.js"
})
]

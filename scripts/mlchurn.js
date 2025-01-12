import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const spline = new Application(canvas);
document.body.classList.add("loading");
spline
  .load("https://prod.spline.design/JYol6iWZrVyRz2vs/scene.splinecode") //hydropal scene
  .then(() => {
    document.body.classList.remove("loading");
    spline.addEventListener("mouseDown", (e) => {
      if (e.target.id === "f7b8d336-95f9-4f63-9fb6-ad1aff62cf06") {
        // back button for hydropal -> projects
        window.location.assign("./");
      }
    });
  });

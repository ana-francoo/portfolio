import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const spline = new Application(canvas);
document.body.classList.add("loading");
spline
  .load('https://prod.spline.design/TRerdPrXVgX00F1U/scene.splinecode') 
  .then(() => {
    document.body.classList.remove("loading");
    spline.addEventListener("mouseDown", (e) => {
      if (e.target.id === "f7b8d336-95f9-4f63-9fb6-ad1aff62cf06") {
        // back button for hydropal -> projects
        window.location.href = "/root"; // go to root page
      }
    });
  });
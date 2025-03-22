import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const spline = new Application(canvas);

function resizeCanvas() {
  const pixelRatio = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;

  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  window.dispatchEvent(new Event("resize"));
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

document.body.classList.add("loading");
spline
  .load("https://prod.spline.design/D20bs7Uftrd4OJ8V/scene.splinecode") //holoconnect scene
  .then(() => {
    document.body.classList.remove("loading");
    spline.addEventListener("mouseDown", (e) => {
      if (e.target.id === "f7b8d336-95f9-4f63-9fb6-ad1aff62cf06") {
        // back button for holoconnect -> projects
        window.location.assign("./");
      }
    });
  });

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
  .load("https://prod.spline.design/XgyvADWgCy7qzd9p/scene.splinecode") //
  .then(() => {
    document.body.classList.remove("loading");
    spline.addEventListener("mouseDown", (e) => {
      if (e.target.id === "20962730-89c9-4db7-914c-41ce2ebc6e6e") {
        // Project sign
        window.location.href = "/projects/";
      }
      if (e.target.id === "3241c30f-1e4b-49cd-b8ac-c59ee9899da6") {
        // About Me sign
        window.location.href = "/aboutme";
      }
      if (e.target.id === "501ec8c8-d04d-4a0c-9bd7-b04972d58cfc") {
        // About Me sign
        window.location.href = "/resume.pdf";
      }
    });
  });

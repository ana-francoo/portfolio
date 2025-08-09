import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");

function resizeCanvas() {
  const prefersReducedData =
    navigator.connection && (navigator.connection.saveData || navigator.connection.effectiveType === "2g");
  const devicePixelRatioSafe = window.devicePixelRatio || 1;
  const pixelRatio = prefersReducedData ? Math.min(1.25, devicePixelRatioSafe) : Math.min(1.5, devicePixelRatioSafe);
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

(async () => {
  const spline = new Application(canvas);
  await spline.load("https://prod.spline.design/M4yHcdbcwkwBW-Sl/scene.splinecode");

  document.body.classList.remove("loading");
  spline.addEventListener("mouseDown", (e) => {
    if (e.target.id === "20962730-89c9-4db7-914c-41ce2ebc6e6e") {
      window.location.assign("./projects/");
    }
    if (e.target.id === "3241c30f-1e4b-49cd-b8ac-c59ee9899da6") {
      window.location.href = "/aboutme";
    }
    if (e.target.id === "501ec8c8-d04d-4a0c-9bd7-b04972d58cfc") {
      window.location.href = "/resume.pdf";
    }
    if (e.target.id === "fc58bdf3-5220-44e2-b62b-f8cafb70b055") {
      window.location.href = "/root";
    }
  });
})();
// https://prod.spline.design/bHky9zqTjopWM3Ns/scene.splinecode

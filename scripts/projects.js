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
  .load("https://prod.spline.design/bHky9zqTjopWM3Ns/scene.splinecode") //projects spline scene
  .then(() => {
    document.body.classList.remove("loading");
    spline.addEventListener("mouseDown", (e) => {
      if (e.target.id === "5fd19ab0-e0e1-4b1e-88c9-7a6ac4cdca96") {
        // holoconnect container
        window.location.href = "/projects/holoconnect";
      }
      if (e.target.id === "36cd4900-6db2-4ee9-907b-ca616fe038b0") {
        // hydropal container
        window.location.href = "/projects/hydropal";
      }
      if (e.target.id === "a2e45591-e609-454a-8d50-6c9ce9b51a23") {
        // flockstock container
        window.location.href = "/projects/flockstock";
      }
      if (e.target.id === "c8011817-a3db-46e7-99b6-bdfdc5cd30f9") {
        // uwpm podcast container
        window.location.href = "/projects/pmpodcast";
      }
      if (e.target.id === "fda3728b-2047-455f-b65b-fb6f8b03cdf6") {
        // ml customer churn container
        window.location.href = "/projects/mlchurn";
      }
      if (e.target.id === "f7b8d336-95f9-4f63-9fb6-ad1aff62cf06") {
        // back button
        window.location.href = "/root"; // go to root page
      }
    });
  });

import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const spline = new Application(canvas);

// Function to update canvas dimensions on resize
function resizeCanvas() {
  const pixelRatio = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Update the canvas's internal resolution for sharp rendering
  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;

  // Update the CSS size to fill the viewport
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  // Optionally dispatch a resize event if needed by Spline
  window.dispatchEvent(new Event("resize"));
}

// Listen for window resize events
window.addEventListener("resize", resizeCanvas);

// Set initial canvas size on load
resizeCanvas();

document.body.classList.add("loading");
spline
  .load('https://prod.spline.design/M4yHcdbcwkwBW-Sl/scene.splinecode') //
  .then(() => {
    document.body.classList.remove("loading");
    spline.addEventListener("mouseDown", (e) => {
      if (e.target.id === "20962730-89c9-4db7-914c-41ce2ebc6e6e") {
        window.location.assign("./projects/");
      }
      if (e.target.id === "3241c30f-1e4b-49cd-b8ac-c59ee9899da6") { // about me sign
        window.location.href = "/aboutme";
      }
      if (e.target.id === "501ec8c8-d04d-4a0c-9bd7-b04972d58cfc") { //resume sign
        // back button
        window.location.href = "/resume.pdf"; // go to root page
      }
      if (e.target.id === "fc58bdf3-5220-44e2-b62b-f8cafb70b055") { //skip sign
        // back button
        window.location.href = "/root"; // go to root page
      }

      //
    });
  });
//https://prod.spline.design/bHky9zqTjopWM3Ns/scene.splinecode

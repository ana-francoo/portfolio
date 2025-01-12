import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const spline = new Application(canvas);
document.body.classList.add("loading");
spline
  .load("https://prod.spline.design/M4yHcdbcwkwBW-Sl/scene.splinecode") //
  .then(() => {
    document.body.classList.remove("loading");
    spline.addEventListener("mouseDown", (e) => {
      if (e.target.id === "20962730-89c9-4db7-914c-41ce2ebc6e6e") {
        window.location.assign("./projects/");
      }
      if (e.target.id === "3241c30f-1e4b-49cd-b8ac-c59ee9899da6") { // about me sign
        window.location.href = "/aboutme";
      }

      //
    });
  });
//https://prod.spline.design/bHky9zqTjopWM3Ns/scene.splinecode

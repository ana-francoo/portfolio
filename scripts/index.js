import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const spline = new Application(canvas);
spline
  .load('https://prod.spline.design/M4yHcdbcwkwBW-Sl/scene.splinecode') //
  .then(() => {
    spline.addEventListener('mouseDown', (e) => {
      console.log("clicking ocurring");
      console.log(e);
      if (e.target.id === '20962730-89c9-4db7-914c-41ce2ebc6e6e') {
        window.location.assign('./projects/');
        console.log("clicked");
      }
    });
  });
//https://prod.spline.design/bHky9zqTjopWM3Ns/scene.splinecode
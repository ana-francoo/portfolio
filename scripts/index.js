import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const spline = new Application(canvas);
spline
  .load('https://prod.spline.design/M4yHcdbcwkwBW-Sl/scene.splinecode') //
  .then(() => {
    spline.addEventListener('mouseDown', (e) => {
      if (e.target.id === '3c9132f6-b7a5-4236-8dd0-19a7b468e2cb') {
        window.location.href = '/projects';
        console.log("clicked");
      }
    });
  });
//https://prod.spline.design/bHky9zqTjopWM3Ns/scene.splinecode
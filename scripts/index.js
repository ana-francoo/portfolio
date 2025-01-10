import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const spline = new Application(canvas);
spline
  .load('https://prod.spline.design/M4yHcdbcwkwBW-Sl/scene.splinecode') //
  .then(() => {
    spline.addEventListener('mouseDown', (e) => {
      if (e.target.id === 'f7b8d336-95f9-4f63-9fb6-ad1aff62cf06') {
        window.location.href = '/home';
        console.log("clicked");
      }
    });
  });
//https://prod.spline.design/bHky9zqTjopWM3Ns/scene.splinecode
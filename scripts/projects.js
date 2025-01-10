import { Application } from "@splinetool/runtime";

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);

spline
  .load('https://prod.spline.design/bHky9zqTjopWM3Ns/scene.splinecode') //projects spline scene
  .then(() => {
    spline.addEventListener('mouseDown', (e) => {
      if (e.target.id === 'f7b8d336-95f9-4f63-9fb6-ad1aff62cf06') {
        window.location.href = '/index';
        console.log("clicked");
      }
    });
  });
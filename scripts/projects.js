import { Application } from "@splinetool/runtime";

const canvas = document.getElementById('canvas3d');
const spline = new Application(canvas);

spline
  .load('https://prod.spline.design/bHky9zqTjopWM3Ns/scene.splinecode') //projects spline scene
  .then(() => {
    spline.addEventListener('mouseDown', (e) => {
        console.log("click ocurred");
        console.log(e);
      if (e.target.id === '5fd19ab0-e0e1-4b1e-88c9-7a6ac4cdca96') { // holoconnect container
        window.location.href = '/projects/holoconnect';
      }
      if (e.target.id === 'f7b8d336-95f9-4f63-9fb6-ad1aff62cf06') { // back button
        window.location.href = '/root'; // go to root page
      }

    });
  });
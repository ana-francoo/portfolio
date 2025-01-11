import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const spline = new Application(canvas);
spline
  .load('https://prod.spline.design/D20bs7Uftrd4OJ8V/scene.splinecode') //holoconnect scene
  .then(() => {
    spline.addEventListener('mouseDown', (e) => {
      console.log("clicking ocurring");
      console.log(e);
      if (e.target.id === 'f7b8d336-95f9-4f63-9fb6-ad1aff62cf06') { // back button for holoconnect -> projects
        window.location.assign('./');
        console.log("clicked");
      }
    });
  });
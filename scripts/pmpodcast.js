import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const spline = new Application(canvas);
spline
  .load('https://prod.spline.design/5ksIKzrBfy16dr5y/scene.splinecode') //hydropal scene
  .then(() => {
    spline.addEventListener('mouseDown', (e) => {
      if (e.target.id === 'f7b8d336-95f9-4f63-9fb6-ad1aff62cf06') { // back button
        window.location.assign('./');
      }
    });
  });
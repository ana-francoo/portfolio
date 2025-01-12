import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000
  },
  build: {
    rollupOptions: {
      input: {
        main: '/index.html',
        projects: '/projects/index.html',

        flockstock: '/projects/flockstock.html',
        holoconnect: '/projects/holoconnect.html',
        hydropal: '/projects/hydropal.html',
        mlchurn: '/projects/mlchurn.html',
        pmpodcast: '/projects/pmpodcast.html',

        root: '/root.html',
        aboutme: '/aboutme.html',
        resume : '/resume.pdf'
      }
    }
  }
});

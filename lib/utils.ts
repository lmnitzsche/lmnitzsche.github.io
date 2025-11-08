// This file will be used for custom JavaScript if needed
// Currently using React components for interactivity

export function initAOS() {
  if (typeof window !== 'undefined') {
    const AOS = require('aos');
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
}

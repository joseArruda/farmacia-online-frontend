export function initAnimations() {
  const sr = ScrollReveal({
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    reset: false
  });

  sr.reveal('.fade-up', { origin: 'bottom' });
  sr.reveal('.fade-left', { origin: 'left' });
  sr.reveal('.fade-right', { origin: 'right' });
  sr.reveal('.stagger', { interval: 200 });
}
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('appear', {
    mounted(el, binding) {
      const effect = binding.value || 'fade-up';
      const distance = '40px';

      el.style.opacity = '0';
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';

      // État initial
      switch (effect) {
        case 'fade-up':
          el.style.transform = `translateY(${distance})`;
          break;
        case 'fade-down':
          el.style.transform = `translateY(-${distance})`;
          break;
        case 'fade-left':
          el.style.transform = `translateX(${distance})`;
          break;
        case 'fade-right':
          el.style.transform = `translateX(-${distance})`;
          break;
        case 'zoom-in':
          el.style.transform = 'scale(0.85)';
          break;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1';
            el.style.transform = 'translate(0,0) scale(1)';
            observer.unobserve(el);
          }
        },
        {
          threshold: 0.15
        }
      );

      observer.observe(el);
    }
  });
});

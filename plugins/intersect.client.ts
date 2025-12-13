export default defineNuxtPlugin(() => {
  return {
    provide: {
      observe: (el: HTMLElement, callback: Function) => {
        const observer = new IntersectionObserver(
          entries => {
            if (entries[0].isIntersecting) {
              callback()
              observer.disconnect()
            }
          },
          { threshold: 0.2 }
        )
        observer.observe(el)
      }
    }
  }
})

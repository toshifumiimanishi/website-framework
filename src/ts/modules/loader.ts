export const loader = (() => {
  const loader: HTMLElement = document.querySelector('.js-loader');
  const target = loader.dataset.target;

  const _init = () => {
    window.addEventListener('load', () => {
      loader.setAttribute('aria-hidden', 'true');
      document.querySelector(target).setAttribute('aria-busy', 'false');
    });
  };

  return {
    init: _init,
  };
})();
export const modal = () => {
  const toggleButtons = document.querySelectorAll<HTMLElement>('.js-toggle-modal');
  let currentScrollY = 0;

  Array.from(toggleButtons, (element) => {
    if (!element.dataset.target) {
      throw new Error('データ属性 `data-target` を指定してください。');
    }

    const target = document.querySelector(element.dataset.target) as HTMLElement;
    const dialog = target.querySelector('[role="document"]');
    const dismissButtons = target.querySelectorAll('[data-dismiss="modal"]');

    if (!dialog) {
      throw new Error('role 属性 `role="document"` を指定してください。');
    }

    element.addEventListener('click', () => {
      _launch(target);
    });

    Array.from(dismissButtons, (element) => {
      element.addEventListener('click', () => {
        _dismiss(target);
      });
    });

    target.addEventListener('click', () => {
      _dismiss(target);
    });

    dialog.addEventListener('click', (event) => {
      event.stopPropagation();
    });

    element.addEventListener('keydown', (event: KeyboardEvent) => {
      const escKeyCode = 27;

      if (event.keyCode === escKeyCode) {
        _dismiss(target);
      }
    });

    function _launch(element: HTMLElement) {
      _activateScrollLock();
      element.setAttribute('aria-hidden', 'false');
    }

    function _dismiss(element: HTMLElement) {
      _deactivateScrollLock();
      element.setAttribute('aria-hidden', 'true');
    }

    function _activateScrollLock() {
      const scrollbarWidth = window.innerWidth - document.body.clientWidth;
      currentScrollY = window.scrollY;

      document.body.style.position = 'fixed';
      document.body.style.top = `-${currentScrollY}px`;
      document.body.style.right = '0';
      document.body.style.left = '0';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    function _deactivateScrollLock() {
      document.body.setAttribute('style', '');
      window.scrollTo(0, currentScrollY);
    }
  });
};

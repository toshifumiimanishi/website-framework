export const modal = () => {
  const toggleButtons = document.querySelectorAll<HTMLElement>('.js-modal');
  let currentScrollY = 0;
  let isLaunced = false;

  Array.from(toggleButtons, (toggleButton) => {
    if (!toggleButton.dataset.target) {
      throw new Error('データ属性 `data-target` を指定してください。');
    }

    const modal = document.querySelector(toggleButton.dataset.target) as HTMLElement;
    const contents = modal.querySelector('[role="document"]');
    const dismissButtons = modal.querySelectorAll('[data-dismiss="modal"]');
    const tabbableElements = modal.querySelectorAll<HTMLElement>('a[href], button:not(:disabled)');
    const firstTabbable = tabbableElements[0];
    const lastTabbable = tabbableElements[tabbableElements.length - 1];

    if (!contents) {
      throw new Error('role 属性 `role="document"` を指定してください。');
    }

    toggleButton.addEventListener('click', () => {
      _launch(modal);
    });

    Array.from(dismissButtons, (dismissButton) => {
      dismissButton.addEventListener('click', () => {
        _dismiss(modal);
      });
    });

    modal.addEventListener('click', () => {
      _dismiss(modal);
    });

    contents.addEventListener('click', (event) => {
      event.stopPropagation();
    });

    const onKeydownTabKeyFirstTabbable = (event: KeyboardEvent) => {
      if(event.key !== 'Tab' || !event.shiftKey) {
        return;
      }
      event.preventDefault();
      lastTabbable.focus();
    }

    const onKeydownTabKeyLastTabbable = (event: KeyboardEvent) => {
      if(event.key !== 'Tab' || event.shiftKey) {
        return;
      }
      event.preventDefault();
      firstTabbable.focus();
    }

    firstTabbable.addEventListener('keydown', onKeydownTabKeyFirstTabbable, false);
    lastTabbable.addEventListener('keydown', onKeydownTabKeyLastTabbable, false);
  });

  const _launch = (element: HTMLElement) => {
    _activateScrollYLock();
    element.setAttribute('aria-hidden', 'false');
    element.addEventListener('transitionend', () => {
      element.focus();
    }, { once: true });
    isLaunced = true;
  };

  const _dismiss = (element?: HTMLElement) => {
    const target = element || document.querySelector('[role="dialog"][aria-hidden="false"]');
    _deactivateScrollYLock();
    target.setAttribute('aria-hidden', 'true');
    isLaunced = false;
  };

  const _activateScrollYLock = () => {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;
    currentScrollY = window.scrollY;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${currentScrollY}px`;
    document.body.style.right = '0';
    document.body.style.left = '0';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  };

  const _deactivateScrollYLock = () => {
    document.body.setAttribute('style', '');
    window.scrollTo(0, currentScrollY);
  };

  const onKeydownEsc = (event: KeyboardEvent) => {
    if (!isLaunced || event.key !== 'Escape') {
      return;
    }
    event.preventDefault();
    _dismiss();
  }

  window.addEventListener('keydown', onKeydownEsc, false);
};

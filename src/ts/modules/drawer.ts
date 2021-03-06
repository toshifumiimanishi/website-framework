export const drawer = (() => {
  const toggle = document.querySelector('.js-drawer');
  const dismiss = document.querySelector('.js-drawer-dismiss');
  const target = toggle?.getAttribute('aria-controls');
  const drawer = document.querySelector(`#${target}`);
  let isExpanded = toggle?.getAttribute('aria-expanded') === 'true' || false;

  if (!toggle) throw new Error('class 属性 `js-drawer` を指定してください。');
  if (!dismiss) throw new Error('class 属性 `js-drawer-dismiss` を指定してください。');
  if (!drawer) throw new Error('aria-controls 属性にターゲットを指定してください。もしくは、ターゲットが見つかりません。');

  const _init = () => {
    _handle();
  };

  const _handle = () => {
    toggle.addEventListener('click', _toggle, false);
    dismiss.addEventListener('click', _toggle, false);
  };

  const _toggle = () => {
    isExpanded = !isExpanded;

    if (isExpanded) {
      toggle.setAttribute('aria-expanded', 'true');
      drawer.setAttribute('aria-hidden', 'false');
    } else {
      toggle.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
    }
  };

  return {
    init: _init,
  };
})();

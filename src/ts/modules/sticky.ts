export const sticky = () => {
  const stickyTarget = document.querySelector('.js-sticky') as HTMLElement;

  if (!stickyTarget) throw new Error('class 属性 `js-sticky` を指定してください。');

  const stickyTargetPosY = getAbsolutePosY(stickyTarget);
  let isFixed = false;

  // 現在のスクロール量（ Y 方向）を取得する
  function getScrollY() {
    return window.scrollY || window.pageYOffset;
  }

  // ターゲット要素の本来のY座標を取得する
  function getAbsolutePosY(element: HTMLElement) {
    const scrollY = getScrollY();
    const offsetFromViewportTop = element.getBoundingClientRect().top;
    return scrollY + offsetFromViewportTop;
  }

  function unfixed() {
    if (!isFixed) {
      return;
    }
    stickyTarget.removeAttribute('style');
    isFixed = false;
  }

  function fixed() {
    if (isFixed) {
      return;
    }
    stickyTarget.style.position = 'fixed';
    stickyTarget.style.top = '0';
    stickyTarget.style.left = '0';
    isFixed = true;
  }

  function onScroll() {
    const currentScrollY = getScrollY();
    if (currentScrollY < stickyTargetPosY) {
      unfixed();
    } else {
      fixed();
    }
  }

  window.addEventListener('scroll', onScroll, false);
};

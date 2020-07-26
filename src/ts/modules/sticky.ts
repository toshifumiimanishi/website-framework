export const sticky = () => {
  const stickyOriginal = document.querySelector('.js-sticky') as HTMLElement;

  if (!stickyOriginal) throw new Error('class 属性 `js-sticky` を指定してください。');

  const stickyClone = generateClone(stickyOriginal);
  const stickyTargetPosY = getAbsolutePosY(stickyOriginal);
  const offset = 0;
  const threshold = stickyTargetPosY + offset;
  let isFixed = false;

  document.body.append(stickyClone);

  function generateClone(originalElement: HTMLElement) {
    const cloneElement = originalElement.cloneNode(true) as HTMLElement;
    cloneElement.classList.add('-clone');

    return cloneElement;
  }

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
    stickyClone.removeAttribute('style');
    isFixed = false;
  }

  function fixed() {
    if (isFixed) {
      return;
    }
    stickyClone.style.position = 'fixed';
    stickyClone.style.top = '0';
    stickyClone.style.right = '0';
    stickyClone.style.left = '0';
    stickyClone.style.willChange = 'transform, opacity';
    isFixed = true;
  }

  function onScroll() {
    const currentScrollY = getScrollY();
    if (currentScrollY < threshold) {
      unfixed();
    } else {
      fixed();
    }
  }

  window.addEventListener('scroll', onScroll, false);
};

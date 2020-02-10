export const revealPassword = () => {
  const triggerElement = document.querySelector('.js-revealPassword');

  triggerElement.addEventListener('click', function() {
    const target = this.getAttribute('data-target');
    const targetElement = document.querySelector(target);
    const type = targetElement.type;

    if (type === 'password') {
      targetElement.type = 'text';
    } else {
      targetElement.type = 'password';
    }
  });
};
export const accordion = ({
  speed = 1.5,
  easing = 'ease-out'
} = {}) => {
  const targets = document.getElementsByClassName('js-according');
  const targetLength = targets.length;

  for (let i = 0; i < targetLength; i++) {
    const currentTarget = targets[i];
    const accordionButton = currentTarget.getElementsByClassName('js-accordion-btn')[0];
    const accordionPanel = document.getElementById(`${accordionButton.getAttribute('aria-controls')}`);

    if (!accordionPanel) throw new Error('aria-controls 属性にターゲットを指定してください。');

    const panelHeight = accordionPanel.scrollHeight;
    const duration = panelHeight * speed;
    let isExpanded = accordionButton.getAttribute('aria-expanded') === 'true' ? true : false;

    accordionPanel.style.transitionDuration = `${duration}ms`;
    accordionPanel.style.transitionTimingFunction = easing;

    accordionButton.addEventListener('click', (event) => {
      const currentTarget = event.currentTarget as HTMLElement;
      accordionPanel.style.height = isExpanded ? '0' : `${panelHeight}px`;

      isExpanded = !isExpanded;
      currentTarget.setAttribute('aria-expanded', isExpanded.toString());
    });
  }
};

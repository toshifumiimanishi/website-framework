import '../src/sass/main.scss';
import { storiesOf } from '@storybook/html';

export default {
  title: 'Demo',
};

export const heading = () => '<h1>Hello World</h1>';

export const button = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Hello Button';
  btn.addEventListener('click', e => console.log(e));
  return btn;
};

storiesOf('Components', module)
  .add('Button', () => `
    <div class="p-btn">DEFAULT</div>
    <a class="p-btn -primary" href="">PRIMARY</a>
    <button class="p-btn -secondary" type="button">SECONDARY</button>
    <button class="p-btn" type="button" disabled>DISABLED</button>
    <a class="p-btn -outline" href="">OUTLINE</a>
  `)

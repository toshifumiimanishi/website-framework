import '../src/sass/main.scss';
import '../src/ts/main.ts';

export default {
  title: 'Components',
};

export const ghostButton = () => {
  const elements = `
    <a class="p-ghostbtn" href="">Default</a>
    <a class="p-ghostbtn -primary" href="">Primary</a>
    <button class="p-ghostbtn" type="button" disabled>Disabled</button>
  `;
  return elements;
};

export const form = () => {
  const element = `
    <div class="p-floatlabel">
      <input class="c-textfield p-floatlabel_textfield" type="text">
      <label class="p-floatlabel_placeholder">メールアドレスまたは携帯電話番号</label>
    </div>
    <input class="c-textfield" type="password" />
    <button class="js-revealPassword" data-target="type='password'" aria-label="パスワードを表示する">表示</button>
  `;
  return element;
};
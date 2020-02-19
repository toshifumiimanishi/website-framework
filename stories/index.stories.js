import '../src/sass/main.scss';
import '../src/ts/main.ts';

export default {
  title: 'Components',
};

export const button = () => {
  const elements = `
    <div class="p-btn">DEFAULT</div>
    <a class="p-btn -primary" href="">PRIMARY</a>
    <button class="p-btn -secondary" type="button">SECONDARY</button>
    <button class="p-btn" type="button" disabled>DISABLED</button>
    <a class="p-btn -outline" href="">OUTLINE</a>
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
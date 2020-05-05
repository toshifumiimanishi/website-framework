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

export const card = () => {
  const element =`
  <div class="p-card">
    <div class="p-card_header"><img src="https://fakeimg.pl/300x200/282828/eae0d0/?retina=1&text=Dummy Image"></div>
    <div class="p-card_body">
      <div class="p-card_tit"><a class="p-card_link" href="">Card title</a></div>
      <div class="p-card_txt">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
      <small>Last updated 3 mins ago</small>
    </div>
  </div>
  `;
  return element;
};

card.story = {
  parameters: {
    notes: 'Flexbox の設計は、各カードのコンテンツ量に依存しない高さ（=高さ合わせ）を可能にします。カード全体をクリッカブルにする場合、スクリーンリーダーの冗長な読み上げを避けるため、擬似要素でカード全体をクリッカブルにする方法を推奨します。'
  }
}

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

export const spinner = () => {
  const element = `
    <div class="c-spinner" aria-busy="true"></div>
  `;
  return element;
};
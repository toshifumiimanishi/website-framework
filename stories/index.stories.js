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

export const loader = () => {
  const element = `
    <div class="p-loader js-loader" data-target=".p-loader_spinner" aria-hidden="false">
      <div class="c-spinner p-loader_spinner" aria-busy="true"><span class="visually-hidden">Loading...</span></div>
    </div>
  `;
  return element;
};

export const modal = () => {
  const element = `
    <button class="js-toggle-modal" data-target=".modal-01" type="button">Launch modal</button>
    <div class="p-modal -overlay modal-01" role="dialog" aria-hidden="false">
      <div class="p-modal_container">
        <div class="p-modal_contents" role="document">
          <div class="p-modal_content">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet necessitatibus, rem quae sint cupiditate
              qui reprehenderit nostrum hic repellendus cum quia corporis rerum fugit! Natus illum eius odio maiores
              vero.</p>
            <button class="p-modal_btn p-btn" type="button" data-dismiss="modal" aria-label="close">Close</button>
            <button class="p-modal_btn -floating" type="button" data-dismiss="modal" aria-label="close">×</button>
          </div>
        </div>
      </div>
    </div>
  `;
  return element;
};

modal.story = {
  parameters: {
    notes: 'モーダルは HTML、CSS、および JavaScript で構築されています。モーダルの発火には `.js-toggle-modal` を追加し、`data-target` でモーダルのターゲットを設定します。'
  }
}

export const drawer = () => {
  const element = `
    <div class="p-drawer" id="drawer" aria-hidden="false">
      <div class="p-drawer_backdrop js-drawer-dismiss"></div>
      <nav class="p-drawer_nav">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Settings</a></li>
        </ul>
      </nav>
    </div>
  `;
  return element;
};
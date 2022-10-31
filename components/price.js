Vue.component('price', {
  template: `<main>
  <div class="underline">
      <p></p>
  </div>
  <!--underline end-->
  <div class="price">
      <h2>ご利用料金</h2>
      <table>
          <tr class="ttop">
              <th>基本料金</th>
              <th>1日1回</th>
              <th>1日2回</th>
              <th>お散歩のみ</th>
          </tr>
          <tr>
              <th>小型犬(～10kg)</th>
              <td>2,000円</td>
              <td>3,000円</td>
              <td>1,000円</td>
          </tr>
          <tr>
              <th>中型犬(～20kg)</th>
              <td>2,500円</td>
              <td>4,000円</td>
              <td>1,500円</td>
          </tr>
          <tr>
              <th>大型犬(20kg以上)</th>
              <td>3,000円</td>
              <td>5,000円</td>
              <td>2,000円</td>
          </tr>
          <tr>
              <th>猫</th>
              <td>1,500円</td>
              <td>2,500円</td>
              <td></td>
          </tr>
      </table>
      <div class="pricep">
          <p class="pleft">＊2匹目以降は、1匹当たりワンちゃんは＋50％、<br>
              ネコちゃんは＋500円になります。</p>
      </div>
  </div>
  <!--price end-->
  <div class="pricesp">
      <h1>ご利用料金</h1>
      <div class="pricesp2">
          <h4>小型犬(～10kg)</h4>
          <p><span class="pbold">1日1回</span>・・・2,000円</p>
          <p><span class="pbold">1日2回</span>・・・3,000円</p>
          <p><span class="pbold">お散歩のみ</span>・・・1,000円</p>
      </div>
      <!--pricesp2 end-->
      <div class="pricesp2">
          <h4>中型犬(～20kg)</h4>
          <p><span class="pbold">1日1回</span>・・・2,500円</p>
          <p><span class="pbold">1日2回</span>・・・4,000円</p>
          <p><span class="pbold">お散歩のみ</span>・・・1,500円</p>
      </div>
      <!--pricesp2 end-->
      <div class="pricesp2">
          <h4>大型犬(20kg以上)</h4>
          <p><span class="pbold">1日1回</span>・・・3,000円</p>
          <p><span class="pbold">1日2回</span>・・・5,000円</p>
          <p><span class="pbold">お散歩のみ</span>・・・2,000円</p>
      </div>
      <!--pricesp2 end-->
      <div class="pricesp2">
          <h4>猫</h4>
          <p><span class="pbold">1日1回</span>・・・1,500円</p>
          <p><span class="pbold">1日2回</span>・・・2,500円</p>
      </div>
      <!--pricesp2 end-->
      <div class="pricep">
          <p class="pleft">＊2匹目以降は、1匹当たりワンちゃんは＋50％、<br>
              ネコちゃんは＋500円になります。</p>
      </div>
  </div>
  <!--pricesp end-->
  <div class="price2">
      <ul>
          <li>キャンセル料について ご予約の2日前からキャンセル料が発生します。<br> ・2日前：料金の50％<br> ・当日：料金の100％</li>
          <li>料金のお支払は原則、前払いでお願いしていますが、シッター終了時でも構いません。</li>
          <li>エリアが離れている場合では、別途ご相談させて下さい。</li>
      </ul>
      <p><a href="area.html">＞＞　営業エリアはこちらから　＜＜</a></p>
  </div><!-- end-->
</main>`,
});

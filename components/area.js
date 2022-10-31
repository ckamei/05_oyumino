Vue.component('area_content', {
  template: `<main>
  <div class="underline">
      <p></p>
  </div><!--underline end-->
  <div class="station">
      <h2>営業エリア</h2>
      <p>千葉市緑区を中心に営業しております。<br>
          少し離れた場所の場合はご相談させて下さい。</p>
      <div class="scenter">
          <div class="sfigure">
              <figure>
                  <img src="images/station1.jpg">
              </figure>
              <figcaption>
                  ＪＲ「鎌取駅」
              </figcaption>
              <figure>
                  <img src="images/station2.jpg">
              </figure>
              <figcaption>
                  京成「おゆみ野駅」
              </figcaption>
          </div>
          <div class="sfigure">
              <figure>
                  <img src="images/station3.jpg">
              </figure>
              <figcaption>
                      京成「学園前駅」
              </figcaption>
              <figure>
                  <img src="images/station4.jpg">
              </figure>
              <figcaption>
                  京成「ちはら台駅」
              </figcaption>
          </div>
      </div>
  </div><!--station end-->
  <div class="map">
      <h1>おゆみ野　周辺マップ</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25967.092831421218!2d140.15929236825693!3d35.55650264808307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60229a0237e264d1%3A0x55a0bf8830bb36a3!2z44CSMjY2LTAwMzEg5Y2D6JGJ55yM5Y2D6JGJ5biC57eR5Yy644GK44KG44G_6YeO!5e0!3m2!1sja!2sjp!4v1565341773762!5m2!1sja!2sjp" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
  </div>
</main>`,
});

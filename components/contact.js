let contact_content = {
  template: `
  <div class="main">
  <div class="underline">
      <p></p>
  </div>
<div class="contact">
  <h2>お問い合わせ・ご予約</h2>
  <p>お問い合わせ、予約お申込み、メッセージ等々、<br>
    お気軽にお問い合わせください。</p>

  <div id="app">
    <form action="#" class="form" @submit.prevent='submitForm'>
    <p><label>
      <div class="fspace">お名前<span class="red">*</span></div><br>
      <input type="text" v-model.lazy="name" name="name" required>
      <p class="error" v-if="errorName">{{ errorNameAns }}</p>
    </label></p>
    <p><label>
      <div class="fspace">住所<span class="red">*</span></div><br>
      <input type="text" v-model.lazy="address" name="address" required>
      <p class="error" v-if="erroraddress">{{ erroraddressAns }}</p>
    </label></p>
    <p><label>
      <div class="fspace">電話番号<span class="red">*</span></div><br>
      <input type="tel" v-model.lazy="tel" name="tel" required>
      <p class="error" v-if="errorTel">{{ errorTelAns }}</p>
    </label></p>
    <p><label>
      <div class="fspace">メールアドレス<span class="red">*</span></div><br>
      <input type="email" v-model.lazy="mail" name="mail" required>
      <p class="error" v-if="errorMail">{{ errorMailAns }}</p>
    </label></p>
    <p><label>
      <div class="fspace">ペットのお名前<span class="red">*</span></div><br>
      <input type="text" v-model.lazy="pet" name="pet" required>
      <p class="error" v-if="errorPet">{{ errorPetAns }}</p>
    </label></p>
    <p><label>
      <div class="fspace">ペットの頭数<span class="red">*</span></div><br>
      <input type="text" v-model.lazy="number" name="number" required>
      <p class="error" v-if="errorNum">{{ errorNumAns }}</p>
    </label></p>
    <p><label for="day"><div class="fspace">シッター希望日程(開始日)<span class="red">*</span></div></label><br>
      <small>※ハイフンを入れて入力してください（例：2022-08-30）</small><br>
        <input type="text" v-model.lazy="startDate" name="日付"></p>
    <p class="error" v-if="errorStart">{{ errorStartAns }}</p>
    <p><label for="day"><div class="fspace">シッター希望日程(終了日)<span class="red">*</span></div></label><br>
      <small>※ハイフンを入れて入力してください（例：2022-08-30）</small><br>
        <input type="text" v-model.lazy="endDate" name="日付"></p>
    <p class="error" v-if="errorEnd">{{ errorEndAns }}</p>
    <p><label for="msg"><div class="fspace">お問い合わせ内容</div></label><br>
      <textarea id="msg" name="お問い合わせ内容"></textarea></p>
    <p><span class="soushin"><input type="submit" value="送信"></span></p>
    <p><span class="red">*</span>がついているところは入力必須項目です。</p>
  </form>
</div>

  </div >
</div>`,
props: [
  "errorNameAns",
  "erroraddressAns",
  "errorTelAns",
  "errorMailAns",
  "errorPetAns",
  "errorNumAns",
  "errorStartAns",
  "errorEndAns",
  "name",
  'address',
  'tel',
  'mail',
  'pet',
  'number',
  'startDate',
  'endDate',
  'errorName',
  'erroraddress',
  'errorTel',
  'errorMail',
  'errorPet',
  'errorNum',
  'errorStart',
  'errorEnd',
  'submitForm',
],
};

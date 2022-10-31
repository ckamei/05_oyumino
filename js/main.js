let app = new Vue({
  el: "#app",
  data: {
    name: "",
    address: "",
    tel: "",
    mail: "",
    pet: "",
    number: "",
    startDate: "",
    endDate: "",
    isActive: "0",
    errorNameAns: "名前を入力してください",
    erroraddressAns: "住所を入力してください",
    errorTelAns: "電話番号を入力してください",
    errorMailAns: "メールアドレスを入力してください",
    errorPetAns: "名前を入力してください",
    errorNumAns: "頭数を入力してください",
    errorStartAns: "正しく入力してください",
    errorEndAns: "正しく入力してください",
  },
  methods: {
    change: function (num) {
      this.isActive = num;
    },
    errorName: function () {
      if (this.name === "") {
        return;
      } else if (
        !this.name.match(
          /[\u3041-\u3096]|[\u30A1-\u30FA]|[a-zA-Z]|[\u4E00-\u9FFF]/
        )
      ) {
         return this.errorNameAns;
      }
    },
    erroraddress: function () {
      if (this.address === "") {
        return;
      } else if (
        !this.address.match(
          /([^”‘=])((北海道|東京都|(大阪|京都)府|(神奈川|和歌山|鹿児島)県|[^\s\w\d　]{2}県)[^\s\w\d　]{1,6}[市郡区町村][^\s\w\d　]{1,20}[\d０-９〇一-九十上下東西]+[^\s　'”<）」】]*)/
        )
      ) {
         return this.erroraddressAns;
      }
    },
    errorTel: function () {
      if (this.tel === "") {
        return;
      } else if (!this.tel.match(/^0\d{9,10}$/)) {
        return this.errorTelAns;
      }
    },
    errorMail: function () {
      if (this.mail === "") {
        return;
      } else if (
        !this.mail.match(
          /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/
        )
      ) {
        return this.errorMailAns;
      }
    },
    errorPet: function () {
      if (this.pet === "") {
        return;
      } else if (
        !this.pet.match(
          /[\u3041-\u3096]|[\u30A1-\u30FA]|[0-9a-zA-Z]|[\u4E00-\u9FFF]/
        )
      ) {
        return this.errorPetAns;
      }
    },
    errorNum: function () {
      if (this.number === "") {
        return;
      } else if (!this.number.match(/^\d*$/)) {
        return this.errorNumAns;
      }
    },
    errorStart: function () {
      if (this.startDate === "") {
        return;
      } else if (!this.startDate.match(/\d{4}-\d{2}-\d{2}/)) {
        return this.errorStartAns;
      }
    },
    errorEnd: function () {
      if (this.endDate === "") {
        return;
      } else if (!this.endDate.match(/\d{4}-\d{2}-\d{2}/)) {
        return this.errorEndAns;
      }
    },
  },
});

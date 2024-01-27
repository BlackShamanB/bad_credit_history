<template>
  <div>
    <div class="container">
      <div class="backgroing_img_1"></div>
      <div
        class="backgroing_img_1"
        style="
          background-image: -webkit-linear-gradient(
            top,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
          );
        "
      ></div>
      <section class="section-1">
        <div class="row">
          <div class="col-12">
            <div class="section_header">
              Кредит с плохой кредитной историей и просрочками
            </div>
          </div>
          <div class="col-12">
            <div class="section_content text-center">
              Гарантированная помощь в получении кредита даже с плохой кредитной
              историей
            </div>
          </div>
          <div class="col-12">
            <div class="btn_get_credit">Получить кредит</div>
          </div>
        </div>
      </section>
      <section class="section-2">
        <div class="row">
          <div class="col-12">
            <div class="section_content text-black float-left">
              У каждого человека может возникнуть ситуация, при которой ему
              понадобится срочная финансовая помощь. Но не всегда у заемщика
              может быть идеальная кредитная история, которая гарантирует
              одобрение кредита в банке.
            </div>
          </div>
          <div class="col-12">
            <div field="text" class="section_content_2">
              Такого рода проблема может быть связана со следующими
              факторами:<br />
              <ul>
                <li>неоплаченные счета;</li>
                <li>просроченные платежи по кредитам;</li>
                <li>задолженность по кредитным картам и т.д.</li>
              </ul>
              Кредиты срочно с плохой кредитной историей, Вы можете получить,
              обратившись к нам!
            </div>
          </div>
        </div>
      </section>
      <section class="section-3">
        <div class="row">
          <div class="background-3"></div>
          <div class="col-12">
            <div class="section_header">
              Оформим кредит на выгодных условиях
            </div>
          </div>
          <div class="col-12">
            <div class="section_content text-center">
              Вы не платите за наши услуги, пока не получите деньги на руки.
              Наша комиссия после получения кредита составляет 5% от суммы. По
              факту получения вами кредита!
            </div>
          </div>
        </div>
      </section>
      <section class="section-4">
        <div class="row">
          <div class="col-12">
            <div class="section_header">Получите кредит уже сегодня</div>
          </div>
          <div class="col-12">
            <div class="section_content text-center">
              Укажите ваше имя, номер телефона и сумму кредита
            </div>
          </div>
        </div>
      </section>
      <section class="section-5">
        <div class="row">
          <div class="col-12 text-center">
            <Comp />
          </div>
        </div>
      </section>
    </div>

    <Footer></Footer>
  </div>
</template>
<script>
import { Comp } from "./js/form";

export default {
  components: {
    Comp,
  },
};
</script>
<style>
.section-1 {
  height: 100vh;
  vertical-align: middle;
}
.section-2 {
  padding-top: 135px;
  padding-bottom: 135px;
}
.section-3 {
  padding-top: 135px;
  padding-bottom: 75px;
}
.section-4 {
  padding-top: 135px;
  padding-bottom: 45px;
}
.section_header {
  color: white;
  text-align: center;
  font-weight: 900;
  font-size: 62px;
  padding-top: 24px;
  padding-bottom: 24px;
  margin-top: 25%;
}
.section-3 .section_header {
  color: black;
  margin-top: 0;
}
.section-4 .section_header {
  margin-top: 0;
  color: black;
}
.section_content {
  color: white;
  font-size: 30px;
  padding-top: 15px;
  padding-bottom: 30px;
}
.section-2 .section_content {
  padding-bottom: 75px;
}
.section-2 .section_content_2 {
  font-size: 20px;
  line-height: 1.55;
}
.section-3 .section_content {
  color: black;
  padding-top: 41px;
}
.section-4 .section_content {
  color: black;
}
.btn_get_credit {
  color: white;
  line-height: 60px;
  background-color: rgb(255, 133, 98);
  border-radius: 30px;
  padding-left: 60px;
  padding-right: 60px;
  width: max-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 45px;
  cursor: pointer;
}
.backgroing_img_1 {
  position: absolute;
  background-image: url("/public/stacked-coins-math-b.jpeg");
  height: 100vh;
  width: 100%;
  left: 0;
  background-repeat: no-repeat;
  z-index: -1;
  background-size: cover;
}
.background-3 {
  position: absolute;
  width: 100%;
  height: 605px;
  background-color: #ebebeb;
  z-index: -1;
  left: 0;
  margin-top: -135px;
}
.amoforms__textarea_paragraph {
  display: none;
}
</style>

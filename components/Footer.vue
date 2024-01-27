<template>
  <div class="footer">
    <div class="col-text-1">
      <div class="footer-header">Контакты</div>
      <div class="footer-phone">Телефон: <a href="tel:+79874304499">+79874304499</a></div>
      <div class="footer-adress">г.Самара, улица Гагарина дом 53</div>
    </div>
    <div class="col-text-2"></div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style>
.footer {
  background-color: #292929;
}
.col-text-1 {
  padding: 50px;
}

.footer-header {
  font-size: 52px;
  margin-bottom: 45px;
  color: #fff;
}
.footer-phone {
  color: #fff;
  margin-bottom: 30px;
  font-size: 24px;
  line-height: 1.5;
}
.footer-phone a {
    color: inherit;
    text-decoration: none;
}
.footer-adress {
  color: #fff;
  margin-top: 32px;
  font-size: 18px;
  line-height: 1.55;
}
</style>

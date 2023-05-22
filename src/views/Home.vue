<script setup lang="ts">
import ClayCard from "@/components/ClayCard.vue";
console.log("home");
</script>

<template>
  <div class="home">
    <h1 class="title">ike1z's page</h1>
    <div class="card-container">
      <ClayCard title="asdf" msg="aaa" />
      <ClayCard title="asdf" msg="bbb" />
      <ClayCard title="asdf" msg="ccc" />
      <ClayCard title="asdf" msg="ccc" />
      <ClayCard title="asdf" msg="ccc" />
      <ClayCard title="asdf" msg="ccc" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  color: #222;
}
.title {
  text-align: left;
  padding-left: 30px;
}
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
}
</style>

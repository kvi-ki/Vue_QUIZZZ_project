<template>
  <div class="cardPage">
    <Header />
    <Card
      :playersName="name"
      :playersEmail="email"
      :playersHero="hero"
      :playersImage="image"
      :playersLevel="level"
    />
    <Footer />
  </div>
</template>

<script lang="ts" src="./CardPage.ts">
</script>

<style lang="scss">
@import "./CardPage.scss";
</style>
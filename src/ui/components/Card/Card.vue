<template>
  <div class="card">
    <img v-bind:src="playersImage" v-bind:alt="name" class="card__image" />
    <h3 class="card__name">{{ playersName }}</h3>
    <p class="card__email">{{ playersEmail }}</p>
    <p class="card__level">{{ playersLevel }}</p>
  </div>
</template>

<script lang="ts" src="./Card.ts">
</script>

<style lang="scss">
@import "./Card.scss";
</style>
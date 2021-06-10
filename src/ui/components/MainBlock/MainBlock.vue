<template>
  <main class="mainBlock">
    <Form />
    <RateBoard />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Form from "../Form/Form.vue";
import RateBoard from "../RateBoard/RateBoard.vue";

@Component({
  components: {
    Form,
    RateBoard,
  },
})
export default class MainBlock extends Vue {}
</script>

<style lang="scss">
@import "./MainBlock.scss";
</style>

<template>
  <main class="home">
    <Header />
    <MainBlock />
    <Footer />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "../Header/Header.vue";
import MainBlock from "../MainBlock/MainBlock.vue";
import Footer from "../Footer/Footer.vue";


@Component({
  components: {
    Header,
    MainBlock,
    Footer,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
@import "./Home.scss";
</style>
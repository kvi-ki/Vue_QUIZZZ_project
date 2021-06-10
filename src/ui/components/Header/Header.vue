<template>
  <header class="header">
    <nav class="menu">
      <ul class="menu__list">
        <li class="menu__list--element">
          <a href="@/ui/components/Form/Form.vue" class="menu__link" title="Go to Form">Form</a>
        </li>
        <li class="menu__list--element">
          <a href="../RateBoard/RateBoard.vue" class="menu__link" title="Go to Rate Board">Rate Board</a>
        </li>
      </ul>
    </nav>
    <h3 class="logo">QUIZZZ</h3>
    <div class="block">
      <span class="fas fa-search block__icon"></span>
      <input type="text" class="block__search" placeholder="Looking for..." />
    </div>
  </header>
</template>

<script lang="ts" src="./Header.ts"></script>

<style lang="scss">
@import "./Header.scss";
</style>

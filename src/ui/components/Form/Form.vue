<template>
  <form id="form" class="form">
    <label for="name" class="form__label">Name</label>
    <input
      type="text"
      id="name"
      class="form__input"
      v-model="name"
      placeholder="What's your name?"
    />

    <label for="email" class="form__label">Email</label>
    <input
      type="email"
      id="email"
      class="form__input"
      v-model="email"
      placeholder="And your email?"
    />

    <label for="level" class="form__label">Hero</label>
    <select ref="hero_select" class="form__input form__level" v-model="hero">
      <option value="" disabled selected hidden>Would you like to choose a Hero?</option>
      <option
        v-for="heroChosen in heroes"
        :key="heroChosen"
        :value="heroChosen"
      >
        {{ heroChosen }}
      </option>
    </select>

    <!-- If user wants to choose a hero -->
    <fieldset class="form__heroYes" v-if="this.hero === 'Yes'">
      <div class="form__heroYes--hero">
        <img
          src="../../assets/SmartGirlChar.png"
          alt="Smart girl"
          class="hero__image"
        />
        <input
          type="checkbox"
          id="smartGirl"
          value="SmartGirl"
          class="hero__checkbox"
        />
      </div>

      <div class="form__heroYes--hero">
        <img
          src="../../assets/SmartBoyChar.png"
          alt="Smart boy"
          class="hero__image"
        />
        <input
          type="checkbox"
          id="smartBoy"
          value="SmartBoy"
          class="hero__checkbox"
        />
      </div>

      <div class="form__heroYes--hero">
        <img
          src="../../assets/FunnyChar.png"
          alt="Funny character"
          class="hero__image"
        />
        <input
          type="checkbox"
          id="funnyOne"
          value="funnyOne"
          class="hero__checkbox"
        />
      </div>
    </fieldset>

    <!-- If user wants to uplload his own image/photo -->
    <label
      for="image"
      class="form__label"
      v-if="this.hero === 'No, I prefer my own image/photo'"
      >Image/Photo</label
    >
    <input
      type="text"
      id="image"
      class="form__input"
      v-model="image"
      placeholder="Ok, then you can upload your image or photo"
      v-if="this.hero === 'No, I prefer my own image/photo'"
    />

    <label for="level" class="form__label">Level</label>
    <select id="level" class="form__input form__level" v-model="level">
      <option value="" disabled selected hidden>What level do you prefer?</option>
      <option value="Hard">Hard</option>
      <option value="Medium">Medium</option>
      <option value="Easy">Easy</option>
    </select>

    <button title="Create card" @click="createCard" class="form__button">
      Create My Card
    </button>
  </form>
</template>

<script lang="ts" src="./Form.ts">
</script>

<style lang="scss">
@import "./Form.scss";
</style>
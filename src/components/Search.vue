<template>
  <div class="search-box">
    <div class="search-box_input-container">
      <input
        class="search-box_input-container_input"
        type="text"
        placeholder="Search..."
        v-model="keyword"
        v-on:keyup.enter="searchFood({ingr: keyword})"
      />
    </div>
    <div class="search-box_icon-container">
      <i class="fa fa-search search-box_icon-container_icon" @click="searchFood({ingr: keyword})"></i>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { bus } from "@/main";

export default {
  name: "Search",
  data() {
    return {
      keyword: ""
    };
  },
  methods: {
    ...mapActions({
      getFoodItems: "getFoodItems"
    }),
    searchFood() {
      this.getFoodItems({ ingr: this.keyword, clearItems: true });
      // emit event whenever the keyword is changed
      bus.$emit("keywordChanged", this.keyword);
    }
  }
};
</script>

<style lang="scss" scoped>
.search-box {
  display: flex;
  justify-content: space-between;
  background-color: $off-white;
  transform: scale(0);
  transform-origin: 100% 0%;

  &_input-container {
    flex-grow: 12;
    margin-left: 20px;

    &_input {
      width: 100%;
      height: 50px;
      font-size: 30px;
      border: none;
      background-color: $off-white;
      box-sizing: border-box;

      &:focus {
        outline: none;
      }
    }
  }

  &_icon-container {
    flex-grow: 1;
    padding: 10px;

    &_icon {
      font-size: 30px;
      cursor: pointer;
    }
  }
}

div.search-box {
  animation: trans-in 1s ease;
  animation-fill-mode: forwards;
}

@keyframes trans-in {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}
</style>
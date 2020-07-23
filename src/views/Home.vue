<template>
  <div class="home">
    <div class="food-container" v-if="foodList && foodList.length > 0">
      <food-item v-for="item in foodList" :key="item.food.foodId" :item="item"></food-item>
    </div>
    <div v-else-if="status.loading">
      <loader></loader>
    </div>
    <div v-else class="no-data">Your search returned no matches</div>
    <div
      v-if="status.success"
      class="load-more"
      @click="loadMore({})"
    >{{status.loading ? 'loading' : 'load more'}}</div>
  </div>
</template>

<script>
import Loader from "@/components/Loader";
import FoodItem from "@/components/FoodItem";
import { mapGetters, mapActions } from "vuex";
import { bus } from "@/main";

export default {
  name: "Home",
  components: {
    Loader,
    FoodItem
  },
  data() {
    return {
      defualtSearch: "chicken",
      page: 40,
      isModalVisible: false,
      keyword: ""
    };
  },
  created: function() {
    this.getFoodItems({ ingr: this.defualtSearch, clearItems: true });

    // set keyword to be defualtSearch by default
    this.keyword = this.defualtSearch;

    // subscribe to keyword change event in Search.vue
    bus.$on("keywordChanged", data => {
      this.keyword = data;
      this.page = 40;
    });
  },
  methods: {
    ...mapActions({
      getFoodItems: "getFoodItems"
    }),
    loadMore() {
      this.getFoodItems({
        ingr: this.keyword,
        session: this.page
      });
      this.page += 40;
    }
  },
  computed: {
    ...mapGetters(["foodList", "status"])
  }
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  overflow: scroll;
  height: 100vh;
}

.food-container {
  display: flex;
  justify-content: start;
  margin: 10px;
  flex-wrap: wrap;

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
}

.no-data {
  display: flex;
  justify-content: center;
  align-items: center;
  color: $primary;
  font-size: 24px;
  margin: 10vh auto;
  border-radius: 5px;
  width: 80%;
  height: 20vh;
  background-color: $off-white-opacity;
}

.load-more {
  display: flex;
  justify-content: center;
  align-items: center;
  color: $primary;
  font-size: 16px;
  margin: 3vh auto;
  border-radius: 5px;
  width: 80%;
  height: 5vh;
  cursor: pointer;
  background-color: $off-white-opacity;
}
</style>

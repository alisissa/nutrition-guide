<template>
  <div class="home">
    <div class="food-container" v-if="foodList && foodList.length > 0">
      <food-item v-for="item in foodList" :key="item.food.foodId" :item="item"></food-item>
    </div>
    <div v-else-if="status.loading">
      <loader></loader>
    </div>
    <div v-else class="no-data">Your search returned no matches</div>
    <!-- <div class="loading">{{status}}</div>
    <div class="loading" @click="loadMore({})">load more</div>-->
  </div>
</template>

<script>
import Loader from "@/components/Loader";
import FoodItem from "@/components/FoodItem";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Loader,
    FoodItem
  },
  data() {
    return {
      defualtSearch: "chicken",
      page: 20,
      isModalVisible: false
    };
  },
  created: function() {
    // load 10 news item with the default search keyword which is set to technology
    this.getFoodItems({ ingr: this.defualtSearch, session: this.page });
  },
  methods: {
    ...mapActions({
      getFoodItems: "getFoodItems"
    }),
    loadMore() {
      this.page += 20;
      this.getFoodItems({ ingr: this.defualtSearch, session: this.page });
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
  justify-content: space-between;
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
</style>

<template>
  <div class="food-item">
    <details-modal v-show="isModalVisible" @close="closeModal()" :item="item" />
    <img
      :src="item.food.image ? item.food.image : '/images/placeholder-image.png'"
      class="food-item_img"
      @click="showModal"
    />
    <div class="food-item_title">{{item.food.label}}</div>
    <div></div>
  </div>
</template>

<script>
import DetailsModal from "@/components/DetailsModal";

export default {
  name: "food-item",
  components: {
    DetailsModal
  },
  data() {
    return {
      isModalVisible: false
    };
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.food-item {
  width: 280px;
  margin: 20px;
  background-color: $off-white-opacity;
  border-radius: 5px;

  &_title {
    margin: 10px 0;
    color: $primary;
  }

  &_img {
    width: 95%;
    margin-top: 5px;
    object-fit: contain;
  }
}
</style>
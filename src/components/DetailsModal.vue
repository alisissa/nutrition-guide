<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click="close()">
      <div class="modal" role="dialog">
        <header class="modal-header">
          <slot name="header">
            <span class="modal-header_title">{{item.food.label}}</span>
            <button
              type="button"
              class="modal-header_btn-close"
              @click="close"
              aria-label="Close modal"
            >x</button>
          </slot>
        </header>
        <section class="modal-body">
          <img :src="item.food.image ? item.food.image : '/images/placeholder-image.png'" />
          <div class="modal-body_nutrients-title">Nutrients</div>
          <div>Carbs: {{item.food.nutrients.CHOCDF | format}}</div>
          <div>Fat: {{item.food.nutrients.FAT | format}}</div>
          <div>Protein: {{item.food.nutrients.PROCNT | format}}</div>
          <div>Fiber: {{item.food.nutrients.FIBTG | format}}</div>
          <div>Kcal: {{item.food.nutrients.ENERC_KCAL | format}}</div>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "details-modal",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  },
  filters: {
    format: function(value) {
      if (value) {
        return value.toFixed(2);
      }
      return "N/A";
    }
  }
};
</script>
<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  width: 350px;
  background: $off-white;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid $light-gray;
  color: $primary;
  margin-top: 5px;

  &_title {
    font-size: 24px;
    padding-left: 25px;
  }

  &_btn-close {
    border: none;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    color: $primary;
    background: transparent;
  }
}

.modal-body {
  padding: 10px 0;

  img {
    max-width: 300px;
  }

  &_nutrients-title {
    border-bottom: 1px solid $light-gray;
    margin: 5px 0;
  }
}
</style>
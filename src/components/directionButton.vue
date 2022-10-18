<template>
  <div class="directionButton">
    <button>
            <span>
              <font-awesome-icon icon="fa-solid fa-angle-left"></font-awesome-icon>
            </span>
    </button>
    <button>
            <span>
              <font-awesome-icon icon="fa-solid fa-angle-right"></font-awesome-icon>
            </span>
    </button>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.button(){
  position: absolute;
  margin: 0 5px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #ffffff;
  top: 50%;
  transform: translateY(-16px);
}

.directionButton{

  button:nth-child(1) {
    .button();
    left: 15px;
  }

  button:nth-child(2) {
    .button();
    right: 15px;
  }
}
</style>
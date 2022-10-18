<template>
  <div class="Banner">
    <div class="button">
      <div class="direction">
        <direction-button/>
      </div>
      <div class="tags">
        <ul>
          <li v-for="n in imgList.length">
            {{ n }}
          </li>
        </ul>
      </div>
    </div>
    <div class="bannerBox">
      <swiper class="swiper-container">
        <swiper-slide class="swiper-slide" v-for="(item, i) in imgList" :key="i">
          <img :src="item" alt=""/>
        </swiper-slide>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 左右箭头。如果放置在swiper-container外面，需要自定义样式。-->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
      </swiper>

    </div>
  </div>
</template>

<script setup lang="ts">
import {onBeforeMount, onMounted, Ref, ref, watch} from "vue";
import DirectionButton from "../components/directionButton.vue";
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.png';
import img4 from '../assets/img/img4.png';
import img5 from '../assets/img/img5.png';
import {Swiper,SwiperSlide} from "swiper/vue";
import "swiper/swiper-bundle.css"

type prop = {
  imgList: string[],
  button?: boolean,
  tag?: boolean
}


const props = withDefaults(defineProps<prop>(), {
  button: true,
  tag: false,
  imgList: () => {
    return [img1, img2, img3, img4, img5]
  }
})

const showImg: Ref = ref<string>()
let showTag: number = 0


onBeforeMount(() => {
  setInterval(() => {
    showImg.value = props.imgList[showTag++];
    if (showTag > props.imgList.length - 1)
      showTag = 0
  }, 1000)
})

const onSwiper = (swiper:any) => {
  console.log(swiper)
}

const onSlideChange = () => {
  console.log(`slide change`)
}

</script>

<style scoped lang="less">
.Banner {
  width: 100%;
  height: 100%;
  position: relative;

  .tags {
    position: absolute;
    width: max-content;
    height: max-content;

    & > li {

    }
  }

  .bannerBox {
    width: 100%;
    height: 100%;
    position: relative;


    .bannerItem {
      width: inherit;
      height: inherit;
      position: absolute;
      top: 0;
      left: 0;

      & > img {
        height: 100%;
        width: auto;
        object-fit: cover;
      }
    }
  }
}
</style>
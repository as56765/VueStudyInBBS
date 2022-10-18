<script setup lang="ts">
import Avatar from '../components/Avatar.vue'
import avatarSrc from '../assets/Photo.png'
import Post from '../components/PostDetail.vue'
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.png';
import img4 from '../assets/img/img4.png';
import img5 from '../assets/img/img5.png';
const imgList:Array<string> = [img1, img2, img3, img4, img5]

</script>

<template>
  <div class="List">
    <div class="Item" v-for="n in imgList">
      <img :src="n" alt="">
      <div class="ItemInfo">
        <div class="ItemMeta">
          <Avatar :src="avatarSrc"/>
          <span class="metaName">把球</span>
          <span class="metaTime">2012-12-5</span>
          <div class="ItemActions">
            <font-awesome-icon icon="fa-solid fa-heart"></font-awesome-icon>
            <font-awesome-icon icon="fa-solid fa-star"></font-awesome-icon>
            <font-awesome-icon icon="fa-solid fa-message"></font-awesome-icon>
            <span>1.5w</span><span>1w</span><span>2w</span>
          </div>
        </div>
        <div class="ItemDesc">
          <p>
            这是一段帖子的描述,长度智能说是比较厂，还算凑合.这是一段帖子的描述,长度智能说是比较厂，还算凑合这是一段帖子的描述,长度智能说是比较厂，还算凑合这是一段帖子的描述,长度智能说是比较厂，还算凑合</p>
          <div class="ItemTag">
            <p v-for="n in 2">#哈哈#</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Post :isShow="false"/>
</template>

<style scoped lang="less">
.List {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  min-width: calc(48px + 475px * 2);

  .Item {
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    min-width: 475px;
    max-width: 725px;
    justify-self: center;

    & > img:first-child {
      width: 100%;
      height: 400px;
      object-fit: cover;
      background: #eee;
    }

    .ItemInfo {
      padding: 24px;

      .ItemMeta {
        display: grid;
        grid-template-areas:
        "avatar name actions"
        "pubDate pubDate actions";
        grid-template-columns: 42px 1fr 3fr;
        row-gap: 6px;

        .avatar {
          grid-area: avatar;
        }

        .metaName {
          line-height: 40px;
        }

        .metaTime {
          grid-area: pubDate;
          color: #9F9F9F;
          font-size: 12px;
        }

        .ItemActions {
          justify-self: end;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          column-gap: 17px;
          row-gap: 7px;
          grid-area: actions;

          svg {
            width: 32px;
            height: 32px;
          }

          span {
            text-align: center;
          }
        }

      }

      .ItemDesc {
        margin-top: 10px;

        & > p:first-child {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
        }

        .ItemTag {
          margin-top: 10px;
          display: flex;
          gap: 5px;
          flex-wrap: wrap;
          color: #1DA0FF;
        }
      }
    }
  }
}
</style>
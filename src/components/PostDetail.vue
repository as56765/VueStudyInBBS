<template>
  <teleport to="body">
    <div class="modal" v-show="show">
      <div class="modal-background">
        <div class="modalButton">
          <direction-button/>
          <font-awesome-icon icon="fa-solid fa-xmark" class="xMark" @click="changeStatus"></font-awesome-icon>
        </div>
        <div class="modalContent">
          <transition
              enter-active-class="animate__animated animate__fadeIn"
              leave-active-class="animate__animated animate__fadeOut"
          >
            <div class="contentBox">
              <div class="imgBox">
                <img src="../assets/Photo.png" alt="">
              </div>
              <div class="commentBox">
                <header>
                  <Avatar size="32"/>
                  <div class="publishName">
                  <span>
                    帖子发布者
                  </span>
                  </div>
                  <div class="headerAction">
                    <font-awesome-icon icon="fa-solid fa-bars"></font-awesome-icon>
                  </div>
                </header>
                <div class="comment">
                  <div class="commentMaster">
                    <Avatar/>
                    <div class="Item">
                      <p class="ItemName">HitenKe</p>
                      <p class="ItemData">在这种不可避免的冲突下，我们必须解决这个问题. 随机一段废话因何而发生?拉罗什夫科曾经提到过, 取得成就时坚持不懈，要比遭到失败时顽强不屈更重要。这不禁令我深思. 我们不妨可以这样来想: 经过上述讨论, 而这些并不是完全重要, 更加重要的问题是, 这种事实对本人来说意义重大, 相信对这个世界也是有一定意义的.随机一段废话, 到底应该如何实现. 既然如何, 一般来讲, 我们都必须务必慎重的考虑考虑.</p>
                      <p class="ItemTime">{{time}}前</p>
                    </div>
                  </div>
                  <div v-for="n in 5" class="commentItem">
                    <Avatar/>
                    <div class="Item">
                      <p class="ItemName">HitenKe</p>
                      <p class="ItemData">在这种不可避免的冲突下，我们必须解决这个问题. 随机一段废话因何而发生?拉罗什夫科曾经提到过, 取得成就时坚持不懈，要比遭到失败时顽强不屈更重要。这不禁令我深思. 我们不妨可以这样来想: 经过上述讨论, 而这些并不是完全重要, 更加重要的问题是, 这种事实对本人来说意义重大, 相信对这个世界也是有一定意义的.随机一段废话, 到底应该如何实现. 既然如何, 一般来讲, 我们都必须务必慎重的考虑考虑.</p>
                      <p class="ItemTime">{{time}}前</p>
                    </div>
                    <font-awesome-icon icon="fa-solid fa-heart"></font-awesome-icon>
                  </div>
                </div>
                <div class="commentAction">
                  <font-awesome-icon icon="fa-solid fa-heart"></font-awesome-icon>
                  <font-awesome-icon icon="fa-solid fa-comment"></font-awesome-icon>
                  <font-awesome-icon icon="fa-solid fa-share"></font-awesome-icon>
                </div>
                <div class="commentData">
                  <p>
                    <span class="dataLike">{{likeSum}} 次点赞</span>
                  </p>
                  <p>
                    <span class="dataTime">{{time}} 天前</span>
                  </p>
                </div>
                <div class="commentInput">
                  <from>
                    <font-awesome-icon icon="fa-solid fa-face-smile"></font-awesome-icon>
                    <textarea placeholder="添加评论..."></textarea>
                    <button type="button" disabled>
                      <span>发送</span>
                    </button>
                  </from>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import Avatar from './Avatar.vue'
import {Ref,ref} from "vue";
import dirButton from '../components/directionButton.vue'
import DirectionButton from "../components/directionButton.vue";
type prop = {
  isShow:boolean
}

const props = withDefaults(defineProps<prop>(),{
  isShow:true
})

const show:Ref = ref<boolean>(props.isShow)


const changeStatus = () => {
  show.value =!show.value;
}

const emit = defineEmits(['show-post'])

const showPost = () => {
  emit('show-post')
}


</script>

<style scoped lang="less">
@background: rgba(0, 0, 0, 0.65);
@fontColor: rgba(38, 38, 38);


.modal {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;

  .modal-background {
    background: @background;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .modalButton {

      .xMark{
        position: absolute;
        font-size: 16px;
        top: 30px;
        right: 30px;
        color: #9F9F9F;
        cursor: pointer;
      }
    }

    .modalContent {
      display: flex;
      justify-content: center;
      align-items: center;
      width: inherit;
      height: 913px;

      .contentBox {
        display: flex;

        .imgBox {
          display: flex;
          max-width: 913px;
          max-height: 913px;
          flex-basis: 913px;
          aspect-ratio: 1/1;
          background: rgb(0, 0, 0);
          position: relative;
          align-items: center;
          justify-content: center;
          overflow: hidden;

          img {
            width: 100.5%;
            top: 0;
            object-fit: cover;
          }
        }

        .commentBox {
          display: grid;
          flex: 1;
          max-height: 913px;
          max-width: 500px;
          min-width: 405px;
          background: #FFFFFF;
          grid-template-rows: max-content 1fr max-content max-content max-content;
          z-index: 5;

          header {
            display: flex;
            padding: 14px 6px 14px 16px;
            border-bottom: 1px solid rgb(239, 239, 239);

            .publishName {
              flex: 1;
              padding-left: 16px;

              span {
                color: @fontColor;
                font-size: 15px;
                font-weight: 600;
                line-height: 2;
              }

            }

            .headerAction {
              display: flex;
              height: 100%;
              aspect-ratio: 1/1;
              justify-content: center;
              align-items: center;
            }
          }

          .comment{
            display: grid;
            grid-template-rows: 1fr max-content;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            flex: 1;
            overflow-y: auto;
            padding: 0 16px;
            gap: 8px;

            &::-webkit-scrollbar{
              width: 0;
              height: 0;
            }

            .commentMaster{
              display: grid;
              grid-template-columns: max-content 1fr;

              .Item{
                padding: 8px 16px;
                .ItemName{
                  font-weight: 600;
                  font-size: 18px;
                }

                .ItemData{
                  font-size: 12px;
                }

                .ItemTime{
                  color: rgb(142,142,142);
                }
              }
            }

            .commentItem{
              display: grid;
              grid-template-columns: max-content 1fr max-content;

              .Item{
                padding: 0 16px;
                .ItemName{
                  font-weight: 600;
                  font-size: 18px;
                }

                .ItemData{
                  font-size: 12px;
                }

                .ItemTime{
                  color: rgb(142,142,142);
                }
              }
            }
          }

          .commentAction{
            padding: 6px 16px 8px 16px;
            border-top: 1px solid rgb(239,239,239);

            &>svg{
              font-size: 24px;
              margin: 8px;
              cursor: pointer;
            }
          }

          .commentData{
            padding: 0 16px;

            .dataLike{
              font-weight: 600;
            }

            .dataTime{
              color: rgb(142,142,142);
              font-size: 12px;
            }
          }

          .commentInput{
            border-top: 1px solid rgb(239,239,239);

            &>from{
              position: relative;
              display: flex;
              align-items: center;
              padding: 8px 8px 8px 0;

              &>svg{
                font-size: 24px;
                margin: 8px 16px;
                cursor: pointer;
              }

              &>textarea{
                height: 18px;
                border: none;
                resize: none;
                font-size: 12px;
                line-height: 18px;
                flex: 1;
              }

              &>button{
                opacity: .3;
                border: none;
                background: #FFFFFF;

                &>span{
                  color: rgb(0,149,246);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
<template>
  <nav class="navbar">
    <router-link to="/">
      <img id="logo" src="../assets/logo.svg"/>
    </router-link>
    <div class="searchInput">
      <div>
        <input type="text" placeholder="搜索"/>
        <font-awesome-icon id="searchIcon" icon="fa-solid fa-magnifying-glass"/>
      </div>
    </div>
    <div class="navItems">
      <router-link to="/" class="navItem">
        <font-awesome-icon icon="fa-solid fa-house"/>
      </router-link>
      <button class="navItem">
        <font-awesome-icon icon="fa-solid fa-circle-plus"/>
      </button>
      <div class="profileDropDown navItem" @mouseenter="hoverActive" @mouseleave="hoverActive">
        <Avatar size="46"/>
        <transition
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
        >
          <div class="dropDownMenu" v-show="hover">
            <ul>
              <li>
                <router-link to="/my">
                  个人主页
                </router-link>
              </li>
              <li>
                退出登录
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import Avatar from '../components/Avatar.vue'
import {TweenMax} from 'gsap'
import {ref, Ref} from "vue";

let hover: Ref = ref<boolean>(false)

const hoverActive = () => {
  hover.value = !hover.value
}

</script>

<style scoped lang="less">


.navbar {
  width: 80%;
  margin: 0 auto;
  height: 100%;
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;

  #logo {
    width: 300px;
    height: 20px;
    align-self: flex-start;
  }

  .searchInput {


    div:first-child {
      width: 80%;
      height: 40px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }


    input {
      width: 100%;
      height: 40px;
      background: #F1F1F1;
      border-radius: 14px;
      border: none;
      padding-left: 45px;
    }

    #searchIcon {
      width: 20px;
      height: 20px;
      position: absolute;
      left: 17px;
      top: 50%;
      transform: translateY(-10px);
    }
  }

  .navItems {

    display: flex;
    justify-self: end;
    gap: 24px;
    align-items: center;


    button {
      background: none;
    }


    svg {
      width: 38px;
      height: 38px;
    }

    .profileDropDown {
      position: relative;

      .dropDownMenu {
        top: 50px;
        right: 0;
        position: absolute;
        width: 116px;
        height: 108px;
        background: #FFFFFF;
        box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
        border-radius: 4px;
        display: flex;
        /* identical to box height */
        text-align: center;
        color: #000000;
        justify-content: center;
        align-items: center;

        &::before {
          width: 0;
          height: 0;
          display: block;
          content: "";
          position: absolute;
          top: -10px;
          right: 14px;
          border-bottom: 10px solid #ffffff;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
        }

        ul {
          width: 64px;
          height: 62.54px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;

          li {
            font-style: normal;
            font-weight: 400;
            line-height: 22px;
            width: 64px;
          }
        }
      }
    }
  }
}
</style>
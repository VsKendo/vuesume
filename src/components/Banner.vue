<!-- 首屏banner -->

<template>
  <div class="banner" id="banner">
    <!-- 加载层 -->
    <div class="bg back"><h1>奋笔疾书中...</h1></div>
    <!-- 脚贴 -->
    <div class="fork-me">
      <a class="fork-me-link" href="https://github.com/VsKendo/vuesume" target="_blank">
        <span class="fork-me-text">Visit my GitHub</span>
      </a>
    </div>
    <!-- 背景层 -->
    <div data-aos="fade-in" class="bg"></div>
    <!-- 内容层 -->
    <div data-aos="fade-in" class="desc">
            <span class="avatar ant-avatar ant-avatar-circle ant-avatar-image">
                <img draggable="false" src="../assets/vskendo-pure.png">
            </span>
      <div>
        <h1 style="width: 500px">{{ banner.title || 'VsKendo的主页' }}</h1>
        <h3 class="typer white">
          鄙人，
          <vue-typer :text="banner.desc || 'VsKendo'" :type-delay='200' eraseStyle='select-all'></vue-typer>
        </h3>
        <br>
        <!--   简介下的按钮     -->
        <div class="banner-button">
          <a-row type="flex" justify="space-around" align="middle" :gutter="[8,32]">
            <a-col :order="1" :xs="24" :sm="24" :md="8">
              <a-button ghost shape="round" size="large" icon="arrow-down" href="#anchor-next" v-smooth-scroll>
                开始阅读
              </a-button>
            </a-col>
            <a-col :order="2" :xs="24" :sm="24" :md="8">
              <a-button ghost shape="round" size="large" icon="container" href="https://blog.vskendo.com" target="_blank">
                我的博客
              </a-button>
            </a-col>
            <a-col :order="3" :xs="24" :sm="24" :md="8">
              <a-button ghost shape="round" size="large" icon="carry-out" href="https://blog.nowcoder.net/vskendo" target="_blank">
                我的题解
              </a-button>
            </a-col>
          </a-row>
        </div>

      </div>
    </div>
    <a data-aos="fade-in" class="scroll-next animated infinite bounce" href="#anchor-next" v-smooth-scroll>
      <a-icon type="double-right" style="transform: rotate(90deg);"/>
    </a>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {mapGetters} from 'vuex';
// import { ContainerFilled, CarryOutFilled, DownloadOutlined } from '@ant-design/icons-vue';

// tslint:disable-next-line:no-var-requires
import {VueTyper} from 'vue-typer';

@Component({
  components: {
    VueTyper,
    // CarryOutFilled, ContainerFilled, DownloadOutlined,
    Badge: () => import('@/components/footer/Badge.vue'),
  },
  computed: {
    ...mapGetters(['banner']),
  },
})
export default class Banner extends Vue {
}
</script>

<style scoped lang="scss">
@import '../styles/variable';
@import '../styles/fork';

.ant-btn:hover {
  transform: scale(1.1);
  border: 1px solid #f44336;
  background-color: #f44336;
  -webkit-box-shadow: 0 14px 26px -12px rgba(233, 30, 99, 0.42), 0 4px 23px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2) !important;
}

.banner {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  overflow-x: hidden;

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: $--color-cyan url("../assets/bg_banner.jpg") no-repeat center center scroll;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    .back {
      z-index: -2;
    }

    h1 {
      display: block;
      margin-top: 45vh;
      color: $--font-color;
      font-size: 2em;
      text-shadow: 0 0 5px $--color-gray;
    }
  }

  .desc {
    margin-bottom: 15vh;

    * {
      //display: block;
      margin: auto;
      color: $--font-color;
      text-shadow: 0 0 5px rgba(0, 0, 0, .5);
    }

    .avatar {
      z-index: -1;
      width: 160px;
      height: 160px;
      line-height: 160px;
      box-shadow: 0 0 10px rgba(0, 0, 0, .5);
    }

    h1 {
      font-size: 3em;
      margin: 3rem auto 1rem;
    }

    h3 {
      font-size: 1.5em;

      .vue-typer {
        display: inline-block;
      }
    }

    @media screen and (max-width: $--screen-sm-min) {
      h1 {
        font-size: 2.3em;
      }

      h3 {
        font-size: 1.3em;
      }
    }
  }

  .scroll-next {
    position: absolute;
    display: inline-block;
    width: 100%;
    padding: 2rem 0;
    bottom: 1vh;
    font-size: 1.5rem;
    color: $--font-color;
    animation-duration: 2s;
    animation-delay: 1s;

    * {
      transform: rotate(45deg);
    }
  }
}
</style>

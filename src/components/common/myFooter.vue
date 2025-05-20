<template>
  <div class="myFooter-wrap" v-show="showFooter">
    <div class="myFooter">
      <div class="footer-title">{{$store.state.webInfo.footer}}</div>
      <div class="footer-links">
        <a href="https://github.com/your-username" target="_blank">
          <i class="fa fa-github"></i> GitHub
        </a>
        <a href="https://gitee.com/your-username" target="_blank">
          <i class="fa fa-git"></i> Gitee
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      showFooter: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {}
    },
    created() {
    }
  }
</script>

<style scoped>
  .myFooter-wrap {
    user-select: none;
    animation: hideToShow 2s;
  }

  .myFooter {
    border-radius: 1.5rem 1.5rem 0 0;
    background: var(--gradientBG);
    text-align: center;
    color: var(--white);
    background-size: 300% 300%;
    animation: gradientBG 10s ease infinite;
    padding: 20px 0;
  }

  .footer-title {
    font-size: 16px;
    margin-bottom: 15px;
  }

  .footer-links {
    margin-bottom: 15px;
  }

  .footer-links a {
    color: var(--maxGreyFont);
    text-decoration: none;
    margin: 0 15px;
    transition: all 0.3s;
  }

  .footer-links a:hover {
    color: var(--themeBackground);
  }

  .footer-links i {
    margin-right: 5px;
  }

  .icp {
    color: var(--maxGreyFont);
    font-size: 13px;
  }

  .icp a {
    color: var(--maxGreyFont);
    text-decoration: none;
    transition: all 0.3s;
  }

  .icp a:hover {
    color: var(--themeBackground);
  }
</style>

<template>
  <div>
    <!-- 两句诗 -->
    <div class="my-animation-slide-top">
      <twoPoem :isHitokoto="false"></twoPoem>
    </div>

    <div style="background: var(--background)" class="my-animation-slide-bottom">
      <div class="about-wrap">
        <h1 style="font-size: 40px;font-weight: 500;letter-spacing: 5px;">个人简介</h1>
        <!-- 对话框 -->
        <div class="about-box">
          <h4>与 {{$store.state.webInfo.webName}} 对话中...</h4>
          <div v-if="sayShow" id="say-container"></div>
        </div>
      </div>

      <!-- 页脚 -->
      <myFooter></myFooter>
    </div>
  </div>
</template>

<script>
  const twoPoem = () => import( "./common/twoPoem");
  const myFooter = () => import( "./common/myFooter");

  export default {
    components: {
      twoPoem,
      myFooter
    },
    data() {
      return {
        sayShow: false,
        sayContent: [
          {
            "talk": ["你好！👋", "欢迎来到我的个人博客"],
            "reply": ["请介绍一下你自己 😊", "我想了解更多 😃"]
          }, {
            "talk": ["我是一名计算机专业的学生",
              "目前正在准备保研",
              "这个网站主要用于展示我的学术成果和研究经历"],
            "reply": ["能详细说说你的教育背景吗？"]
          }, {
            "talk": ["我来自XX大学计算机科学与技术专业",
              "主修课程包括：数据结构、算法分析、操作系统等",
              "GPA：X.X/4.0，专业排名：X%"],
            "reply": ["你的科研经历如何？"]
          }, {
            "talk": ["我参与过多个科研项目",
              "在XX实验室担任研究助理",
              "发表过X篇论文，获得过X项专利"],
            "reply": ["有什么获奖经历吗？"]
          }, {
            "talk": ["获得过XX奖学金",
              "XX竞赛X等奖",
              "XX荣誉称号等"],
            "reply": ["这个网站有什么特色？"]
          }, {
            "talk": ["这里记录了我的学习历程",
              "分享我的研究心得",
              "展示我的项目经验",
              "欢迎与我交流！"],
            "reply": []
          }
        ],
        sayIndex: 0
      }
    },

    computed: {},

    watch: {},

    created() {
      setTimeout(() => {
        this.sayShow = true;
        this.say();
      }, 2000);
    },

    mounted() {

    },

    methods: {
      answer(index, value) {
        $(".say-select").remove();

        let htmlStr = `<div class="say-right my-animation-slide-bottom"><span class="say-item-right">${value}</span></div>`;
        let frag = document.createRange().createContextualFragment(htmlStr);
        document.getElementById("say-container").appendChild(frag);
        if (index === 0) {
          setTimeout(() => {
            this.say();
          }, 500);
        } else {
          let htmlStr = `<div class="say-left my-animation-slide-bottom"><span class="say-item-left">👋 👋 👋</span></div>`;
          let frag = document.createRange().createContextualFragment(htmlStr);
          document.getElementById("say-container").appendChild(frag);
        }
      },
      say() {
        if (!this.$common.isEmpty(this.sayContent[this.sayIndex]) && !this.$common.isEmpty(this.sayContent[this.sayIndex].talk)) {
          this.sayContent[this.sayIndex].talk.forEach((value, index, talk) => {
            setTimeout(() => {
              let htmlStr = `<div class="say-left my-animation-slide-bottom"><span class="say-item-left">${value}</span></div>`;
              let frag = document.createRange().createContextualFragment(htmlStr);
              document.getElementById("say-container").appendChild(frag);
              if (talk.length === index + 1) {
                if (!this.$common.isEmpty(this.sayContent[this.sayIndex].reply)) {
                  setTimeout(() => {
                    if (this.sayContent[this.sayIndex].reply.length === 2) {
                      let reply0 = this.sayContent[this.sayIndex].reply[0];
                      let reply1 = this.sayContent[this.sayIndex].reply[1];
                      let htmlStr = `<div class="say-left my-animation-slide-bottom"><span class="say-select">${reply0}</span><span class="say-select">${reply1}</span></div>`;
                      let frag = document.createRange().createContextualFragment(htmlStr);
                      document.getElementById("say-container").appendChild(frag);
                      document.getElementsByClassName("say-select")[0].onclick = () => {
                        this.answer(0, reply0);
                      }
                      document.getElementsByClassName("say-select")[1].onclick = () => {
                        this.answer(1, reply1);
                      }
                    } else if (this.sayContent[this.sayIndex].reply.length === 1) {
                      let reply0 = this.sayContent[this.sayIndex].reply[0];
                      let htmlStr = `<div class="say-left my-animation-slide-bottom"><span class="say-select">${reply0}</span></div>`;
                      let frag = document.createRange().createContextualFragment(htmlStr);
                      document.getElementById("say-container").appendChild(frag);
                      document.getElementsByClassName("say-select")[0].onclick = () => {
                        this.answer(0, reply0);
                      }
                    }
                    this.sayIndex += 1;
                  }, 500);
                }
              }
            }, index * 500);
          });
        }
      }
    }
  }
</script>

<style>

  .about-wrap {
    text-align: center;
    width: 95%;
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 20px 80px;
  }

  .about-box {
    min-height: 450px;
    padding: 5px;
    background-color: var(--maxMaxLightGray);
    border-radius: 10px;
  }

  .say-item-left {
    padding: 5px 12px;
    border-radius: 1rem;
    color: var(--maxGreyFont);
    background-color: var(--lightGray);
  }

  .say-item-right {
    padding: 5px 12px;
    border-radius: 1rem;
    color: var(--white);
    background-color: var(--translucent);
  }

  .say-left {
    display: flex;
    justify-content: left;
    margin: 15px;
  }

  .say-right {
    display: flex;
    justify-content: right;
    margin: 15px;
  }

  .say-select {
    cursor: pointer;
    background: var(--black);
    border-radius: 5px;
    padding: 5px 10px;
    margin-right: 12px;
    margin-top: 20px;
    color: var(--white);
    border: 1px solid var(--black);
  }

  .say-select:hover {
    border: 1px solid var(--themeBackground);
    color: var(--themeBackground);
    box-shadow: 0 0 5px var(--themeBackground);
  }
</style>

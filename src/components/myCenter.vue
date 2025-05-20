<template>
  <div>
    <div class="myCenter-container my-animation-slide-bottom">
      <!-- 个人信息 -->
      <div class="myCenter-info">
        <div class="myCenter-avatar">
          <el-avatar :size="120" :src="$store.state.webInfo.avatar"></el-avatar>
        </div>
        <div class="myCenter-name">{{ $store.state.webInfo.title }}</div>
        <div class="myCenter-intro">{{ $store.state.webInfo.footer }}</div>
        <div class="myCenter-contact">
          <a href="https://github.com/yourusername" target="_blank">
            <i class="fa fa-github"></i>
          </a>
          <a href="https://gitee.com/yourusername" target="_blank">
            <i class="fa fa-git"></i>
          </a>
          <a href="mailto:your.email@example.com">
            <i class="fa fa-envelope"></i>
          </a>
        </div>
      </div>

      <!-- 详细信息 -->
      <div class="myCenter-details">
        <div class="detail-section">
          <h3>个人简介</h3>
          <p>我是一名计算机科学与技术专业的硕士研究生,主要研究方向为深度学习和计算机视觉。在校期间,我积极参与各类科研项目和竞赛,并取得了优异的成绩。</p>
        </div>

        <div class="detail-section">
          <h3>教育经历</h3>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-date">2022-至今</div>
              <div class="timeline-content">
                <h4>XX大学</h4>
                <p>计算机科学与技术 硕士研究生</p>
                <p>研究方向：深度学习、计算机视觉</p>
                <p>GPA：3.8/4.0</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">2018-2022</div>
              <div class="timeline-content">
                <h4>XX大学</h4>
                <p>计算机科学与技术 本科</p>
                <p>主修课程：数据结构、算法分析、操作系统、计算机网络等</p>
                <p>GPA：3.7/4.0</p>
              </div>
            </div>
          </div>
        </div>

        <div class="detail-section">
          <h3>获奖情况</h3>
          <div class="awards">
            <div class="award-item">
              <div class="award-date">2023年</div>
              <div class="award-content">
                <h4>国家奖学金</h4>
                <p>表彰在学术研究和综合素质方面的突出表现</p>
              </div>
            </div>
            <div class="award-item">
              <div class="award-date">2022年</div>
              <div class="award-content">
                <h4>优秀毕业生</h4>
                <p>表彰在本科阶段的优秀表现</p>
              </div>
            </div>
            <div class="award-item">
              <div class="award-date">2021年</div>
              <div class="award-content">
                <h4>全国大学生计算机设计大赛一等奖</h4>
                <p>项目：基于深度学习的图像识别系统</p>
              </div>
            </div>
          </div>
        </div>

        <div class="detail-section">
          <h3>专业技能</h3>
          <div class="skills">
            <div class="skill-category">
              <h4>编程语言</h4>
              <div class="skill-tags">
                <span>Python</span>
                <span>Java</span>
                <span>C++</span>
                <span>JavaScript</span>
              </div>
            </div>
            <div class="skill-category">
              <h4>框架与工具</h4>
              <div class="skill-tags">
                <span>PyTorch</span>
                <span>TensorFlow</span>
                <span>Vue.js</span>
                <span>Docker</span>
              </div>
            </div>
            <div class="skill-category">
              <h4>研究方向</h4>
              <div class="skill-tags">
                <span>深度学习</span>
                <span>计算机视觉</span>
                <span>图像处理</span>
                <span>机器学习</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <myFooter></myFooter>
  </div>
</template>

<script>
import myFooter from './common/myFooter'

export default {
  name: 'myCenter',
  components: {
    myFooter
  }
}
</script>

<style scoped>
.myCenter-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
}

.myCenter-info {
  text-align: center;
  margin-bottom: 40px;
}

.myCenter-avatar {
  margin-bottom: 20px;
}

.myCenter-name {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  color: var(--fontColor);
}

.myCenter-intro {
  color: var(--greyFont);
  margin-bottom: 20px;
  font-size: 16px;
}

.myCenter-contact {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.myCenter-contact a {
  color: var(--greyFont);
  font-size: 24px;
  transition: all 0.3s;
}

.myCenter-contact a:hover {
  color: var(--themeBackground);
}

.myCenter-details {
  display: grid;
  gap: 30px;
}

.detail-section {
  background: var(--background);
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
}

.detail-section h3 {
  font-size: 20px;
  margin-bottom: 20px;
  color: var(--fontColor);
  border-bottom: 2px solid var(--themeBackground);
  padding-bottom: 10px;
}

.timeline {
  display: grid;
  gap: 20px;
}

.timeline-item {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 20px;
}

.timeline-date {
  font-weight: bold;
  color: var(--themeBackground);
}

.timeline-content h4 {
  margin-bottom: 5px;
  color: var(--fontColor);
}

.timeline-content p {
  color: var(--greyFont);
  margin: 5px 0;
}

.awards {
  display: grid;
  gap: 20px;
}

.award-item {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 20px;
}

.award-date {
  font-weight: bold;
  color: var(--themeBackground);
}

.award-content h4 {
  margin-bottom: 5px;
  color: var(--fontColor);
}

.award-content p {
  color: var(--greyFont);
}

.skills {
  display: grid;
  gap: 20px;
}

.skill-category h4 {
  margin-bottom: 10px;
  color: var(--fontColor);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-tags span {
  background: var(--background);
  border: 1px solid var(--borderColor);
  padding: 5px 15px;
  border-radius: 20px;
  color: var(--greyFont);
  transition: all 0.3s;
}

.skill-tags span:hover {
  background: var(--themeBackground);
  color: white;
  border-color: var(--themeBackground);
}
</style> 
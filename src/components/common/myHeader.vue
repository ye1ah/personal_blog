<template>
  <div class="myHeader">
    <div class="myHeader-container">
      <div class="myHeader-left">
        <div class="myHeader-logo" @click="$router.push('/')">
          <img :src="$store.state.webInfo.avatar" alt="logo">
          <span>{{ $store.state.webInfo.webName }}</span>
        </div>
      </div>
      <div class="myHeader-right">
        <div class="myHeader-menu">
          <div class="myHeader-menu-item" @click="$router.push('/')">首页</div>
          <div class="myHeader-menu-item" @click="$router.push('/sort')">分类</div>
          <div class="myHeader-menu-item" @click="$router.push('/myCenter')">关于我</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myHeader'
}
</script>

<style scoped>
.myHeader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: var(--background);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  z-index: 100;
}

.myHeader-container {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.myHeader-left {
  display: flex;
  align-items: center;
}

.myHeader-logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.myHeader-logo img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.myHeader-logo span {
  font-size: 20px;
  font-weight: bold;
  color: var(--black);
}

.myHeader-right {
  display: flex;
  align-items: center;
}

.myHeader-menu {
  display: flex;
  gap: 20px;
}

.myHeader-menu-item {
  font-size: 16px;
  color: var(--black);
  cursor: pointer;
  transition: all 0.3s;
}

.myHeader-menu-item:hover {
  color: var(--themeBackground);
}
</style> 
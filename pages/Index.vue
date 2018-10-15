<template>
    <div class="page-index">
       
        <h2>巨鹿</h2>
        <h4>—木瓜出品—</h4>
        <h6>仅限lavas 学习测试用</h6>
        <div class="jujilist">
            <router-link to="/yanxigonglueall">延禧攻略</router-link>
            <router-link to="/meirenxinjiall">美人心计</router-link>
        
        </div>
        
    </div>
    
</template>

<script>
function setState(store) {}

export default {
  name: "index",
  metaInfo: {
    title: "Home",
    titleTemplate: "%s - Lavas",
    meta: [
      { name: "keywords", content: "lavas PWA" },
      {
        name: "description",
        content:
          "基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"
      }
    ]
  },
  async asyncData({ store, route }) {
    setState(store);
  }
};
</script>

<style lang="stylus" scoped>
.page-index {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
        font-size: 46px;
        font-weight: 500;
        margin-bottom: 0;
    }
}
.jujilist{
    a{
        display inline-block
        text-decoration none
        margin 0px 2px 
    }
}
</style>

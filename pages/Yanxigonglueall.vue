<template>
    <div class="yanxigonglue-wrapper">
        <article class="yanxigonglue-content">
            <header class="yanxigonglue-title">
                延禧攻略
            </header>
            <!-- link to another yanxigonglue -->
            <p>
            <template v-for="n in 70">
                <router-link class="btnlink" :to="{
                name: 'yanxigonglueId',
                params: {
                    id: 1
                }
            }">{{n}}</router-link>
             </template> 
             </p>
            <router-link to="/">首页</router-link>
        </article>
    </div>
</template>

<script>
export default {
  name: "yanxigonglue-_id",
  metaInfo() {
    return {
      title: `延禧攻略 ${this.$route.params.id}`,
      titleTemplate: "%s - 巨鹿",
      meta: [
        { name: "keywords", content: `延禧攻略` },
        {
          name: "description",
          content: `延禧攻略 ${this.$route.params.id}`
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>

.yanxigonglue-content {
    font-size: 16px;
    line-height: 30px;
    margin-top: 30px;

    .yanxigonglue-title {
        margin-bottom: 20px;
        padding: 10px 0;
        font-size: 36px;
        font-weight: bold;
    }
    .btnlink{
        text-decoration:none
        color:#333
        border:1px #eee solid 
        padding:1px 6px 0px 6px
        display :inline-block
        margin: 3px 4px
    }
}
</style>
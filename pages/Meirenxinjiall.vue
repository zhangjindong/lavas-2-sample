<template>
    <div class="meirenxinji-wrapper">
        <article class="meirenxinji-content">
            <header class="meirenxinji-title">
                美人心计
            </header>
            <!-- link to another meirenxinji -->
            <p>
            <template v-for="n in 40">
                <router-link class="btnlink" :to="{
                name: 'meirenxinjiId',
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
  name: "meirenxinji-_id",
  metaInfo() {
    return {
      title: `美人心计 ${this.$route.params.id}`,
      titleTemplate: "%s - Lavas",
      meta: [
        { name: "keywords", content: `美人心计` },
        {
          name: "description",
          content: `美人心计 ${this.$route.params.id}`
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>

.meirenxinji-content {
    font-size: 16px;
    line-height: 30px;
    margin-top: 30px;

    .meirenxinji-title {
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
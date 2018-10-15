<template>
    <div class="yanxigonglue-wrapper">
        <article class="yanxigonglue-content">
            <header class="yanxigonglue-title">
                  延禧攻略 第{{$route.params.id}}集 
            </header>
            <!-- link to another yanxigonglue -->
            <p>
                <iframe width=100% height=300 v-bind:src="jujiqian+juji[$route.params.id-1]+'.html'" frameborder="0"></iframe>
            </p>
           <router-link :to="{
                name: 'yanxigonglueId',
                params: {
                    id: Number($route.params.id) + 1
                }
            }">下集 {{Number($route.params.id) + 1}}</router-link>
           
            <p>
            <template v-for="n in 70">
                <router-link class="btnlink" :to="{
                name: 'yanxigonglueId',
                params: {
                    id: n
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
      title: `美人心计 ${this.$route.params.id}`,
      titleTemplate: "%s - 巨鹿",
      meta: [
        { name: "keywords", content: `美人心计` },
        {
          name: "description",
          content: `美人心计 ${this.$route.params.id}`
        }
      ]
    };
  },
  data() {
    return {
      jujiqian:
        "http://www.yy6080.cn/1717yun/index.php?url=https://www.iqiyi.com/",
      juji: [
        "v_19rr2aesjs",
        "v_19rr2aihnc",
        "v_19rr2alpgc",
        "v_19rr2al5wo",
        "v_19rr2alz4s",
        "v_19rr2akbkk",
        "v_19rr2ajz8g",
        "v_19rr2aktfc",
        "v_19rr2aoia0",
        "v_19rr2ao4ls",
        "v_19rr2gftcw",
        "v_19rr2ggmo0",
        "v_19rr2ggx34",
        "v_19rr2gghas",
        "v_19rr2ger8o",
        "v_19rr2gehms",
        "v_19rr1xuxy0",
        "v_19rr1xuh94",
        "v_19rr1xy35w",
        "v_19rr1xzbfg",
        "v_19rr1xz5jg",
        "v_19rr1xyzw0",
        "v_19rr1xyqu8",
        "v_19rr1xx5hg",
        "v_19rqycryi8",
        "v_19rqycvwm4",
        "v_19rqycvo8o",
        "v_19rqycvnz4",
        "v_19rqycwk7o",
        "v_19rqycwnuo",
        "v_19rqycwfd8",
        "v_19rqycwa74",
        "v_19rqy4p6i4",
        "v_19rqy4nju4",
        "v_19rqy4ncnk",
        "v_19rqy4n8hg",
        "v_19rqy4my30",
        "v_19rqy4n304",
        "v_19rqy4o7k0",
        "v_19rqy4nv78",
        "v_19rqybtlso",
        "v_19rqybtnkg",
        "v_19rqybto5o",
        "v_19rqybtgg0",
        "v_19rqyx6u0o",
        "v_19rqyx6oo0",
        "v_19rqyx3gjc",
        "v_19rqyx36so",
        "v_19rqyx3810",
        "v_19rqyx2yc4",
        "v_19rqz2l7hc",
        "v_19rqz2l9mw",
        "v_19rqz2m9f4",
        "v_19rqz2m1to",
        "v_19rqyqe3xw",
        "v_19rqyqe6cg",
        "v_19rqyo9di0",
        "v_19rqyo95v4",
        "v_19rqyv94pw",
        "v_19rqyv999g",
        "v_19rqyvno8s",
        "v_19rqyvnreg",
        "v_19rqytm3x8",
        "v_19rqytm5a8",
        "v_19rqyrsdbs",
        "v_19rqyron8k",
        "v_19rqzk9lvc",
        "v_19rqzk9bus",
        "v_19rqzk9ee8",
        "v_19rqzkaji4"
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

    .btnlink {
       
        border: 1px #eee solid;
        padding: 1px 6px 0px 6px;
        display: inline-block;
        margin: 3px 4px;
    }
}

a { color: #333;
    text-decoration: none;
}
</style>
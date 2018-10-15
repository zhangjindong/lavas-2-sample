<template>
    <div class="meirenxinji-wrapper">
        <article class="meirenxinji-content">
            <header class="meirenxinji-title">
                  美人心计 第{{$route.params.id}}集 
            </header>
            <!-- link to another meirenxinji -->
            <p>
                <iframe width=100% height=300 v-bind:src="jujiqian+juji[$route.params.id-1]+jujihou" frameborder="0"></iframe>
            </p>
           <router-link :to="{
                name: 'meirenxinjiId',
                params: {
                    id: Number($route.params.id) + 1
                }
            }">下集 {{Number($route.params.id) + 1}}</router-link>
           
            <p>
            <template v-for="n in 40">
                <router-link class="btnlink" :to="{
                name: 'meirenxinjiId',
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
  name: "meirenxinji-_id",
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
        "http://api.bbbbbb.me/yunjx2/?url=http://v.pptv.com/show/",
        jujihou:".html&type=pptv&way=1431&t=1539488526&s=6616cae10ec9871cb5e26b0b4d78e676",
      juji: [
       '32L6eOBGtvRX1T0',
'oNibMCnLYSIbpZ88',
'BzkvrRV76ymMCnI',
'nt2ODHTaSojradE',
'SPJq6FC2JmTHRa0',
'BEQVkicth0Q9y8Fg',
'ndqPDXXbS4nsatI',
'mdaDAWnPP33gXsY',
'B0MYlv5k1BJ181s',
'C0cUkvpg0A5x71c',
'mNeEAmrQQH7hX8c',
'DkofnQVr2xl8ibmI',
'l9SFA2vRQXiciaYMg',
'ltWGBGzSQoDjYck',
'ldKHBW3TQ4HkYso',
'EVEKiaPBWxgRn5U0',
'zQpf3UWrG1m8OqI',
'FlIHhe1TwwFk4ko',
'GFgRjicddzQtu7FQ',
'yQZT0TmfD02wLpY',
'zg1e3ESqGlia7OaE',
'0A9c2kKoGFa5N58',
'yAdU0jqgEE6xL5c',
'3BtQzjacDEqtK5M',
'xANY1j6kFFK1M5s',
'wf5r6VG3J2XIRq4',
'sicBp50ib1JWPGRKw',
'4iaE6uCCG9jSXFX0',
'se57ibWHHN3XYVr4',
'5CM4th6E9DKVE3s',
'5SI3tR2D8zGUEno',
'ru1ibicGTKOnjbWcE',
'6SYzsRlic7y2QDnY',
'7ia0ibvCSKibjiabGYE',
'qeZz8VmicL23QTrY',
'9jUmpAxy4iaCDAWk',
'ibzgxrxd97SuODHQ',
'2RZDwSmPicz2gHoY',
'iczwtqxN56SeKCHA',
'Aj4rqRF35yWIBm4'
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
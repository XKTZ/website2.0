<template>
  <div class="blogs"
       :style="{
         'padding-top': this.$store.state.blogPaddingTop,
         'padding-bottom': this.$store.state.mainContainerPaddingBottom
       }">
    <div>
      <div v-for="grp in blogGroups">
        <div class="blog-group-title">
          {{ grp[0] }}
        </div>
        <div v-for="blog in grp[1]" class="blog-link">
          <router-link
              custom
              :to="`/blog/${blog.id}/${blog.urlTitle}`"
              v-slot="{href, route, navigate, isActive, isExactActive}">
            <el-link :href="href" @click="navigate" style="font-size: 18px;" :underline="false">
              {{ blog.title }}
            </el-link>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as MarkdownIt from 'markdown-it';
import {BlogContentTypes} from "@/util/BlogContentUtil";
import Blog from "@/views/main/Blog";
import {blogs} from "@/assets/Blogs"
import {ref} from "vue";

const markdown = new MarkdownIt();

export default {
  name: "Blogs",
  components: {Blog},
  setup() {

    const blogsByTime = ref((() => {
      let dict = {};
      for (let blog of blogs) {
        let year = parseInt(blog.createDate.getFullYear().toString());
        if (dict[year] === undefined) {
          dict[year] = [];
        }
        dict[year].push(blog);
      }
      let arr = [];
      for (let [key, value] of Object.entries(dict)) {
        arr.push([key, value]);
      }
      arr.sort((x, y) => (y[0] - x[0]));
      return arr;
    })());

    return {
      blogGroups: blogsByTime,
      BlogContentTypes
    }
  }
}
</script>

<style scoped>
.blogs {
  margin-left: 5%;
  margin-right: 5%;
  text-align: left;
}

.blog-group-title {
  font-size: 150%;
}

.blog-link {
  margin-top: 2%;
  margin-bottom: 2%;
  text-decoration: underline;
}
</style>
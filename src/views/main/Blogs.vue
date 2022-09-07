<template>
  <div class="blogs"
       :style="{
         'padding-top': this.$store.state.blogPaddingTop,
         'padding-bottom': this.$store.state.mainContainerPaddingBottom
       }">
    <div class="blog-link">
      <router-link
          custom
          :to="`/blog/${blogIds[0][0]}/${blogIds[0][1]}`"
          v-slot="{href, route, navigate, isActive, isExactActive}"
      >
        <el-link :href="href" @click="navigate" style="font-size: 18px;" :underline="false">
          {{ blogs[blogIds[0][0]].title }}
        </el-link>
      </router-link>
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

const blogTitleToUrl = (title) => {
  return title.split(' ').map(x => x.toLowerCase()).join('-')
}

export default {
  name: "Blogs",
  components: {Blog},
  setup() {

    const blogIds = ref([...Array(blogs.length).keys()].map(id => [id, blogTitleToUrl(blogs[id].title)]))

    return {
      blogIds,
      blogs,
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

.blog-link {
  text-decoration: underline;
}
</style>
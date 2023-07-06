<template>
  <div class="note"
       :style="{
         'padding-top': this.$store.state.blogPaddingTop,
         'padding-bottom': this.$store.state.mainContainerPaddingBottom
       }">
    <div class="blog-nav">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item v-for="path in paths">
          {{ path }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="note-component note-title">
      {{ title }}
    </div>
    <el-divider/>
    <div class="note-component blog-content" v-html="content"></div>
    <el-divider/>
    <div v-if="reference.length > 0" class="note-component info-block">
      <div class="info" v-for="refer in reference">
        <el-link  :href="refer instanceof Array ? refer[1]: refer" style="font-size: 14px;"
                 :underline="false">
          > {{ refer instanceof Array ? refer[0] : refer }}
        </el-link>
      </div>
    </div>
    <el-divider/>
    <div class="note-component info-block">
      <div class="info">
        <el-icon>
          <FolderOpened/>
        </el-icon>
        Categories:
        <el-tag v-for="tag in tags" style="margin-right: 1%;">
          {{ tag }}
        </el-tag>
      </div>
    </div>
  </div>
</template>

<script>

import {parseBlogContent, BlogContentTypes} from "@/util/BlogContentUtil";
import {FolderOpened, Calendar} from "@element-plus/icons-vue";
import {getNote} from "@/assets/Notes";
import {useRoute} from 'vue-router';
import "highlight.js/styles/vs2015.css"
import "markdown-it-texmath/css/texmath.css";
import "katex/dist/katex.css";

export default {
  name: "Note",
  components: {FolderOpened, Calendar},
  setup() {
    const route = useRoute();

    const id = parseInt(route.params.id);

    const {
      title,
      content: contentRaw,
      contentType,
      paths,
      tags,
      reference
    } = getNote(id);

    const content = parseBlogContent(contentRaw, contentType);

    return {
      title,
      content,
      contentType,
      paths,
      tags,
      id,
      reference
    }
  }
}
</script>

<style scoped>
.note {
  padding-left: 6%;
  padding-right: 6%;
}

.note-component {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  margin-top: 1%;
  margin-bottom: 1%;
  text-align: left;
}

.note-title {
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", Arial, sans-serif;
  font-size: 200%;
  font-weight: 600;
  margin-bottom: 0;
}

.info {
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", Arial, sans-serif;
  margin-top: 0.5%;
  margin-bottom: 0.5%;
  vertical-align: middle;
}
</style>
<template>
  <el-card class="project-card" body-style="padding: 0;" style="height: 100%;">
    <el-image :src="require(`@/assets/${projectObject.img}`)" style="height: 250px; width: 100%;"/>
    <div style="padding: 0 10% 3%;">
      <h3 class="project-name">
        {{ projectObject.name }}
      </h3>
      <div class="project-description">
        {{ projectObject.desc }}
      </div>
      <div class="project-link">
        <el-link :underline="false" :href="projectObject.link" target="_blank">
          <GitHub :size="35" :color="linkColor"
                  @mouseenter="linkColor = 'black'" @mouseleave="linkColor = 'gray'"
                  style="cursor:pointer;"/>
        </el-link>
      </div>
    </div>
  </el-card>
</template>

<script>
import {Link} from "@element-plus/icons-vue";
import {ref} from "vue";
import GitHub from "@/components/GitHub";

export default {
  name: "ProjectCard",
  props: [
    'projectObject'
  ],
  components: {
    Link,
    GitHub
  },
  setup() {
    const linkColor = ref("gray")
    return {
      linkColor
    }
  }
}
</script>

<style scoped>

.project-description {
  text-align: left;
  word-wrap: break-word;
}

.project-link {
  margin-top: 3%;
}
</style>
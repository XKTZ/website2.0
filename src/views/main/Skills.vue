<template>
  <div class="skills"
       :style="{'padding-top': this.$store.state.mainContainerPaddingTop, 'padding-bottom': this.$store.state.mainContainerPaddingBottom}">
    <el-collapse v-model="activeNames">
      <el-collapse-item v-for="skill in skills" :name="skill.title">
        <template #title>
          <span class="title-skill">
            {{ skill.title }}
          </span>
        </template>
        <el-button v-for="tag in skill.tags" style="cursor: pointer;">
          {{ tag }}
        </el-button>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import {ref} from "vue";
import {skills} from "@/assets/Skills";

export default {
  name: "Skills",
  setup() {
    const activeNames = ref([])
    for (let skill of skills.value) {
      activeNames.value.push(skill.title)
    }
    return {activeNames, skills}
  }
}
</script>

<style scoped>
.skills {
  padding-left: 15px;
  padding-right: 15px;
}

.title-skill {
  font-size: 125%;
  font-weight: 777;
}
</style>
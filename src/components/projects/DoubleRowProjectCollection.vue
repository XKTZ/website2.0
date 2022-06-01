<template>
  <el-row v-for="projectPair in projectsManaged" style="width: 100%; margin-bottom: 6%;" :gutter="20">
    <el-col :span="12">
      <project-card :project-object="projectPair[0]"></project-card>
    </el-col>
    <el-col :span="12" v-if="projectPair.length > 1">
      <project-card :project-object="projectPair[1]"></project-card>
    </el-col>
  </el-row>
</template>

<script>
import {ref} from "vue";
import ProjectCard from "@/components/projects/ProjectCard";

export default {
  name: "DoubleRowProjectCollection",
  components: {ProjectCard},
  props: {
    projects: Array[Object]
  },
  setup(props) {
    const projects = props["projects"];
    const projectsManaged = ref([]);
    for (let i = 0; i < projects.length; i ++) {
      if (i % 2 === 0) {
        projectsManaged.value.push([]);
      }
      projectsManaged.value[projectsManaged.value.length - 1].push(projects[i]);
    }
    return {
      projectsManaged
    }
  }
}
</script>

<style scoped>

</style>
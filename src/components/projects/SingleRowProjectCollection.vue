<template>
  <el-row v-for="project in projects" style="width: 100%; margin-top: 6%;">
    <el-col :span="24">
      <project-card :project-object="project"></project-card>
    </el-col>
  </el-row>
</template>

<script>
import ProjectCard from "@/components/projects/ProjectCard";


export default {
  name: "SingleRowProjectCollection",
  components: {ProjectCard},
  props: {
    projects: Array[Object]
  },
  setup() {
  }
}
</script>

<style scoped>

</style>
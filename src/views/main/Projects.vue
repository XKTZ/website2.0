<template>
  <div class="projects" ref="projectRef"
       :style="{'padding-top': this.$store.state.mainContainerPaddingTop, 'padding-bottom': this.$store.state.mainContainerPaddingBottom}">
    <div class="wide-mode-projects" v-if="this.$store.state.projectCardsMode === PROJECTS_WIDE_MODE">
      <double-row-project-collection :projects="projects"></double-row-project-collection>
    </div>
    <div class="narrow-mode-projects" v-if="this.$store.state.projectCardsMode === PROJECTS_NARROW_MODE">
      <single-row-project-collection :projects="projects"/>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {WIDE_MODE, NARROW_MODE} from "@/util/reactive";
import {PROJECTS_WIDE_MODE, PROJECTS_NARROW_MODE} from "@/util/reactive";
import {onMounted} from "vue";
import SingleRowProjectCollection from "@/components/projects/SingleRowProjectCollection";
import DoubleRowProjectCollection from "@/components/projects/DoubleRowProjectCollection";
import {projects} from "@/assets/Projects";

export default {
  name: "Projects",
  components: {DoubleRowProjectCollection, SingleRowProjectCollection},
  setup() {
    return {
      projects,
      WIDE_MODE,
      NARROW_MODE,
      PROJECTS_WIDE_MODE,
      PROJECTS_NARROW_MODE
    }
  }
}
</script>

<style scoped>
.projects {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
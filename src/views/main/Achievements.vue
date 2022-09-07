<template>
  <div class="achievements"
       :style="{'padding-top': this.$store.state.mainContainerPaddingTop,
          'padding-bottom': this.$store.state.mainContainerPaddingBottom}">
    <h2 style="font-size: 200%; text-decoration:underline; text-align:left;  margin: 0;">
      Achievements
    </h2>
    <div class="achievement" v-for="achievement in achievements" style="padding-top: 2%; padding-bottom: 2%;">
      <h3 style="text-align:left; padding: 0; margin: 0 0 1.5%;">
        {{ achievement.name }}
      </h3>
      <div style="margin-bottom: 1.5%; text-align:left;
        color: rgb(61, 65, 68);
        font-family: Source Sans Pro, Helvetica Neue, Arial, sans-serif;" v-html="achievement.description">
      </div>
      <el-table :data="achievement.dataTable" style="width: 100%" :fit="true">
        <el-table-column v-for="dataType in achievement.dataTypes"
                         :label="dataType.label"
                         :min-width="dataType.width">
          <template #default="scope">
            <div v-html="scope.row[dataType.name]">
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {achievements} from "@/assets/Achievements";

export default {
  name: "Achievements",
  setup() {
    return {achievements}
  }
}
</script>

<style scoped>
.achievements {
  padding-left: 15px;
  padding-right: 20px;
}
</style>
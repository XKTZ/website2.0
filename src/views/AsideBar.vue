<template>
  <div class="aside-bar">
    <div class="aside-element">
      <el-avatar :src="require('@/assets/img/head.png')" :size="100"/>
    </div>
    <div class="aside-element">
      <div class="aside-name">
        {{ authorName }}
      </div>
      <div class="aside-education">
        {{ authorBiography }}
      </div>
    </div>

    <div class="aside-element" v-for="link in links">
      <el-link :href="link.link">
        <el-image :src="require(`@/assets/${link.img}`)"
                  style="width: 25px; height: 25px; vertical-align: middle;"/>
        <span style="vertical-align: middle; " class="aside-function-text">
          {{ link.name }}
        </span>
      </el-link>
    </div>
  </div>
</template>

<script>
import {MapLocation, Message} from "@element-plus/icons-vue";
import {externalLinks} from "@/assets/ExternalLinks";
import {name as authorName, biography as authorBiography} from "@/assets/BasicInformation";

export default {
  name: "AsideBar",
  components: {MapLocation, Message},
  setup() {
    return {
      links: externalLinks,
      authorName,
      authorBiography
    };
  }
}
</script>

<style scoped>
.aside-bar {
  height: 100%;
  width: 85%;
  text-align: left;
  margin-left: 15%;
}

.aside-element {
  padding-top: 3%;
  padding-bottom: 3%;
  width: 100%;
}

.aside-name {
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", Arial, sans-serif;
  font-weight: 750;
  font-size: 175%;
}

.aside-education {
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", Arial, sans-serif;
}

.aside-function-text {
  font-size: 16px;
  font-weight: normal;
  margin-left: 4px;
}
</style>
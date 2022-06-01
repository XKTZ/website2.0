<template>
  <div class="top-bar" style="text-align:left; line-height: 10vh;">
    <div class="top-bar-element" style="line-height: 10vh;">
      <el-avatar style="vertical-align: middle;" :src="require('@/assets/img/head.png')" :size="40"/>
    </div>

    <div class="top-bar-element" style="padding: 0 10px 1% 15px;">
      <h3 class="top-bar-text" style="margin: 0;">
        {{authorName}}
      </h3>
      <div class="top-bar-text" style="font-size: 14px;">
        {{authorBiography}}
      </div>
    </div>

    <el-dropdown class="top-bar-element" style="padding-left: 20px;" trigger="click">
      <el-button type="default">
        Follow Me
      </el-button>
      <template #dropdown>
        <div style="padding: 3px 10px;">
          <el-link v-for="link in links" style="display: block; width: 150px; margin-top: 3px; margin-bottom: 3px;">
            <img :src="require(`@/assets/${link.img}`)"
                 style="vertical-align: middle; width: 20px;"/>
            <span style="vertical-align: middle; margin-left: 10px; width: 110px">
            {{ link.name }}
          </span>
          </el-link>
        </div>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import {externalLinks} from "@/assets/ExternalLinks";
import {name as authorName, biography as authorBiography} from "@/assets/BasicInformation";

export default {
  name: "TopBar",
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

.top-bar {
  padding-left: 4%;
  padding-right: 4%;
}

.top-bar-element {
  display: table-cell;
  vertical-align: middle;
}

.top-bar-text {
  line-height: 30px;
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", Arial, sans-serif;
}

</style>
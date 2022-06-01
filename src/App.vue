<template>
  <el-container>
    <!-- header -->
    <el-header style="padding-left: 0; padding-right: 0;" height="15vh">
      <website-header></website-header>
    </el-header>
    <el-container>
      <!-- aside -->
      <el-aside v-if="this.$store.state.mode === WIDE_MODE" width="20%" style="padding-top: 3%;">
        <aside-bar></aside-bar>
      </el-aside>

      <!-- top -->
      <el-header v-if="this.$store.state.mode === NARROW_MODE" style="height: 10vh; padding-left: 0; padding-right: 0;">
        <top-bar></top-bar>
      </el-header>

      <el-container>
        <el-main :style="{height: this.$store.state.mainContainerHeight, 'padding': 0}">
          <el-scrollbar style="padding: 0; height: 100%;">
            <router-view></router-view>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import {WIDE_MODE, NARROW_MODE} from "@/util/reactive";
import WebsiteHeader from "@/views/Header";
import AsideBar from "@/views/AsideBar";
import TopBar from "@/views/TopBar";

export default {
  components: {TopBar, AsideBar, WebsiteHeader},
  setup() {

    return {
      WIDE_MODE,
      NARROW_MODE
    }
  }
}
</script>

<style>
#app {
  text-align: center;
}

body {
  margin: 0;
  padding: 0;
  border: 0;
}
</style>
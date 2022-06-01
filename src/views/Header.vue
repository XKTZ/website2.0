<template>
  <div>
    <el-menu mode="horizontal" class="menu"
             :style="{height: '15vh', width: this.$store.state.titleMenuWidth, float: 'left', 'padding-left': '1%', 'padding-right': '1%'}"
             :ellipsis="false">
      <router-link style="margin-right: auto;" custom
                   v-slot="{href, route, navigate, isActive, isExactActive}" to="/">
        <el-link class="menu-name-text" :href="href" @click="navigate" style="width: 100%">
          <el-avatar :src="require('@/assets/img/head.png')" :size="35"/>
          <div style="margin-left: 5px;">
            <span>
              {{ title }}
            </span>
          </div>
        </el-link>
      </router-link>
    </el-menu>

    <el-menu v-if="this.$store.state.mode === WIDE_MODE"
             mode="horizontal" class="menu" style="height: 15vh; width: 75%; float: right"
             :ellipsis="false">
      <router-link
          v-for="item in items"
          custom
          :to="item.path"
          v-slot="{href, route, navigate, isActive, isExactActive}"
      >
        <el-link v-if="item.router" :href="href" @click="navigate" :style="{'width': `${itemWidth}%`, 'font-size': '110%'}">
          {{ item.name }}
        </el-link>
        <el-link v-if="!item.router" :href="item.path" :style="{'width': `${itemWidth}%`, 'font-size': '110%'}">
          {{ item.name }}
        </el-link>
      </router-link>
    </el-menu>

    <el-dropdown v-if="this.$store.state.mode === NARROW_MODE"
                 trigger="click"
                 style="height: 15vh; float: right; margin-right: 5%;"
                 @command="handleCommand">
      <el-icon style="cursor: pointer; height: 100%;" @mouseenter="moreColor = 'gray'" @mouseleave="moreColor = 'black'"
               :size="45" :color="moreColor">
        <More/>
      </el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="item in items" style="text-align: center;" :command="item">
              <span class="collapse-menu-text">
                {{ item.name }}
              </span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import {ref} from "vue";
import {More} from "@element-plus/icons-vue";
import router from "@/router";
import {WIDE_MODE, NARROW_MODE} from '@/util/reactive';
import {title} from "@/assets/BasicInformation";
import {subpages} from "@/assets/Subpages";

export default {
  name: "WebsiteHeader",
  components: {
    More
  },
  setup() {

    const itemWidth = ref(100 / subpages.length);

    const moreColor = ref("black");

    const handleCommand = ref((item) => {
      if (item.router) {
        router.push(item.path)
      } else {
        window.location = item.path
      }
    })

    return {
      WIDE_MODE,
      NARROW_MODE,
      items: subpages,
      itemWidth,
      moreColor,
      handleCommand,
      title
    }
  }
}
</script>

<style scoped>
.menu-text {
  font-size: 125%;
}

.collapse-menu-text {
}

.menu-name-text {
  font-size: 125%;
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", Arial, sans-serif;
  font-weight: 700;
}
</style>
<template>
  <div class="home"
       :style="{'padding-top': this.$store.state.mainContainerPaddingTop,
          'padding-bottom': this.$store.state.mainContainerPaddingBottom,
          'padding-right': this.$store.state.homePaddingRight,
          'padding-left': '10px'}"
  >
    <div class="paragraph">
      <h1>Hello!</h1>
      This is a website containing my personal profile such as my projects I have done, my resume, my achievements, etc.
    </div>
    <el-divider/>
    <div class="paragraph">
      <h1>Where I Am For Now?</h1>
      I am currently an incoming student in University of Waterloo Honour Mathematics Program.
    </div>
    <el-divider/>
    <div class="paragraph">
      <h1>My Hobby</h1>
      I am very interested in computer technology and programming. It is able to access my projects in "Skills" Section.
    </div>
    <el-divider/>
    <div class="paragraph">
      Some other profiles:
      <ul>
        <li style="margin-top: 2%; margin-bottom: 2%;">
          <el-link style="font-size: 100%;" href="https://dmoj.ca/user/YidiChen">DM::OJ</el-link>
        </li>
        <li style="margin-top: 2%; margin-bottom: 2%;">
          <el-link style="font-size: 100%;" href="https://codeforces.com/profile/ericchenxktz">Codeforces</el-link>
        </li>
        <li style="margin-top: 2%; margin-bottom: 2%;">
          <el-link style="font-size: 100%;" href="https://leetcode.com/XKTZ/">LeetCode</el-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.home {
  font-size: 125%;
  text-align: left;
}

.paragraph {
  margin-top: 1%;
  margin-bottom: 1%;
  font-family: Source Sans Pro, Helvetica Neue, Arial, sans-serif;
  color: rgb(61, 65, 68);
}
</style>

<script>
import WebsiteHeader from "@/views/Header";
import Projects from "@/views/main/Projects";
import Skills from "@/views/main/Skills";
import Achievements from "@/views/main/Achievements";

export default {
  name: 'Home',
  components: {
    Achievements,
    Skills,
    Projects,
    WebsiteHeader
  }
}
</script>


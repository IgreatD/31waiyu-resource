<template>
  <div class="container">
    <div id="player" class="player"></div>
  </div>
</template>

<script>
import DPlayer from "dplayer";
export default {
  mounted() {
    this.$nextTick(() => {
      new DPlayer({
        container: document.getElementById("player"),
        video: {
          url: this.$route.query.path
        }
      });
    });
  }
};
</script>

<style>
.container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  font-size: 0;
  white-space: nowrap;
  overflow: auto;
}
.container:after {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.player {
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  font-size: 14px;
  white-space: normal;
}
.mask{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 14;
}
</style>
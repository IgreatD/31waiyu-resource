<template>
  <div class="home">
    <div v-for="video in listVideo" :key="video.floorId">
      <div
        class="pizhu"
        :style="objectStyle(video.x, video.y)"
        @click="play(video.path)"
      >
        <div class="duration">{{ video.durationView }}</div>
      </div>
    </div>
    <img v-lazy="url" ref="img" width="100%" />
  </div>
</template>

<script>
import * as service from "@/service/resource";
export default {
  name: "Home",
  data() {
    return {
      cHeight: 0,
      cWidth: 0,
      url: "",
      listVideo: [],
    };
  },
  mounted() {
    const resoureId = this.$route.query.id;
    console.log(this.$route)
    console.log(resoureId);
    if (resoureId) {
      this.getData(resoureId);
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeChange, true);
  },
  methods: {
    async getData(resoureId) {
      const data = await service.getResourceInfo(resoureId);
      const listFloor = data.listFloor;
      if (listFloor && listFloor.length > 0) {
        this.url = listFloor[0].doodlingPath;
        this.$Lazyload.$once(
          "loaded",
          ({ el: { clientWidth, clientHeight } }) => {
            this.cWidth = clientWidth;
            this.cHeight = clientHeight;
            this.listVideo = listFloor[0].listVideo;
            window.addEventListener("resize", this.resizeChange, true);
          }
        );
      }
    },
    resizeChange() {
      this.$nextTick(() => {
        const img = this.$refs.img;
        this.cWidth = img.clientWidth;
        this.cHeight = img.clientHeight;
      });
    },
    objectStyle(x, y) {
      return {
        width: "70px",
        height: "30px",
        opacity: "1",
        fontSize: "10px",
        transform: `translate(${(x * this.cWidth) / 100}px, ${(y *
          this.cHeight) /
          100}px)`,
        transitionDuration: ".3s",
      };
    },
    play(path) {
      this.$router.push({
        name: "play",
        query: {
          path,
        },
      });
    },
  },
};
</script>

<style>
.home {
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  box-sizing: border-box;
}
img {
  z-index: 2;
}
.pizhu {
  position: absolute;
  z-index: 4;
  opacity: 0;
  width: 147px;
  height: 62px;
  padding-right: 5px;
  white-space: nowrap;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  cursor: pointer;
  background-image: url(~@/assets/pizhuUpime.png);
}
.duration {
  width: 67%;
  height: 100%;
  float: right;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: center;
}
</style>

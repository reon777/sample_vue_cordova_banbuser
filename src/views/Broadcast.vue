<template>
  <div class="home">
    <div
      class="btn"
      @click="start_broadcast()"
    >
      配信を開始する
    </div>

    <br>

    <div
      class="btn"
      @click="stop_broadcast()"
    >
      配信を停止する
    </div>

    <br>

    <div
      class="btn"
      @click="$router.push('player')"
    >
      視聴画面へ
    </div>
    <br>

  </div>
</template>

<script>
export default {
  name: "broadcast",
  data() {
    return {
      broadcaster: null,
      ApplicationId: "CHANGE ME"
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      console.log("start init");
      this.broadcaster = window.bambuser.broadcaster;
      await this.broadcaster.setApplicationId(this.ApplicationId);
      console.log("end init");
    },
    async start_broadcast() {
      try {
        console.log("start start_broadcast");
        document.querySelector("body").classList.add("body-transparent");
        document.querySelector("html").classList.add("body-transparent");
        await this.broadcaster.showViewfinderBehindWebView();
        window.setTimeout(async () => {
          await this.broadcaster.startBroadcast();
        }, 500);
        console.log("end start_broadcast");
      } catch (e) {
        console.log("error");
        console.log(e);
      }
    },
    async stop_broadcast() {
      try {
        console.log("start stop_broadcast");
        await this.broadcaster.hideViewfinder();
        await this.broadcaster.stopBroadcast();
        document.querySelector("body").classList.remove("body-transparent");
        document.querySelector("html").classList.remove("body-transparent");
        console.log("end  stop_broadcast");
      } catch (e) {
        console.log("error");
        console.log(e);
      }
    }
  }
};
</script>

<style>
</style>

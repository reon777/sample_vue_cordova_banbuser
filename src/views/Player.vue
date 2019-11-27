<template>
  <div class="home">

    <div
      class="btn"
      @click="go_back()"
    >
      配信画面へ
    </div>

    <div>
      以下の配信URLをクリックすると視聴できます（上が最新）
    </div>

    <div
      v-for="broadcast in broadcast_list"
      :key="broadcast.resourceUri"
    >
      <div
        class="url"
        @click="go_broadcast(broadcast.resourceUri)"
      >
        {{broadcast.resourceUri}}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "player",
  data() {
    return {
      player: null,
      broadcast_list: [],
      api_key: "CHANGE ME",
      ApplicationId: "CHANGE ME"
    };
  },
  created() {
    this.init();
    this.get_list();
  },
  methods: {
    get_list() {
      const self = this;
      postData(`https://api.bambuser.com/broadcasts?limit=3`, {})
        .then(data => {
          console.log(JSON.stringify(data));
          this.broadcast_list = data["results"];
        })
        .catch(error => console.error(error));

      function postData(url = ``, data = {}) {
        return fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/vnd.bambuser.v1+json",
            Authorization: "Bearer " + self.api_key
          }
        }).then(response => response.json());
      }
    },
    async init() {
      console.log("start init");
      this.player = window.bambuser.player;
      await this.player.setApplicationId(this.ApplicationId);
      console.log("end init");
    },
    async go_broadcast(resourceUri) {
      console.log("start go_broadcast");
      document.querySelector("body").classList.add("body-transparent");
      document.querySelector("html").classList.add("body-transparent");
      try {
        this.player.showPlayerBehindWebView();
        this.player.loadBroadcast(resourceUri);
        console.log("end go_broadcast");
      } catch (e) {
        console.log("error");
        console.log(e);
      }
    },
    go_back() {
      document.querySelector("body").classList.remove("body-transparent");
      document.querySelector("html").classList.remove("body-transparent");
      this.player.hidePlayer();
      this.player.close();
      this.$router.push("/");
    }
  }
};
</script>

<style>
.url {
  overflow: scroll;
  width: 100vw;
  white-space: nowrap;
  margin-bottom: 20px;
}
</style>

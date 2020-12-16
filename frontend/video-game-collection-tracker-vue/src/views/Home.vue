<template>
  <div class="home">
    <h1>Recent Additions:</h1>
    <Carousel :value="games" :numVisible="3" :numScroll="1" :circular="true" :autoplayInterval="3000">
	    <template #item="slotProps">
        <img :src="'mockData/images/' + slotProps.data.image" :alt="slotProps.data.image" />
        <div class="game-title">{{slotProps.data.name}}</div>
	    </template>
    </Carousel>
	<Dialog header="Header" v-model:visible="displayDialog" >
		<AddGameForm/>
	</Dialog>
    <Button label="Add Video Game" class="p-button-raised p-button-rounded" @click="openDialog" />
  </div>
 
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VideoGameService from '../service/VideoGameService';


export default defineComponent({
  name: "Home",
  data() {
    return {
      videoGameService: new VideoGameService(),
      games: null,
      responsiveOptions: [
        {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
        },
        {
          breakpoint: '600px',
          numVisible: 2,
          numScroll: 2
        },
        {
          breakpoint: '480px',
          numVisible: 1,
          numScroll: 1
        }
      ],
      displayDialog: false,
    }
  },
  methods: {
    openDialog() {
      this.displayDialog = true;
    },
  },
  created() {
    this.videoGameService = new VideoGameService();
  },
  mounted() {
    this.videoGameService.getVideoGames().then(data => this.games = data.slice(0,9));
  },
});
</script>

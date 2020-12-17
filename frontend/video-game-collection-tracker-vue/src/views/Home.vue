<template>
  <div class="home">
    <h1>Preview:</h1>
    <Carousel v-if="imageData.length > 0" :value="imageData" :numVisible="3" :numScroll="1" :circular="true" :autoplayInterval="3000">
	    <template #item="slotProps">
        <img :src="slotProps.data.imageSrc" :alt="slotProps.data.imageSrc" />
        <div class="game-title">{{slotProps.data.title}}</div>
	    </template>
    </Carousel>
	<Dialog header="Header" v-model:visible="displayDialog" >
		<AddGameForm/>
	</Dialog>
    <Button label="Add Video Game" class="p-button-raised p-button-rounded" @click="openDialog" />
  </div>
 
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import VideoGameService from '../service/VideoGameService';


export default defineComponent({
  name: "Home",
  setup() {
    const games = ref<any[]>([]);
    const displayDialog = ref(false);
    const responsiveOptions = ref([
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
    ]);
    const videoGameService = new VideoGameService();
    onMounted(() => {
      videoGameService.getVideoGames().then(data => games.value = data.slice(0,9));
    });
    const imageData = computed(() =>
      games.value.map(e => ({
        title: e.title,
        imageSrc: e.upload,
      }))
    );
    const openDialog = () => {
      displayDialog.value = true;
    };
    return {
        imageData,
        responsiveOptions,
        displayDialog,
        openDialog,
    };
  },
});
</script>

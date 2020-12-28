<template>
  <div class="home">
    <h1>Preview:</h1>
    <Carousel v-if="imageData?.length > 0" :value="imageData" :numVisible="3" :numScroll="1" :circular="true" :autoplayInterval="3000">
	    <template #item="slotProps">
        <img :src="slotProps.data.imageSrc" :alt="slotProps.data.imageSrc" height="256" width="256" />
        <div class="game-title">{{slotProps.data.title}}</div>
	    </template>
    </Carousel>
    <Sidebar v-model:visible="displayPanel" position="right" class="p-sidebar-md">
      <AddGameForm/>
    </Sidebar>
    <Button label="Add Video Game" class="p-button-raised p-button-rounded" @click="openPanel" />
  </div>
 
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import videoGameService from '../service/videoGame.service';
import { useGetGames } from "../state/gamesState";


export default defineComponent({
  name: "Home",
  setup() {
    const displayPanel = ref(false);
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
    const { games } = useGetGames();
    const imageData = computed(() =>
      games?.value?.map(e => ({
        title: e.title,
        imageSrc: e.upload,
      }))
    );
    const openPanel = () => {
      displayPanel.value = true;
    };
    return {
        imageData,
        responsiveOptions,
        displayPanel,
        openPanel,
        games,
    };
  },
});
</script>

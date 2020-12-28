<template>
  <div class="p-fluid input-box">
    <div class="p-float-label">
        <InputText v-model="titleText" id="title" type="text" />
        <label for="title">Title</label>
    </div>
    <div class="p-float-label input-box">
        <InputText v-model="summaryText" id="summary" type="text" />
        <label for="summary">Summary</label>
    </div>
    <div class="p-field input-box">
        <Dropdown class="drop" v-model="selectedPlatform" :options="platform" optionLabel="name" placeholder="Select a Platform" />
    </div>
    <div class="p-float-label input-box">
        <InputText v-model="developerText" id="developer" type="text" />
        <label for="developer">Developer</label>
    </div>
    <div class="p-float-label input-box">
        <InputText v-model="publisherText" id="publisher" type="text" />
        <label for="publisher">Publisher</label>
    </div>
    <div class="p-field input-box">
        <Dropdown class="drop" v-model="selectedOwned" :options="owned" optionLabel="name" placeholder="Select Owned Status" />
    </div>
    <div class="p-field">
        <Dropdown class="drop" v-model="selectedProgress" :options="progress" optionLabel="name" placeholder="Select Progress" />
    </div>
    <div class="p-float-label input-box">
        <InputText v-model="imgUrlText" id="image" type="text" />
        <label for="image">Image URL</label>
    </div>
    <div class="p-field input-box">
        <label for="rating">Rating</label>
        <Rating v-model="ratingVal" :stars="10" :cancel="false"/>
    </div>
    <Button label="Save" class="p-button-raised p-button-rounded" @click="sendGame" />
</div>
</template>
<style></style>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, onMounted } from "vue";
import videoGameService from '../service/videoGame.service';
import { useGetGames } from "../state/gamesState";

    export default defineComponent({
      name: "AddGameForm",
      setup() {
          const formValues = reactive({
              titleText: '',
              summaryText: '',
              developerText: '',
              publisherText: '',
              ratingVal: 0,
              selectedPlatform: '',
              selectedOwned: '',
              selectedProgress: '',
              imgUrlText: ''
          })
          const platform = ref([
              { name: 'PS4' },
              { name: 'XB1' },
              { name: 'SWTCH' },
              { name: 'PC' }
          ]);
          const owned = ref([
              { name: 'Owned' },
              { name: 'Wish' },
              { name: 'Unowned' }
          ]);
          const progress = ref([
              { name: 'Unplayed' },
              { name: 'In Progress' },
              { name: 'Main Story Completed' },
              { name: '100% Completed' }
          ]);
          const { games } = useGetGames();
          const sendGame = async () => {
              try {
                  const newGame = await videoGameService.saveVideoGame(formValues);
                  if (games.value) {
                      games.value.push(newGame);
                  }
              } catch (e) {
                  console.error(e);
              }
          };
          return {
              ...toRefs(formValues),
              platform,
              owned,
              progress,
              sendGame
          }
      }
    })
</script>
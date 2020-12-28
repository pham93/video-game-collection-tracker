import videoGameService from "@/service/VideoGameService";
import { onMounted, ref } from "vue";

export const games = ref<any[]|null|undefined>(null);

export const useGetGames = () => {
    onMounted(async () => {
        if (!games.value) {
            const data = await videoGameService.getVideoGames();
            games.value = data;
        }
    });
    return {
        games
    }
}

export const selectedGameIds = ref<string[]>([]);
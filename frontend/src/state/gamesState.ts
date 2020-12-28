import { GameT } from '@/model/game.model';
import videoGameService from "@/service/videoGame.service";
import { onMounted, ref } from "vue";

export const games = ref<GameT[]|null|undefined>(null);

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
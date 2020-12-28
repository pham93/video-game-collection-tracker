import { GameT } from '@/model/game.model';
import axios from 'axios';
type GameObject = {
    pk: string,
    fields: Record<string,unknown>
}

class VideoGameService {
    async getVideoGames() {
        const result = await axios.get<GameT[]>('/api/videogames');
        return result.data;
    }
    
    async saveVideoGame(videoGame: any) {
        const payload = {
            "title": videoGame.titleText,
            "summary": videoGame.summaryText,
            "platform": videoGame.selectedPlatform.name,
            "developer": videoGame.developerText,
            "publisher": videoGame.publisherText,
            "owned": videoGame.selectedOwned.name,
            "rating": videoGame.ratingVal,
            "progress": videoGame.selectedProgress.name,
            "upload": videoGame.imgUrlText
        }
        const result = await axios.post<GameT>('/api/videogames', payload);
        return result.data;
    }

    async deleteVideoGames(gameIds: string[]) {
        await axios.delete('/api/videogames', {
            data: { ids: gameIds }
        });
    }
}

export default new VideoGameService();
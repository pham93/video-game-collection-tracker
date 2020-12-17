import axios from 'axios';
type GameObject = {
    pk: string,
    fields: Record<string,unknown>
}

class VideoGameService {
    async getVideoGames() {
        const rawJson = await axios.get('/api/videogames');
        return rawJson.data.map((e: GameObject) => ({ uuid:e.pk, ...e.fields }));
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
        const rawString = await axios.post('/api/videogames', payload);
        const rawJson = JSON.parse(rawString.data)
        console.log(rawJson);
        return rawJson.map((e: GameObject) => ({ uuid:e.pk, ...e.fields }));
    }

    async deleteVideoGames(gameIds: string[]) {
        await axios.delete('/api/videogames', {
            data: gameIds
        });
    }
}

export default new VideoGameService();
import axios from 'axios';

class VideoGameService {
    async getVideoGames() {
        const rawJson = await axios.get('/api/videogames');
        return rawJson.data.map((e: { fields: any; }) => e.fields);
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
        await axios.post('/api/videogames', payload);
    }
}

export default new VideoGameService();
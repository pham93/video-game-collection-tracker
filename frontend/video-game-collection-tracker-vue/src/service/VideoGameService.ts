import axios from 'axios';

export default class VideoGameService {

    // TODO: Modify to use real data from backend
    async getVideoGames() {
        const rawJson = await axios.get('/api/videogames');
        return rawJson.data.map((e: { fields: any; }) => e.fields);
	}
}
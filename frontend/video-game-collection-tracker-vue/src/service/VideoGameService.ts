import axios from 'axios';

export default class VideoGameService {

    // TODO: Modify to use real data from backend
    getVideoGames() {
        const temp = axios.get('mockData/json/video-games.json').then(res => res.data.data);
        console.log(temp);
        return temp;
	}
}
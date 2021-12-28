import axios from 'axios'
import { keys } from '../../config/keys';

class IG_STORIES_ACTIONS{
    
    public userStories;

    constructor(){
        this.userStories = {}
    }
    
    async getUserStories(username:string,user_id:string){
        var options:any = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/user-stories',
            params: {
                session_key: global.session_key, 
                username:username,
                user_id:user_id
            },
            headers: {
                'x-rapidapi-host': keys.rapidAPI.host,
                'x-rapidapi-key': keys.rapidAPI.key
            }
          };
          
          const data = await axios.request(options).then(function (response) {
              return response.data
          }).catch(function (error) {
              console.error(error);
          });
          this.userStories = data
    }

}

const IG_STORIES = new IG_STORIES_ACTIONS

module.exports = IG_STORIES
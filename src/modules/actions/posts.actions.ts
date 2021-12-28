import axios from 'axios'
import { keys } from '../../config/keys';
class IG_POSTS_ACTIONS{
    
    public allPosts:any[];
    public userPosts:any;
    public unlikePost:any;
    public likePost:any;
    
    constructor(){
        this.allPosts = []
        this.userPosts = {}
        this.unlikePost = {}
        this.likePost = {}
    }
    
    async getUserPosts(username:string,user_id:string,max_id:string){
        var options:any = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/user-posts',
            params: {
                session_key: global.session_key, 
                username:username,
                user_id:user_id,
                max_id:max_id
            },
            headers: {
                headers: {
                    'x-rapidapi-host': keys.rapidAPI.host,
                    'x-rapidapi-key':  keys.rapidAPI.key
                }
            }
          };
          
          const data = await axios.request(options).then(function (response) {
            return response.data
          }).catch(function (error) {
              console.error(error);
          });
          this.userPosts = data
    }
    async getUnlikePost(media_id:string){
        var options:any = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/unlike-post',
            params: {media_id: media_id, session_key: global.session_key},
            headers: {
                'x-rapidapi-host': keys.rapidAPI.host,
                'x-rapidapi-key':  keys.rapidAPI.key
            }
          };
          
          const data = await axios.request(options).then(function (response) {
                return response.data
          }).catch(function (error) {
              console.error(error);
            });
        this.unlikePost = data
    }
    async getLikePost(media_id:string){
        var options:any = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/like-post',
            params: {session_key:global.session_key, media_id: media_id},
            headers: {
              'x-rapidapi-host': 'instagram-unofficial.p.rapidapi.com',
              'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
            }
          };
          
          const data = await axios.request(options).then(function (response) {
                return response.data
          }).catch(function (error) {
              console.error(error);
          });
          this.likePost = data
    }
}

const IG_POSTS = new IG_POSTS_ACTIONS

module.exports = IG_POSTS
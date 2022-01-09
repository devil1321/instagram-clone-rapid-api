import axios from 'axios'
import { keys } from '../../config/keys';

class IG_TAGS_ACTIONS{
    public allTagPosts: any[];
    public tagPosts:any;
    public tag:any;

    constructor(){
        this.allTagPosts = []
        this.tagPosts = {}
        this.tag = {}
    }
    
    async getTagPosts(tag:string,max_id:string){
        var options:any = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/tag-posts',
            params: {session_key: keys.session.sessionKey, tag: tag,max_id:max_id},
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
          this.tagPosts = data
    }
    async getTag(tag:string){
        var options:any = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/get-tag',
            params: {tag: tag},
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
          this.tag = data
    }
}

const IG_TAGS = new IG_TAGS_ACTIONS

module.exports = IG_TAGS
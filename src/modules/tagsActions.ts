import axios from 'axios'
import { keys } from '../config/keys';

class IG_TAGS_ACTIONS{

    public tagPosts:any;
    public tag:any;

    constructor(){
        this.tagPosts = {}
        this.tag = {}
    }
    
    getTagPosts(tag:string,max_id:string){
        var options:any = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/tag-posts',
            params: {session_key: global.session_key, tag: tag,max_id:max_id},
            headers: {
                'x-rapidapi-host': keys.rapidAPI.host,
                'x-rapidapi-key': keys.rapidAPI.key
            }
          };
          
          axios.request(options).then(function (response) {
              this.tagPosts = response.data
          }).catch(function (error) {
              console.error(error);
          });
    }
    getTag(tag:string){
        var options:any = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/get-tag',
            params: {tag: tag},
            headers: {
                'x-rapidapi-host': keys.rapidAPI.host,
                'x-rapidapi-key': keys.rapidAPI.key
            }
          };
          
          axios.request(options).then(function (response) {
              this.tag = response.data
          }).catch(function (error) {
              console.error(error);
          });
    }
}

const IG_TAGS = new IG_TAGS_ACTIONS

module.exports = IG_TAGS
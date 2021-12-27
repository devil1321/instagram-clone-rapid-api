import axios from 'axios'
import { keys } from '../config/keys';

class IG_SEARCH_ACTIONS {

    public searchIGTV: any;
    public searchTags: any;
    public searchUsers: any;
    public searchTop: any;

    constructor(){
        this.searchIGTV = {}
        this.searchTags = {}
        this.searchUsers = {}
        this.searchTop = {}
    };

    getIGTVSearch(q: string){
        var options: any = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/search-igtv',
            params: { query: q, session_key: global.session_key },
            headers: {
                'x-rapidapi-host': keys.rapidAPI.host,
                'x-rapidapi-key': keys.rapidAPI.key
            }
        };

        axios.request(options).then(function (response) {
           this.searchIGTV = response.data
        }).catch(function (error) {
            console.log(error)
        })
    }
    getTagsSearch(q:string){
        var options:any = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/search-tags',
            params: {query: q, session_key: global.session_key},
            headers: {
                'x-rapidapi-host': keys.rapidAPI.host,
                'x-rapidapi-key': keys.rapidAPI.key
            }
          };
          
          axios.request(options).then(function (response) {
              this.searchTags = response.data
          }).catch(function (error) {
              console.error(error);
          });
    }
    getUsersSearch(q:string){
        var options:any = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/search-users',
            params: {query: q, session_key: global.session_key},
            headers: {
                'x-rapidapi-host': keys.rapidAPI.host,
                'x-rapidapi-key': keys.rapidAPI.key
            }
          };
          
          axios.request(options).then(function (response) {
              this.searchUsers = response.data
          }).catch(function (error) {
              console.error(error);
          });
    }
    getTopSearch(q:string){
        var options:any = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/search',
            params: {query: q, session_key: global.session_key},
            headers: {
                'x-rapidapi-host': keys.rapidAPI.host,
                'x-rapidapi-key': keys.rapidAPI.key
            }
          };
          
          axios.request(options).then(function (response) {
              this.searchTop = response.data
          }).catch(function (error) {
              console.error(error);
          });
    }
}

const IG_SEARCH = new IG_SEARCH_ACTIONS

module.exports = IG_SEARCH
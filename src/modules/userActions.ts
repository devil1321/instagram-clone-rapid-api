import axios from 'axios'
import { keys } from '../config/keys'
class IG_USERS_ACTIONS {

    public user: any;
    public followers: any;
    public following: any;
    public login: any;
    public follow: any;
    public unfollow: any;
    
    constructor() {
        this.user = {}
        this.followers = {}
        this.following = {}
        this.login = {}
        this.follow = {}
        this.unfollow = {}
    }
    
    getUser(username: string) {
        var options:any = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/get-user',
            params: {
                session_key: global.session_key, username: username},
            headers: {
                    'x-rapidapi-host': keys.rapidAPI.host,
                    'x-rapidapi-key':  keys.rapidAPI.key
                }
            };

            axios.request(options).then(function (response) {
                this.user = response.data
            }).catch(function (error) {
                console.error(error);
            });
    }
    getUserFollowers(username:string,user_id:string,max_id:string){
        var options:any = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/user-followers',
            params: { 
                session_key: global.session_key, 
                username:username,
                user_id:user_id,
                max_id:max_id
            },
            headers: {
                'x-rapidapi-host': keys.rapidAPI.host,
                'x-rapidapi-key':  keys.rapidAPI.key
            }
        };

        axios.request(options).then(function (response) {
            this.followers = response.data
        }).catch(function (error) {
            console.error(error);
        });
    }
    getUserFollowing(username:string,user_id:string,max_id:string){
        var options:any = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/user-following',
            params: { 
                session_key: global.session_key, 
                username:username,
                user_id:user_id,
                max_id:max_id
            },
            headers: {
                'x-rapidapi-host': keys.rapidAPI.host,
                'x-rapidapi-key':  keys.rapidAPI.key
            }
          };
          
          axios.request(options).then(function (response) {
              this.following = response.data
          }).catch(function (error) {
              console.error(error);
          });
    }
    getLogin(username:string,password:string){
        var options:any = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/login',
            params: {username:username, password: password},
            headers: {
                'x-rapidapi-host': keys.rapidAPI.host,
                'x-rapidapi-key':  keys.rapidAPI.key
            }
          };
          
          axios.request(options).then(function (response) {
              global.session_key = response.data.session_key
          }).catch(function (error) {
              console.error(error);
          });
    }
    getFollow(){
        var options:any = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/follow',
            params: {session_key:global.session_key},
            headers: {
                'x-rapidapi-host': keys.rapidAPI.host,
                'x-rapidapi-key':  keys.rapidAPI.key
            }
          };
          
          axios.request(options).then(function (response) {
              this.follow = response.data
          }).catch(function (error) {
              console.error(error);
          });
    }
    getUnfollow(){
        var options:any = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/unfollow',
            params: {session_key: global.session_key},
            headers: {
                'x-rapidapi-host': keys.rapidAPI.host,
                'x-rapidapi-key':  keys.rapidAPI.key
            }
          };
          
          axios.request(options).then(function (response) {
              this.unfollow = response.data
          }).catch(function (error) {
              console.error(error);
          });
    }
}

const IG_USERS = new IG_USERS_ACTIONS

module.exports = IG_USERS
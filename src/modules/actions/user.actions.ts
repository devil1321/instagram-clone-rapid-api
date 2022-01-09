import axios from 'axios'
import { keys } from '../../config/keys'

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
    async getUser(username: string) {
        var options:any = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/get-user',
            params: {
                session_key:keys.session.sessionKey, username: username},
            headers: {
                    'x-rapidapi-host': keys.rapidAPI.host,
                    'x-rapidapi-key':  keys.rapidAPI.key
                }
            };

        const data:any = await axios.request(options).then(function (response) {
                return response.data
            }).catch(function (error) {
                console.error(error);
            });
            this.user = data
    }
    async getUserFollowers(username:string,user_id:string,max_id:string){
        var options:any = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/user-followers',
            params: { 
                session_key: keys.session.sessionKey, 
                username:username,
                user_id:user_id,
                max_id:max_id
            },
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
        this.followers = data
    }
    async getUserFollowing(username:string,user_id:string,max_id:string){
        var options:any = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/user-following',
            params: { 
                session_key: keys.session.sessionKey, 
                username:username,
                user_id:user_id,
                max_id:max_id
            },
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
          this.following = data
    }
    async getLogin(username:string,password:string){
        var options:any = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/login',
            params: {username:username, password: password},
            headers: {
                'x-rapidapi-host': keys.rapidAPI.host,
                'x-rapidapi-key':  keys.rapidAPI.key
            }
          };
          
          await axios.request(options).then(function (response) {
              if(response.data.error){
                  console.log(response.data.error)
              }else{
                //   keys.session.sessionKey = response.data.session_key
                  global.session_key = keys.session.sessionKey
              }
          }).catch(function (error) {
              console.error(error);
          });
    }
    async getFollow(){
        var options:any = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/follow',
            params: {session_key:keys.session.sessionKey},
            headers: {
                'x-rapidapi-host': keys.rapidAPI.host,
                'x-rapidapi-key':  keys.rapidAPI.key
            }
          };
          
          const data:any = await axios.request(options).then(function (response) {
              return response.data
          }).catch(function (error) {
              console.error(error);
          });
          this.follow = data
    }
    async getUnfollow(){
        var options:any = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/unfollow',
            params: {session_key: keys.session.sessionKey},
            headers: {
                'x-rapidapi-host': keys.rapidAPI.host,
                'x-rapidapi-key':  keys.rapidAPI.key
            }
          };
          
          const data:any = await axios.request(options).then(function (response) {
              return response.data
          }).catch(function (error) {
              console.error(error);
          });
          this.unfollow = data
    }
}

const IG_USERS = new IG_USERS_ACTIONS

module.exports = IG_USERS
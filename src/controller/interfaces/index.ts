export interface AxiosOptions {
    method:any;
    url:string;
    params?:{
        metric?:string;
        q?:string;
        user_id?:string,
        message?:string;
        fields?:string;
        access_token?:string;
    }
}
import * as request from 'request';

export class GithubApiService {
    getUserInfo(userName: string) {
        let options: any ={
            headers: {
                'User-Agent':'request'
            }
        }
        request.get('https://api.github.com/users/'+userName, options, (response: any, body: any)=>{
            console.log(body);
        });
    }

    getRepost() {

    }
}
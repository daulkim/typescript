import { GithubApiService } from './GithubApiService';
import { Repo } from './Repo';
import { User } from './User';

let svc = new GithubApiService();
svc.getUserInfo('daulkim', (user: User) => {
    console.log(user);
});

svc.getRepos('daulkim', (repos: Repo[]) => {
    console.log(repos);
})

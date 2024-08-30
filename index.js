require('dotenv').config();

const express = require('express')
const app = express();
const port = 3000;

var githubData = {
    "id": 123456,
    "login": "randomuser123",
    "node_id": "MDQ6VXNlcjEyMzQ1Ng==",
    "avatar_url": "https://avatars.githubusercontent.com/u/123456?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/randomuser123",
    "html_url": "https://github.com/randomuser123",
    "followers_url": "https://api.github.com/users/randomuser123/followers",
    "following_url": "https://api.github.com/users/randomuser123/following{/other_user}",
    "gists_url": "https://api.github.com/users/randomuser123/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/randomuser123/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/randomuser123/subscriptions",
    "organizations_url": "https://api.github.com/users/randomuser123/orgs",
    "repos_url": "https://api.github.com/users/randomuser123/repos",
    "events_url": "https://api.github.com/users/randomuser123/events{/privacy}",
    "received_events_url": "https://api.github.com/users/randomuser123/received_events",
    "type": "User",
    "site_admin": false,
    "name": "John Doe",
    "company": "OpenAI",
    "blog": "https://johndoe.dev",
    "location": "San Francisco, CA",
    "email": "john.doe@example.com",
    "hireable": true,
    "bio": "Developer, writer, and tech enthusiast.",
    "twitter_username": "randomuser123",
    "public_repos": 15,
    "public_gists": 3,
    "followers": 200,
    "following": 50,
    "created_at": "2015-01-01T00:00:00Z",
    "updated_at": "2024-08-30T00:00:00Z"
  }
  
app.get('/home',(req, res)=>{
    res.send("hwlloe");
});
app.get('/start',(req, res)=>{
    res.send('<h1>header tag</h1>')
})
app.get('/null',(req, res)=>{
    res.send("null response");
})
app.get('/github', (req, res)=>{
    res.json(githubData);
})
app.listen(process.env.PORT, ()=>{
    console.log(`port is starting at ${port}`);
})
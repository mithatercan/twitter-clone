# Twitter Clone 💡

## Overview 📹

This is my first fullstack web application. I've used MongoDB as a database , ReactJS for the frontend , ExpressJS for the backend and Redux for the global states. Follow the guide below to install the application to your desktop and run it locally. If you want to contribute to this project , please fork the repository [here](https://github.com/mithatercann/twitter-clone/fork). If you are new please check [GitHub for beginners](http://readwrite.com/2013/09/30/understanding-github-a-journey-for-beginners-part-1/). 
<br />
<br />


![](https://user-images.githubusercontent.com/71825314/145272820-d6af46e2-8bb2-4e7e-997e-3c381d87288a.gif)

## Features

- Auth (Sign in/Sign up)
- Add bookmarks.
- Edit profile
- New tweet
- Like tweet 
- Comment tweet
- Simple Retweet
- Follow / Unfollow

## Start the app locally 🔌
First please clone this repository 
```bash
git clone https://github.com/mithatercann/twitter-clone.git
```

### Environment setup

First create .env file to server folder

```bash
cd twitter-clone/server

touch .env
```


Add these variables down below to .env file and set them as you want.

```
SECRET = xxxx
PORT_SERVER = xxxx
PORT_CLIENT = xxxx
```

### Database 📥

If you don't have mongoDB installed on your local machine then create a MongoDB Atlas cluster and add the link to your .env file.

```
MONGODB_URI = ??? if you don't have mongodb installed.
```

### Server 🔧

Go server folder and install the requirements and start the server. You can check the endpoints located on [client/src/api/urls](https://github.com/mithatercan/twitter-clone/blob/master/client/src/api/urls.js)

```bash
cd twitter-clone/server

npm install

npm start
```

### Client 👨🏼‍💻

Go client folder and install the requirements and start the client app.

```bash
cd twitter-clone/client

npm install

npm start
```

### Done 🥳

App is ready to go. Check the localhost with the port that you set for PORT_CLIENT in .env file.

## Contributing 🙌

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

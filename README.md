
## Twitty clone
[https://twitter-clone-hunter.web.app/](https://twitter-clone-hunter.web.app/)  
A Twitter clone built with React and Firebase. The site looks visually identical to Twitter homepage and have the functionality of Twitter homepage

## Site imaget
![Image of Site](https://github.com/zahego/twitty-clone/blob/master/src/Resources/screenshot/Untitled.png)

## Motivation
I had trouble using the Twitter API before so I figure I would try again with Twitter API. I also want to test and see if I can produce a UI through just looking at the picture of a site and not its code.

## Getting Started
These instructions will guild you through the inital setting up process and 
highlight what the apps can do for you to explore on your own.  


## Notable feature
- Visualy captured the current UI of the website Twitter.com with a few personal twists.
- Pulled data from twitter API
- Can post tweet and view posted tweet
- Usage of Grid instead of simple flex for UI elements


## Prerequisite
Nodejs installed for local running purpose    
check out Node installation instruction [here](https://nodejs.org/en/)  
Firebase for database and online site hosting
check out Firebase instruction [here](https://firebase.google.com/docs)  


## Installing and Running
Clone the repo
```
$ git clone https://github.com/zahego/twitty-clone.git
```
Run Node command to create node_modules folder from the information in package.json, which hold all the necessary dependencies
```
$ npm install
```
Run Node command for local testing
```
$ npm run start
```

## Deploying on Firebase
access the client folder  
create a prouction build of the app
```
$ yarn build
```
install Firebase on your local repo
```
$ npm install --save firebase
```
login to your Firebase account
```
$ firebase login
```
initialize the project on firebase
```
$ firebase init
```
choose y, then choose the newly created database created on firebase  
start the deploy process
```
$ firebase deploy
```


## What you can do
- tweet a post
- check if the post appear
- check out the widget


## Technologies stack
### frontend
- [React](https://reactjs.org/) - framework
- [Material-UI](https://material-ui.com/) - UI components
- [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react) - icon
- [React Twitter Embed](https://www.npmjs.com/package/react-twitter-embed) - show Twitter stream, single tweet and the Tweet button
- [React flip move](https://www.npmjs.com/package/react-flip-move) -simple flip animation when tweet appear

### backend
- [Firebase](https://console.firebase.google.com/) -a google service that handle all backend logic



## Contributors
Minh Tran


## License
This project is licensed under the MIT License

## Challenges and resolutions
- using grid takes some times to get used to
- I was not very fast and take 2 days to finished the project

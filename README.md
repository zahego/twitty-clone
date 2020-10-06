
## Twitty clone
[https://path-finder-extreme.netlify.app/](https://path-finder-extreme.netlify.app/)  
A visualizer of the path finding alforithms. This helps you visualize the algorithms better on how they approaches the end points from the start, given obstacles and dead-ends.

## Motivation
I had trouble usin the Twitter API before so I figure I would try again with Twitter API.

## Getting Started
These instructions will guild you through the inital setting up process and 
highlight what the apps can do for you to explore on your own.  


## Notable feature
- Visualizer with animation for many path finding algorithms
- Add walls and weighted nodes as obstacles
- Maze generator (coming soon)
- Running 2 algorithms at once as a race(coming soon)


## Prequesite
Nodejs installed for local running purpose    
check out Node installation instruction [here](https://nodejs.org/en/)  
Netlify set up if you would like to continuous deploy and host your own client side app
check out Netlify instruction [here](https://www.netlify.com/)  
Or you use any other hostin site, including github page (the site is static anyway)


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

## Deploying on Netlify
access the client folder  
create a prouction build of the app
```
$ yarn build
```
install Netlify on your local repo
```
$ npm install netlify-cli -g
```
login to your Netlify account
```
$ netlify login
```
start the deploy process
```
$ netlify deploy
```
choose the option to Create and Config a new site  
change the site name to your preference  
set the deploy path to   
```
$ ./build
```


## What you can do
- add walls 
- add weighted notes (coming soon)
- change algorithms (coming soon)
- run the visualizer to see the animation of the algorithms.


## Technologies stack
### frontend
- [React](https://reactjs.org/) - framework
- [Material-UI](https://material-ui.com/) - UI components
- [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react) - icon

### backend
- [Firebase](https://console.firebase.google.com/) -a google service that handle all backend logic



## Contributors
Minh Tran


## License
This project is licensed under the MIT License

## Challenges and resolutions
- using minheap (coming soon)

<!-- ![GitHub package.json version](https://img.shields.io/github/package-json/v/abhilashkulkarniofficial/vue-boilerplate)
[![GitHub issues](https://img.shields.io/github/issues/abhilashkulkarniofficial/vue-boilerplate)](https://github.com/abhilashkulkarniofficial/vue-boilerplate/issues)
[![GitHub forks](https://img.shields.io/github/forks/abhilashkulkarniofficial/vue-boilerplate?color=yellow)](https://github.com/abhilashkulkarniofficial/vue-boilerplate/network)
[![GitHub stars](https://img.shields.io/github/stars/abhilashkulkarniofficial/vue-boilerplate)](https://github.com/abhilashkulkarniofficial/vue-boilerplate/stargazers) -->
<!-- [![npm](https://img.shields.io/npm/v/vue.svg)](https://www.npmjs.com/package/vue) -->

# Vue Boilerplate

## Technology Stack


Vue [![npm](https://img.shields.io/npm/v/vue.svg)](https://www.npmjs.com/package/vue)

Vuex [![npm](https://img.shields.io/npm/v/vuex.svg)](https://www.npmjs.com/package/vuex)

Vuetify [![npm](https://img.shields.io/npm/v/vuetify.svg)](https://www.npmjs.com/package/vuetify)


## Project setup

#### Clone the project and enter the project folder
```
git clone https://github.com/abhilashkulkarniofficial/vue-boilerplate.git

cd vue-boilerplate
```

#### Open project using VSCode

Download VSCode and install using the following [guide by VSCode](https://code.visualstudio.com/download)

[Launch the project using command line](https://code.visualstudio.com/docs/editor/command-line#_launching-from-command-line)

```
code .
```

Open terminal in VSCode and run the rest of the commands.

#### Install the packages locally

```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

## Build and deploy the app on github pages

### Create a repository on github

Follow this [guide by Github](https://docs.github.com/en/github/getting-started-with-github/create-a-repo) to create a repository.

You can choose any name of the repo. Just make sure to follow the next steps too.

### Update repo name in project

Open vue.config.js and change the public path to the name of the repository in Github.

Open package.json and change the name and update package-lock.json

```
npm i --package-lock-only
```

### Add repo to project

Add the remote github repo to your project

```
git remote add origin [repo-url]
```

Check the status of the remote origin

```
git remote -v
```

### Push changes

Commit the changes in VSCode using the following [guide by VSCode](https://code.visualstudio.com/docs/editor/versioncontrol#_commit) or 
using the following command.

```
git commit -m "Commit message"
```

Push the code to remote origin

```
git push -u origin main
```


### Deploy the to github pages

Run the deployment script.

```
npm run gh-pages-deploy
```

### Enable Github pages

In your repository go to Settings -> Pages -> Change source to gh-pages branch and click save. Wait for 2 - 10 minutes for the deployment.

You will get a link to the page. Viola!!!

*The credit for this easy method to deploy your project on github pages goes to Roland Doda's article [Deploy to Github Pages like a pro with Github Actions](https://dev.to/rolanddoda/deploy-to-github-pages-like-a-pro-with-github-actions-4hdg)*
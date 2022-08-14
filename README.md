# Dream Generator with OpenAI
Dream Generator is a web app that uses OpenAI's text completion engine to generate ecommerce store ideas based on a prompt.


Back-end repo: [Dream Generator server](https://github.com/estebanchos/Dream-Generator-OpenAI-Server "Dream-Generator server")

## Problem Space
People have ideas of what they would like to sell online, for example sustainably grown coffee, but they might not know exactly how to do it. I wanted to leverage OpenAI's text completion engine to generate simple ecommerce ideas, for example "create a subscription service to receive sustainably grown coffee" or "start a website that connects local coffee producers with customers".
Dream Generator is a simple tool that allows you to brainstorm ecommerce ideas and you can save ideas on your browser.

## Features
* Generating ecommerce ideas based on what you want to sell
* Saving ideas on the browser
* Deleting ideas from the browser

## Teck Stack
### Front-end
* React (TypeScript)
* Sass

### Back-end
* Node.js
* Express

### Third Party APIs
* OpenAI

## Dependencies
### Front-end
* Axios
* Sass
### Back-end
* cors
* dotenv
* nodemon

## Environment dependency
### Back-end
Create a .env file and include:
* OPENAI_API_KEY: key provided by OpenAI
You can create an account and get a key at [OpenAI](https://beta.openai.com "OpenAI")

## Installation - Client
### Clone
Clone repo locally:

`git clone git@github.com:estebanchos/Dream-Generator-OpenAI-Client.git`
### Setup
* Open the project folder and install dependencies.

`npm i`
### Run
* Run react app locally.

`npm start`

## Installation - Server
### Clone
Clone repo locally:

`git clone git@github.com:estebanchos/Dream-Generator-OpenAI-Server.git`
### Setup
* Open the project folder and install dependencies.

`npm i`
### Run
* Run server locally using nodemon.

`npm run dev`

## Lessons Learned
* As a Junior Dev I enjoyed learning how to work with a third party API.
* Managing third party API keys must always be done on the server side. API keys on React .env files are published when the app is compiled.

## Contact Info
[Email](mailto:charlie@carlosocampo.ca "Email")

[LinkedIn](https://www.linkedin.com/in/carlosocampo/ "LinkedIn")

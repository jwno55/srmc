# SRMC App

A SRMC App, currently for english users around the globe.

This project uses firebase of Google.

### Setting up the Development Environment & Installing Dependencies

You would probably need firebase CLI.

If you don't have it installed, install it now:

    npm install -g firebase-tools

And you should also, of course, run this to install other dependencies:

    npm install

run `firebase login` to login into firebase and start to develop. run `npm run start` to run a development server on `localhost:3000`.

### Deploying to Firebase Hosting

to deploy, you first need to build:

    npm run build

and now, good to deploy!

    firebase deploy --only hosting


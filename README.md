# React Simple Starter 🌱

[![Build Status](https://travis-ci.org/KirilSoshnin/react-simple-starter.svg?branch=master)](https://travis-ci.org/KirilSoshnin/react-simple-starter)

Grow your React Web apps with this simple starter.

It includes the basics:

- Prettier
- ESLint
- Parcel
- Babel

It also includes this React module:

- Reach Router (accessible routing for React)

### Why Parcel

[Parcel](https://parceljs.org) is the simplest bundler. It's very fast and flexible too!

When your project grows large enough that you need a more complex configuration, you can move over to webpack.

### Why is there no CSS-related modules

I wanted to keep this starter as simple as possible. CSS introduces choices and opinions, so I decided not to include any of it.

Feel free to incorporate your own CSS workflow or use CSS-in-JS (ex. with [emotion](https://github.com/emotion-js/emotion)).

Whatever you feel!

## Installation

Make sure you have the following on your system:

- Node.js (10+)
- NPM (6+)

Optional, but recommended:

- Visual Studio Code
- [VSCode ESLint](https://github.com/Microsoft/vscode-eslint)
- [VSCode npm Intellisense](https://github.com/ChristianKohler/NpmIntellisense)

The usual routine, run the following command:

```
npm i
```

## Folder Structure

- `./dist/`: distributable files generated by Parcel
- `./src/`: source files of your app

## Components

There are multiple components that you can play around with.

- `./src/App.js`: main component
- `./src/Example.js`: functional component
- `./src/ExampleHooks.js`: functional component with hooks
- `./src/ExampleCustomHook.js`: functional component used as a custom hook
- `./src/ExampleClass.js`: class component
- `./src/ErrorBoundary.js`: class component for error boundaries
- `./src/GlobalContext.js`: functional component for context (global app state)
- `./src/Modal.js`: functional component for a modal using a portal

Delete or modify them at your leisure!

## Commands

The following npm scripts are available to you:

- `npm run format`: run Prettier on all source files.
- `npm run lint`: run ESLint on all source files.
- `npm run dev`: run the app in development mode, starting the local server with Parcel.
- `npm run buid`: run the app in production mode, building the distributable files with Parcel.

## Configure VS Code for Prettier

To seamlessly integrate VSCode with Prettier, create a new file `.vscode/settings.json` (if not existing already) and add the following code:

```
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.requireConfig": true,
  "editor.tabSize": 2
}
```
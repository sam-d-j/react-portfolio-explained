# Technical writeup

Describing the purpose of this project in a technical manner

## Overview

## Audience

This guide has been designed for a specific audience; junior and intermediate web developers looking to enter the field or grow their understanding of the technology that powers their work experience.

## Outcome

You will have the following after completing this course:
- An understanding of advanced, scalable, data-driven state management and application architecture
- An understanding of the best tools on the market to best utilize your time
- A working and publicly available portfolio website you can start customizing and populating with your own identity
- A solid boilerplate that you can use to create any application you want, with a robust set of tools and patterns which will protect you from making mistakes

## Project High Level Purpose

The project produces a portfolio website, designed to consolidate your professional identity in one place - that you own. You can leverage a portfolio to find new employers or to showcase side projects and general ideas you're passionate about.

Because this portfolio is built up from scratch, it also serves as demonstration of technical ability within the frontend development ecosystem. 

## Project technical overview

The project's patterns and tools have been chosen as they will scale to a enterprise-level application and are easy to learn for your future team. You can use the same tools and patterns applied within this project to produce an application of any size, for web, mobile, desktop.

Architecturally we are employing tools that are mature within the ecosystem, such as React, MobX.

Lets start by explaining the biggest patterns:

### State Management (MobX)

I would consider State Management to be the most important part of any application, as it is the "brains" of your app. We try to keep our state management seperate from the view (React) as a convention, and this allows us to keep our view components simplistic and easy to maintain, while giving us freedom to change our state as needed more freely.

MobX is a mature state management library and has been chosen for a few reasons:
- Performance
  Mobx will ensure performance in your React application as it allows for components to render independently, based on the values they depend on, so you will not have to think about performance in the majority of cases.
- Simple patterns
  MobX uses the "observable" pattern, which means in frontend that the values that make up your state have a very intuitive developer experience to manage them. It also allows you to break up your state into smaller pieces very easily using standard Javascript patterns.
- Mature
  MobX is tried and tested, it just works, and can be added to frontend applications once you have a bit of experience

Have a read of the MobX website below to get a great introduction.

Resources:
- [https://mobx.js.org/](https://mobx.js.org/)

### View (React)

React is a extremely popular library which lets you build the visible part of your application using the state you manage in MobX (or many other state libraries). I won't go into details as there are many resources available which will explain it far better than I can.

When educating yourself with React, keep in mind that we are using MobX for state, so the conventions around `hooks`, `useState` etc. are not nearly as important to us - MobX handles it for us!

Resources:
- [https://react.dev/](https://react.dev)


### Tooling (Vite)

These days we need to build our application using a bundler, as this allows us to use new features and to improve our development experience immensely.

Vite is one of the most popular tools for this purpose and for good reason. It's simple, very fast, and production ready. I highly recomend reading more about it as it will be a tool in your toolbelt for your career, and what you learn about how it works will transfer to most other tools like it!

Resources:
- [https://vitejs.dev/](https://vitejs.dev/)

## Beginner

### Things to read up on

- npm https://www.npmjs.com/
- nodejs https://nodejs.org/
- react https://react.dev/
- vscode https://code.visualstudio.com/
- vite https://vitejs.dev/
- git https://git-scm.com/
- github https://github.com/

### Activity 1 - Clone the repository

> **Prerequisites**
> - Create a Github Account

- Login to Github
- Fork the repository https://github.com/nfour/react-portfolio-explained to your own user
- Configure your repository to enable the github pages feature
- Visit github pages once enabled

### Activity 2 - Startup (Locally)

> **Prerequisites**
> If working locally:
> - Install git
> - Install VSCode
> - Install NodeJS at version > 16
> If using codespaces:
> - All above is ready

- Clone the repo to your local machine
- Open in VSCode
- Install pnpm `npm i -g pnpm`
- Run `pnpm install` in the terminal
- Start local dev server with `pnpm dev`

### Activity 2 - Startup (Codespaces)

- Open your [newly forked repo in Codespaces](https://docs.github.com/en/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)
- Install pnpm `npm i -g pnpm`
- Run `pnpm install` in the terminal
- Start local dev server with `pnpm dev`


#### Get the project ready to run

- Open the CLI Terminal
- Install pnpm:
  > `npm i -g pnpm`
- Install dependencies:
  > `pnpm install` 
- Start local dev server:
  > `pnpm dev`
- Open your website development page via the link provided

### Activity 3 - Personalize author data

- Navigate to `./src/data/authors.ts`
- Modify the first user with your own details:
  - Name
  - Email
  - Experience
- You will see those changes reflected in running server
- You can also change the color theme
  - Try changing the colors and see them change on the dev server

### Activity 4 - Finalize author data and create portfolio articles

- Navigate to `./src/data/authors.ts`,
  - Delete the other example author so there is only one author
- Create a new entry within `./src/data/author1/portfolio/portfolio`
  - > We will make a post which describes this project itself!
  - Write the article:
    - > Try referencing the articles that already exist to create your own with the same structure
    - Take a screenshot of your running website
    - Put the screenshot in the article folder
    - Write a short blurb about how the website works, where it came from, etc.
    - Save and check that there are no errors in the terminal
    - Check it out on the running website
- Clean up: 
  - Go through the `./src/data/` folder and delete any remaining fake portfolio articles, being careful to clean up references in `./src/data/authors.ts` to avoid errors

The project should be yours now.

## Intermediate

### Activity 1 - Explanation of the patterns, how it works, why it will scale as an enterprise application

#### How the styling/CSS works

- Explain `@emotion/react`, cssprop, styled() and theming
  - Theming options pros/cons:
    - Css variables
    - theme provider

#### How state management/mobx works

- Explain mobx tree, hooks, rendering overview


#### How data driven state works

- Explain author data in detail


#### How tooling & bundle works

- Explain vite, github actions, github pages
- Explain linter, tsconfig, packagejson deps justification, pnpm

### Activity 2 - Customize the layout

- Add in a background image from `unsplash.com`
- Re-order the components to your liking
- Make your own changes, as you wish, experiment

## Advanced

### Activity 1 - Use the SpaceX API to create your own custom third party component

- Explain why valuable demonstration
  - Third party API integration (GraphQL, zeus client)
  - Integration into mobx state
- Create components to render launches, images etc. 
- Store data in localstorage and rehydrate
  - Demonstrates how to make your app work offline
  - Optimizes calls to API to prevent unecessary work, API throttling

### Activity 2 - Create a protfolio article about SpaceX integration

- User will write about Activity 1
  - how it works
  - why its a good demonstration of patterns
  - showcase with screenshots
- Review portfolio article on public website after pushing changes

## Very advanced

### Activity 1 - Integrate Auth0 authentication for an admin dashboard

- Create Auth0 account
- Wire up new route to /admin page
- Wire up auth0 to your application
- Demonstrate login process working in public website
- Create portfolio article about this page

### Activity 2 - Integrate a database, move your data to the database

- Use something like supabase, faunadb etc.
- Wire up graphql schemas
- Admin area components:
  - To list articles from database
  - To edit/create articles in markdown
    - use monoco editor with preview
- Wire up github secrets, .env files
- Migrate data in ./src/data to database
- Wire up public facing portfolio articles list to new database
- Discard ./src/data
- Application is now entirely enterprise scalable, data driven

### Activity 3 - Wildcard, allow users to sign up and create their own portfolios on your website

- Restructure db to allow for multiple users
- Create sign up page
- Create routing for users to publically showcase their portfolio on your own site
- ???
- Profit




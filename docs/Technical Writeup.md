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

 - todo
  - 

## Intermediate



## Advanced

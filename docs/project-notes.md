# Overview

## Planning

> General Overview

- max time 2.5 hours

- [x] Read and Plan (< 30 min)
- Repo Setup (< 30 min)
- Notes (>= 30 min)
- Component Setup (>= 30 min)
- proofread last ( 15 min )

- flex (15 min) -- for things that take longer than expected

- [ ] Task -> 🗒️ split panning and ntoes if they're coherent

## Component Library Repo Setup

- [ ] Task -> 🗒️ do the standard vit tuturoial

### Must Have

- vite setup and running
- React testing library
- Readme with how to run things

### Setup - Completed

#### `.gitignore`

- folder `.local` is ignored
- a js template is added
- something like `.env.local` would be added eventually as well

### Vite Setup

> For the sake of time the standard vite Tutorial Will be followed

- Primary goal is render a component and run tests

### Explanation - Not Completed

- estlint - maybe drop a standard config into the repo anyway
- .env files

- .github folder
  - include a pr tempalte
  - include a `ci.yml`

#### Install Script

```bash

npm create vite@latest

- choose react
- choose typescript
```

### Nice To had

- [ ] Task -> 🗒️ write up and include your web dev vscode profile
- [ ] Read -> 📖 this looks really nice https://github.com/bartstc/vite-ts-react-template

> Personal note; unsure if using a template is "cheating"

## General Component Library Notes

- [ ] Task -> 🗒️ move this to its own file eventually

### Release Process

### Versioning

### Commit Convections

### Personal Opinions

> Decide Wether to include these based on clarity

- No dependencies
- Story book is good
- Don't force vscode on people (decide if you wnat a .vscode file or note)

## Component Build

### Tasking

- [ ] Task -> 🗒️ run vite locally
- [ ] Task -> 🗒️ run vite tests locally

- [ ] Task -> 🗒️ make a component

> Probably to use the OOB vite setup. (Would rather setup storybook)

### Components

- Scenario with dialog
- Onclose button
- Needs a handler

### Making it nice

- Add Design tokes
- data-test-id per `jsx` or html tag

## Various Source Used

- https://gist.github.com/andreasonny83/b24e38b7772a3ea362d8e8d238d5a7bc
- https://vite.dev/guide/
- https://testing-library.com/docs/react-testing-library/intro

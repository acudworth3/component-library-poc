# Overview

## Component Library Repo Setup

- [x] Task -> 🗒️ do the standard vite tutorial

### Must Have Installed

- [x] vite setup and running
- [x] Readme with how to run things
- [x] React testing library

### Setup - Completed

#### `.gitignore`

- folder `.local` is ignored
- a js template is added
- something like `.env.local` would be added eventually as well

#### PR and Issue templates

- These have been added to `./github`
- They were AI Generated

A few things I would include in a PR template

- link to a ticket or issue system. Example: JIRA, ADO, github issues
- PR Title with conventional Commit Sytnax

#### Vite Setup

> For the sake of time the standard vite Tutorial Will be followed

- Primary goal is render a component and run tests

### Explanation - Not Completed

- eslint - available from the `npm create vite@latest` command but unedited
- .env files

#### Folder Structure

> Misc choices

- `consts/` this folder contains files with consts supported ideally by a linter rule recommending no consts in file
  - files in this folder would generally correspond to values used across components
  - an alternate approach would be to have each reusable component have its own consts folder/file
- `tests/`
- `components`

#### Build System

> [!NOTE]
> I consider the entire ci, PR, cd process part of developer tooling. Depending on team structure that is not always the case, but I include it hear with some thoughts about how to use it as part of the dev experience. (NOT COMPLETED)

- `ci.ymal`
- `release.ymal`
- `cd-from-release.ymal`

-

#### Install Script

```bash

# TODO:  add npm install commands
# TODO add typscript install commands
```

### Nice To have

- [ ] Task -> 🗒️ write up and include your web dev vscode profile
- [ ] Read -> 📖 this looks really nice https://github.com/bartstc/vite-ts-react-template

> Personal note; unsure if using a template is "cheating"

## General Component Library Notes

- [ ] Task -> 🗒️ move this to its own file eventually

### Release Process

### Versioning

### Commit Convections

### Personal Opinions

> Things I could say more about

- No dependencies
- Story book is good

## Component Build

### Tasking

- [x] Task -> 🗒️ run vite locally
- [x] Task -> 🗒️ make a component
- [ ] Task -> 🗒️ run vite tests locally (FAILED)

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
- https://testing-library.com/docs/react-testing-library/example-intro/
- https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements
- https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog

# A template to bootstrap Wealize Frontend projects


___

This application uses [NextJS](https://nextjs.org/).

### Getting started

To start a new project, click on the "Use this template" button.


Install dependencies to your project by running the following command:

```
yarn install
```


To run your application in the localhost, please use this command:

```
yarn dev
```

Please, use the following command to validate your code running static, unit, and integration tests:

```
yarn validate
```

### Design System

The application use [Base Web](https://app.gitbook.com/@olga-f/s/react/design-systems/base-web).
Base Web is a design system for building websites in React. It is [open-source](https://github.com/uber/baseweb).

The main benefits of the Base Web design system are:

- built-in accessibility
- performance

Styletron is the CSS-in-JS engine powering Base Web. That is one of the [fastest solutions](https://ryantsao.com/blog/virtual-css-with-styletron).

### Front-end Testing

The project includes these forms of testing:

- **Static Analysis**: catch typos and type errors as you write the code.

[ESLint](https://eslint.org/) statically analyzes your code to find problems. [Prettier](https://prettier.io/) enforces a consistent code style.
This project use [TypeScript](https://www.typescriptlang.org/). By understanding JavaScript, TypeScript saves you time catching errors and providing fixes before run code.

- **Unit**: verify that individual, isolated parts work as expected.
- **Integration**: verify that several entities work together in harmony.

This application uses JavaScript Testing Framework - [Jest](https://jestjs.io/) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro). Tests live in the `tests` folder, when is possible, next to the file they are testing.
Jest also collects code coverage information.

- **End-to-end**: a helper robot behaves like a user to click around the app and verify that it functions correctly, sometimes called "functional testing" or e2e.

These tests are written with [cypress](https://www.cypress.io/) and [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/). End-to-end tests live in the `cypress/e2e` folder. 

Use the following commands to open and add more Cypress tests:

```
yarn test:e2e:dev
```

Use the following commands to run Jest tests related to only the files that have changed:

```
yarn test:watch
```

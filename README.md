# Python Playground

[![ci](https://github.com/toyai/python-playground/actions/workflows/ci.yml/badge.svg)](https://github.com/toyai/python-playground/actions/workflows/ci.yml)
[![release](https://badgen.net/github/release/toyai/python-playground)](https://github.com/toyai/python-playground/releases)

> Interactive Playground for Python

## Features

- Open python files from public GitHub repository. [Demo](https://python-playground.netlify.app/?github.com/toyai/python-playground/blob/main/api/main.py)

- Unique URL for every python code/file. [Demo](https://python-playground.netlify.app/#ewAiAG0AYQBpAG4ALgBwAHkAIgA6ACIAIwAgAFAAeQB0AGgAbwBuACAAMwA6ACAARgBpAGIAbwBuAGEAYwBjAGkAIABzAGUAcgBpAGUAcwAgAHUAcAAgAHQAbwAgAG4AXABuAGQAZQBmACAAZgBpAGIAKABuACkAOgBcAG4AIAAgACAAIABhACwAIABiACAAPQAgADAALAAgADEAXABuACAAIAAgACAAdwBoAGkAbABlACAAYQAgADwAIABuADoAXABuACAAIAAgACAAIAAgACAAIABwAHIAaQBuAHQAKABhACwAIABlAG4AZAA9ACcAIAAnACkAXABuACAAIAAgACAAIAAgACAAIABhACwAIABiACAAPQAgAGIALAAgAGEAKwBiAFwAbgAgACAAIAAgAHAAcgBpAG4AdAAoACkAXABuAGYAaQBiACgAMQAwADAAMAApAFwAbgAiAH0A)

- Embeddable in the documentations. [Demo](https://ydcjeff.github.io/sphinxcontrib-playground/play.html)

- Show the python traceback as a result if errors occur. [Demo](https://python-playground.netlify.app/#ewAiAG0AYQBpAG4ALgBwAHkAIgA6ACIAcAByAGkAbgB0ACgAJwBIAGUAbABsAG8AIABXAG8AcgBsAGQAIQAnACIAfQA=)

- Autocompletion for Python builtins.

- Export the code to `.py` file.

- Mobile friendly.

## Goal

The original goal of this project is to have interactive examples in the documentation of the python projects like the documentations of the popular JavaScript frameworks.

However since this app is running on the free tier of Netlify and Heroku, we cannot install every python package due to the storage size, memory limit, and version conflicting can occur, too.

So, instead we make a basic app with Python only and let the projects' maintainers install the required dependencies for their python projects.

## Usage

To use this app for the python projects:

1. Fork this repository.

2. Register an account for [Netlify](https://app.netlify.com) and [Heroku](https://heroku.com).

3. Put the extra python packages in `api/requirements-extra.txt` which needs to be creted.

4. Deploy the frontend app on Netlify from your forked repository.

   - Login with your account at https://app.netlify.com.

   - Choose `New site from Git`.

   - Choose GitHub.

   - Choose your forked repository.

   - Click `Deploy site`. _(Do not worry about the build command and publish directory. Those are already preconfigured.)_

   - Change the site name in the `Site Settings`. _(The site name will be used as the environment variable in the backend app)_

5. Deploy the backend app on Heroku from your forked repository.

   - Login with your account at https://heroku.com.

   - Choose `Create new app` from `New` dropdown at the top right corner.

   - Give an app name and Click `Create app`.

   - [Install Heroku CLI as per your OS](https://devcenter.heroku.com/articles/heroku-cli).

   - Type `heroku login` in the terminal.

   - Type `heroku stack:set container -a <your-app-name>` in the terminal. Replace `your-app-name` with the previous given app name. This command set the stack of your heroku app to be container which is basically docker. _(This step is required since we are going to deploy the backend app as the docker image)_

   - Choose `Connect to GitHub`. Choose the forked repository.

   - Go to the app `Settings`. Click `Reveal Config Vars`.

     - Set `KEY` to be `PG_FRONTEND_SITE_NAME`.

     - Set `VALUE` to be your netlify site name. _Only the site name is required. You can omit `.netlify.app`_.

     - If the frontend app will be deployed from custom domain url, set `CUSTOM_DOMAIN_URL` as `KEY` and your custom domain url as `VALUE`. _**This custom domain url has to be full URL**_. If you are not sure about the custom domain url, use the output of `location.origin` in `Console` tab of DevTool in the browser.

   - Go back to `Deploy` tab. Click `Deploy Branch`.

6. Go back to the frontend app on Netlify. Click `Site settings`.

   - Click `Build & Deploy` in the left pane. Choose `Environment`.

   - Set `PG_BACKEND_SITE_NAME` as key and the name of the backend app as value.

   - And redeploy the site.

7. You have successfully deployed your own version of the Python Playground.

8. Since most python projects are using [Sphinx](https://www.sphinx-doc.org/en/master/) as a documentation generator, we have made a sphinx extension – [sphinxcontrib-playground](https://github.com/ydcjeff/sphinxcontrib-playground). Refer to [its documentation](https://ydcjeff.github.io/sphinxcontrib-playground/) for the usage.

## Tech Stack

- [CodeMirror 6](https://codemirror.net/6/)
- [FastAPI](https://fastapi.tiangolo.com)
- [Vite](https://vitejs.dev)
- [Vue 3](https://v3.vuejs.org)
- [WindiCSS 3](https://windicss.org)

## Contribution

See [Contributing Guide](./.github/contributing.md).

## Acknowledgements

This project is heavily inspired by (alphabetically):

- [Black Playground](https://black.vercel.app)
- [Svelte REPL](https://svelte.dev/repl)
- [Vue SFC Playground](https://sfc.vuejs.org)
- [WindiCSS Play](https://play.windicss.org)

## License

[MIT](./LICENSE)

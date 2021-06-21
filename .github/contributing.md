# Python Playground Contributing Guide

Hi! We're really excited that you are interested in contributing to Python Playground. Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

## Pull Request Guidelines

- Checkout a topic branch from the relevant branch, e.g. `main`, and merge back against that branch.

- If adding a new feature:

  - Add accompanying test case.
  - Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first and have it approved before working on it.

- If fixing bug:

  - Provide a detailed description of the bug in the PR. If the PR is fixing an issue, add issue number in the PR template.

- Make sure tests pass! (You can run the tests with `pnpm test`)

- It's OK to have multiple small commits as you work on the PR - GitHub can automatically squash them before merging.

- No need to worry about code style as long as you have installed the dev dependencies - modified files are automatically formatted with Prettier on commit (by invoking [Git Hooks](https://git-scm.com/docs/githooks) via [husky](https://github.com/typicode/husky)).

## Development Setup

You will need:

- [Node.js v14.x and greater](https://nodejs.org/en/).
- [pnpm v6](https://pnpm.io/installation).
- [Python 3.6 and greater](https://www.python.org/downloads/).

If you are using VSCode, the below extensions might be useful:

- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [WindiCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense)

Create a python virtual environment:

```sh
python3 -m venv ~/.python-playground
source ~/.python-playground/bin/activate
```

After cloning the repo, run:

```sh
# install the node and python dependencies of the project
pnpm run setup:dev
```

Before running frontend and backend dev server, you will need a json file for python builtins:

```sh
python scripts/gen_pycompletions.py
```

Now, frontend and backend dev server can be started:

Run the below command in one terminal:

```sh
pnpm run dev # for frontend Vue app
```

After executing the above command, visit http://localhost:3000 and try modifying the frontend source code. You'll get live update.

Frontend source code are in `src`.

Run the below command on another terminal:

```sh
pnpm run dev:api # for backend FastAPI app
```

For backend testing, visit http://127.0.0.1:8000/docs for Swagger API docs and http://127.0.0.1:8000/redoc for Redoc API docs.

Backend source code are in `api`.

See more commands in `scripts` section in the [package.json](../package.json).

# zendesk-coding-challenge

A mobile ticket viewer for Zendesk's coding challenge.

![Demo](https://i.imgur.com/QM7OEmM.png)
## Prerequisites

* Install node.js from their [website](https://nodejs.org/en/).
* Once node is installed, use npm to install yarn
    ```
    npm install -g yarn
    ```

## Installing

Clone the project
```
git clone https://github.com/samzx/zendesk-coding-challenge.git
```

Move into directory
```
cd zendesk-coding-challenge
```

Install dependancies for front-end
```
yarn install
```

Move into back-end
```
cd server
```

Install dependancies for back-end
```
yarn install
```

## Development build

From the root directory: `zendesk-coding-challenge`

First, serve up back-end

```
yarn run server
```

Then serve front-end in another terminal:
```
yarn run start
```

## Tests

From the root directory: `zendesk-coding-challenge`

```
yarn run test
```

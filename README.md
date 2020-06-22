# Delivery Much Challange

This API project was done for a challenge issued by Delivery Much. This API returns a list of recipes, using Recipe Puppy to get the recipes and GIPHY to add a GIF to each recipe found.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine, for development and testing purposes.

### Pre-requisites

You must install node.js, docker and docker-compose.

```
I strongly recommend downloading the LTS versions from:
https://nodejs.org/en/
https://www.docker.com/products/docker-desktop
```

### Installing

First, you'll clone the repository from github.
Then, open the folder you just cloned - make sure your docker service is running.
Run docker-compose build to create the container, and, to finish it off, run docker-compose up to start the container.
With these steps, the environment should be running smoothly at localhost:3333.

```
git clone https://github.com/danilocordeiro/dm-challenge
cd dm-challenge
docker-compose build
docker-compose up
```

## Request & Response Examples

### API Resources

- [GET /recipes?i=ingredient_1,ingredient_2](#get-recipes)

### GET /recipes

Example: http://localhost:8083/recipes?i=potato

Response body:

    {
    "keywords": [
        "potato"
    ],
    "recipes": [
        {
            "title": "Moroccan Spiced Roast Potatoes",
            "ingredients": [
                "potato"
            ],
            "link": "http://www.recipezaar.com/moroccan-spiced-roast-potatoes-377030",
            "gif": "https://media2.giphy.com/media/2u9HmOf6BmqwU/giphy.gif?cid=01c7561e10b24842c1b8659d6589f28c9e42f9c3ecfb7ce1&rid=giphy.gif"
        },
        {
            "title": "French Potato Salad (Light)",
            "ingredients": [
                "potato"
            ],
            "link": "http://www.recipezaar.com/French-Potato-Salad-Light-315220",
            "gif": "https://media2.giphy.com/media/2u9HmOf6BmqwU/giphy.gif?cid=01c7561ed80ebc321020354026a32ba496028e12f8d7de21&rid=giphy.gif"
        },
        {
            "title": "Baked Potatoes from the Crock Pot",
            "ingredients": [
                "potato"
            ],
            "link": "http://www.recipezaar.com/Baked-Potatoes-from-the-Crock-Pot-53182",
            "gif": "https://media2.giphy.com/media/2u9HmOf6BmqwU/giphy.gif?cid=01c7561e57400d355777cebc7a01f7e416f30bb4f13bcbd1&rid=giphy.gif"
        },
        {
            "title": "Garlicky Olive Oil Potato Salad",
            "ingredients": [
                "potato"
            ],
            "link": "http://www.recipezaar.com/Garlicky-Olive-Oil-Potato-Salad-233788",
            "gif": "https://media0.giphy.com/media/OvxBnDE6bs85q/giphy.gif?cid=01c7561e68e2831b09707dc930bbd2e6a1df6755af9124c8&rid=giphy.gif"
        },
        {
            "title": "How To Strengthen Your Arms Recipe",
            "ingredients": [
                "potato",
                "potato",
                "potato"
            ],
            "link": "http://www.grouprecipes.com/65147/how-to-strengthen-your-arms.html",
            "gif": "https://media2.giphy.com/media/14qg4oDG8LSXAs/giphy.gif?cid=01c7561e7942b31b8c43a5cb792582f3b7a5f7eafb5a21ab&rid=giphy.gif"
        },
        {
            "title": "Poasted Garlic And Potatoes Recipe",
            "ingredients": [
                "potato"
            ],
            "link": "http://www.grouprecipes.com/5932/poasted-garlic-and-potatoes.html",
            "gif": "https://media2.giphy.com/media/2u9HmOf6BmqwU/giphy.gif?cid=01c7561e0808dc817c5e57361f831c6d22fce8231ef61537&rid=giphy.gif"
        },
        {
            "title": "Yukon Gold & Sweet Potato Mash",
            "ingredients": [
                "potato"
            ],
            "link": "http://www.eatingwell.com/recipes/two_potato_mash.html",
            "gif": "https://media1.giphy.com/media/XpjB9rp5yMP3HxpEs6/giphy.gif?cid=01c7561ed3e802d22345e42e8f9f093dde51c02f5c5306bc&rid=giphy.gif"
        },
        {
            "title": "Oven &#8220;Fries&#8221;",
            "ingredients": [
                "potato"
            ],
            "link": "http://www.eatingwell.com/recipes/oven_fries.html",
            "gif": "https://media2.giphy.com/media/NtZ80biWTGa88/giphy.gif?cid=01c7561e439f1bd4a1af90161a7257b1af6348eb9f92625c&rid=giphy.gif"
        },
        {
            "title": "Spicy Stewed Potatoes & Spinach with Buttermilk (Aloo chaas)",
            "ingredients": [
                "potato"
            ],
            "link": "http://www.eatingwell.com/recipes/stewed_potatoes_spinach.html",
            "gif": "https://media2.giphy.com/media/2u9HmOf6BmqwU/giphy.gif?cid=01c7561eb451306e8748827a2357a670f946cf1a0698c8ef&rid=giphy.gif"
        },
        {
            "title": "Roasted Root Vegetables with Chermoula",
            "ingredients": [
                "potato"
            ],
            "link": "http://www.eatingwell.com/recipes/moroccan_roast_vegetables.html",
            "gif": "https://media0.giphy.com/media/de9SDw6PGRsubN1o3X/giphy.gif?cid=01c7561e607a3d2967c58d922865e1480bd20e238c7ce708&rid=giphy.gif"
        }
    ]

}

## Running the Unity tests

There are Unity Tests on the project in order to ensure that it runs cohesively, and they can be found at their respective folders.
The tests cover subjects such as string sanitazing and sorting methods. The tests in place are there to make sure the code isn't broken while the API was being developed - it is essential for present and future maintenance.

```
npm run test:unit
```

### Style guide

The standard eslint rules were applied, and the full list can be found at https://eslint.org/docs/rules/
If you want to configure your own eslint rules, the file can be found at [.eslintrc.json](./.eslintrc.json)

```
{
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true,
        "jest": true
    },
    "extends": [
        "standard"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
    }

}
```

## Others features

Use husky and lint-staged to run tests and fix lint before commit and push

## Credentials

Each recipe has a gif url as an object attribute, so, for the API to work, you need an apikey. There's an [environment](./.env) file that has my GIPHY_KEY. You must change it when deploying the API, and to use another key just replace the GIPHY_KEY value with your own. For more information, go to https://developers.giphy.com/docs/sdk.

## CI/CD Github Actions

We use GitHub actions for Continuous Integration for running the tests when there's a PR and pushes on the master branch. The configuration file can be found at [nodejs.yml](./.github/workflows/nodejs.yml)

## Built With

- [Nodejs](https://nodejs.org/en/docs/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Docker](https://www.docker.com/) - Used to build cointeined applications.
- [Express](https://www.npmjs.com/package/express/) - HTTP server

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

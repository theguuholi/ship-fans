# Welcome To Ship Fans

Whoosh has realized that golf is for nerds, and we've pivoted hard to become a ship-based favoriting
service.

We need you to build us a small prototype of that service that we can all talk through, just to get
an idea of how you approach programming. The goal here isn't to check for specific syntax or library
knowledge, but to to give us a neutral problem space and solution to explore together.

We've provided you this application shell. It already makes the query for you, and provides you with
the data, and a function to refresh that query. You will locate all of this code in `./src`.

Though we have provided this for you, you are welcome to modify, or replace any of the code that you like in order to deliver your solution.

We have also provided a design mock, and a design brief. Before you begin, we would like you to write down any questions or thoughts you have about the mock or design brief, and send those questions/thoughts in with your solution. If you run into a question that you feel is a blocker, please simply make up an answer that unblocks you and let us know.

**For example - "Question: The Design brief does not mention pagination at all. What should we do if there are too many records? Answer: There will be no pagination and we will simply show all records returned from the query."**

Again, we are just looking for something to talk through. We do not expect this to take more than 3 hours of your time. If this task is starting to run astray of that, please feel free to stop there, and we can discuss where you'd gotten in your solution. (We thank you very much for helping us refine the scope of this task appropriately!)

When you're all done, just zip this directory back up and send it to scott@whoosh.io.

## Design Brief

[Figma Mock Here](https://www.figma.com/file/Ol0AaNWeJZl19zgivHnKTC/Ship-Fans)

The ShipFans MVP is very basic. We need to deliver the app pictured in the mock, with the following features.

- Display all ship results in a scrollable list.
- Clicking on a result will expand it, showing its home port, and ship type.
- Clicking on the heart icon in a result will "favorite" that ship.
- My list of favorites will be stored locally, and does not need to survive a refresh.
- My list of favorites will display as cards in the right side panel.
- The average year built of all of my favorite ships will display in the lower right corner of the right panel.
- Selecting one of the ship counts on the top right will fire the query off again with a new limit, and refresh the list displayed, but my favorites list will remain.

## Using the application shell

Inside `/src/ShipFans/index.tsx` you will find the query you need to make, as well as the plumbing through relay to actually make it. Feel free to create as many other folders and files as you like to deliver your solution, as well as to modify the existing files if need be.

The actual query is made to the Space X api, which you can find here: [SpaceX Api](https://studio.apollographql.com/public/SpaceX-pxxbxen/variant/current/home)

We are not opinionated on which libraries you use to deliver your solution, so feel free to install additionally libraries of your choosing.

Note also the repo is set up for typescript, but if you want to simply name you're files .js/.jsx, that's totally fine with us.

Below are just the auto generated instructions from create react app, but they will get the project running.

### Thank you for your time! We look forward to discussing your solution.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

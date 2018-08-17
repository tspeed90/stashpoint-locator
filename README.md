# STASHER TECH TEST

[See it live](https://stashpoint-locator.netlify.com/)

## ABOUT

A simple locator for Stasher's luggage storage services in your area. Utilizes geolocation to find storage in a 3 mile radius of your location.

## TO RUN LOCALLY

```
git clone https://github.com/tspeed90/stashpoint-locator.git
npm i
npm start
```

## TECH STACK

- React/Redux
- Webpack
- Netlify Hosting

## NOTES:

- I used Redux which is a bit more work than necessary for this particular project, but I am currently in the process of learning Redux and trying to reinforce the concepts so I thought it'd be good practice to implement it. I acknowledge that setState would have been much quicker and simple for this usage.
- The same applies for Webpack. I have used Parcel bundler in the past which is zero-config and is much faster for jumpstarting a project like this. It would have been perfectly acceptable for this project, but I used this project as an opportunity to build myself a boilerplate with React and Webpack. I also wanted to use Webpack for the same reason as Redux. I am just getting familiar with it and thought it would be good practice. I did have a small problem with the dev server early on so I am grateful I had that opportunity to come across errors like that and hopefully it will lead to me being quicker with these tools in the future.

## CHALLENGES:

- I had an error for a while that I should have googled much sooner. The error was: "Objects are not valid as React children" which I discovered it was throwing because a few of the items I was trying to render to the screen were objects and not strings as I thought they were.

- Another issue I had for a bit was in setting up the geolocation. I kept getting a "Uncaught in promise" error even thought it was returning my coordinates which I found odd. It ended up being due to an extra set of parenthesis in my getLocation function that caused the next function at my 'then' to not be able to run.

## WITH MORE TIME I WOULD...

- test the application thoroughly
- allow users to search other cities and not only display locations in their current area
- add the ability for the user to decide the nearby_radius value

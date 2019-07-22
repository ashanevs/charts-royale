# Charts Royale

## Description

Charts Royale is a data visualization tool based on the mobile game Clash Royale. The data provided for the site comes from Royale API. There is a wealth of data available within the game, and this site was created to display data in new and interesting ways for player consideration

## Technologies Used

React, Chart.js, React-chart-js2, React-router, Axios

# View of App

<img src="https://raw.githubusercontent.com/ashanevs/charts-royale/master/public/piechartsroyale.png" alt="charts-royale-pie" width=500 height=250>
<img src="https://raw.githubusercontent.com/ashanevs/charts-royale/master/public/aboutchartsroyale.png" alt="charts-royale-about" width=500 height=250>

## Link to Deployed App

https://chartsroyale.surge.sh

# Features and Planning

The Bronze Level goal for CR was to display several charts for an individual player on search. This goal was completed, and users will find a search form on the home page that finds a player by their in-game tag id (e.g. `208RRCYGL`). The Player page displays a pie chart containing information on their win/loss/draw ratios, a bar chart with their average card level per card rarity, and a doughnut chart showing the total number of cards per level in their collection (note that some of these charts axes began at a mid-tier level achieved by the average player in a fairly short span - this could be adjusted if desired). Also note that the player page contains the player's current deck - while this doesn't convey mathematical information, I believe it adds a nice flavor that reminds you of the mobile game, and I believe the data is useful even against the other visualizations (for instance, a player may play a max level/level 13 deck, but have very few level 13 cards in their collection - indicating a focused leveling history for their card collection).

The Silver level goal was to implement Clan information. This was also completed, and users are able to search for specific clans by in-game clan id (e.g. `JG090GV`) from the home page. Clans currently only have two graphs available - a clan score (combined trophy count) over time line graph, and a tuple bar graph containing participant and win information for the last ten clan wars.

The Gold level goals of this project include implementing information for the top players and clans specifically, and in particulary to provide a choropleth (density) map regarding player location globally. At the time of writing, only information regarding the top players has been filtered to be available on the home page. Regrettably, clan information is only available on a case-by-case basis for clans who elect to participate with Royale API, so pursuing top clan information was not always managable. The choropleth map seems possible to implement given that clan and player data includes location codes, but due to time constraints hasn't been included at present.

# Getting Started / Installation Instructions

Using the site is as easy as going to the deployed link and clicking around. There are two example tags provided above the search forms that can be used in lieu of having your own data to search. Additionally, you can click the Top Players link to dive straight into the top 50 player list, which can be clicked to view individual info.

If you want to work with the full repo, first fork and clone it (https://help.github.com/en/articles/fork-a-repo). Ensure you have node installed (node --version from your CLI to check the version, if not, it is available for free from their website) then run

```
npm install
```

from the root directory of your cloned project to install dependencies (e.g. charts.js, axios, react-router).

To begin hosting the front end locally, pass

```
npm start
```

into your command line. You may be prompted to use an alternate port (as the back end should be running on port 3000); press Y to automatically use the next available port. The site should open in your default browser.

# Issues

There is a warning issue that occurs regarding changing state on an unmounted component while running the app on the local host. This doesn't appear on the deployed site. I believe it stems from the way that I've set up the loading wheel for the buttons on the main page - use of a set interval is meant to change the loading icon back if an invalid search query is entered after a few seconds (or if the API is slow to respond). Making the button perform the two actions as desired required using a callback. Functionally it seems fine, but this should be addressed in the future.

Some API data is limited for clans only if they have elected to participate in the API's data gathering process (instructions to join are in their docs). While a ton of clans work together with the API, it limits some functionality - for instance, top 50 players have their clan links disabled to prevent searching for invalid info. This isn't an enormous issue but may lead to some errors gathering data depending on the user's search parameters. I haven't encountered this - but then, my clan is registered.

In local host testing, an occasional CORS error has appeared, and I'm not sure the cause. Also, there are rate limits on gathering certain data (error 429) which have rarely been problematic.

# Prospective Goals

There are a ton of things I would like to do ! There were considerable time constraints in creating this app, but there is a lot on the horizon.

The Gold level goal for a choropleth map remains present. Working with topojson and choosing the best dependencies to assist have already begun.

It may be interesting to create a player-comparison feature, where two players can be selected and charts are generated comparing their data.

Implementing my own back end may ease some of the dependency on Royale API, and could allow for options like user models and authentication.

More card-related resources like deck building, deck suggestions, etc would be welcome.

I particularly wanted to include information for a player which calculates the length of time it takes for them to request enough cards from their clan in order to upgrade (this is a thing I've had to do on a calculator countless times).

# Contribution Resources

Source code: https://github.com/ashanevs/charts-royale

Issue tracker: https://github.com/ashanevs/charts-royale/issues

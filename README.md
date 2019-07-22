# Charts Royale

## Description

Charts Royale is a data visualization tool based on the mobile game Clash Royale. The data provided for the site comes from Royale API. There is a wealth of data available within the game, and this site was created to display data in new and interesting ways for player consideration.

## Technologies Used

React, Chart.js, React-chart-js2, React-router, Axios

# View of App

<img src="#" alt="charts-royale" width=500>

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

# Contribution Resources

Source code: https://github.com/ashanevs/charts-royale

Issue tracker: https://github.com/ashanevs/charts-royale/issues

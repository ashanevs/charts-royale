# Planning

## Phase One: Epic Failure

My initial plan for a project was to create a price-tracking app for Amazon products. The app would take a single item or a wishlist of items via url, scrape the site for product info (name, price, images), then store that information on a back end for analysis. The eventual goal of that project would've been to have the database automatically retrieve that same information on a periodic basis, update it in the database, then utilize the instances to create visuals in the form of trend/line graphs for a user to follow.

This turned out to be a little more finnicky than expected - while I forayed into scraping pretty well and managed to get a back end up that could store a new instance of a wishlist at the push of a (POST) button, I found a number of isses. Amazon wasn't static enough in the way the page renders (sale items, for instance, would utilize entirely new DOM elements that the scraper may not be aware of), for instance.

## Phase Two: Less Epic Picking Myself Back Up

In lieu of completing this project (which may still happen at a future date !), I've chosen to create an app based on a mobile game I know and love, Clash Royale, which will follow in the spirit of the original idea - data visualization. I'm going to utilize the unofficial Royale API to obtain data - primarily about specific players and clans, as opposed to static game-data. I will use this data to provide a number of interesting charts and features. I am also very interested in the front end in general, so polishing the site and making it responsive are high priorities for me.

The Bronze level goal of this project will be allowing a user to search for a player, and returning a number of charts with various data. Player win rates are an obvious statistical choice. Information about their card collection would be good as well. Donation history is another option.

The Silver level goal will be allowing a user to search for clans, which also returns a bunch of charts. Clan score, war logs, donation info, and averages across players can all be considered.

The Gold level has plenty of room for other ideas. I think info for top players and clans specifically would be nice. It might be nice to be able to compare two players to each other specifically.

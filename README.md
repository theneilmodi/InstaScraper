# InstaScraper
Download all images of a public Instagram account. This is a 2 part VERY RELIABLE process.

#Part 1 - insta-chrome.js

Go to the Instagram page you want to scrape, open the Chrome console and copy and run insta-chrome.js.
This will open a window with lots of links (it's a JSON object). Copy and save this as links.json

#Part 2 - insta-download.php

Change the name variable, for a suitable folder name. Run the PHP script. There should now be a folder called pics in the same directory with your folder filled with images.

#Problems

- Sometimes there might be a couple of pictures that repeat
- You might not get all the images you want the first time (not often, but changing the imagesToGet variable in the .js file helps with that)

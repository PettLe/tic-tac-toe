The beginning was slow as it seems to be with these current projects. But it's fine and I've learned to take it slow on purpose. It always feels so
overwhelming to start a new project without having any idea what to do. But instead of staring at the empty screen for hours trying to figure the whole thing in my
head, I just slowly start to piece together the small (empty) functions and HTML + CSS that I know I'm going to need. Seems to work.

By far biggest problem was pushing the right value to the array. Eventually e.target.getAttribute to the rescue! Worked like a charm.
Little bit struggles with the winning conditions. I used a bunch of if... else if -statements and I'm sure there is a waaay more elegant solution.
But at least everything else turned out fairly clean, no global variables (which I used to think are the best!) and everything is nicely contained.
Tried to make it so players don't have access to where they shouldn't.

Creating players and their markers... it feels I somehow oversimplified it. Can it really be as minimalistic and simple as I made it to be? Am I forgetting something?

Div display for the winner is difficult. I managed to create it fairly simple, but removing it (as restarting the game) is a problem. Eventually managed to do it
with quite a juggling act. Used length of the nodes and removed it there.

Had also problem with the player names. For some reason it only declared them AFTER they've been inputed into value and the whole page has been refreshed once.
Finally I came up with an idea to put the creating of new players inside a function and calling it during the first phase of the game.
Probably not optimal but it works.

Getting the game to display winner's name in color was a tough case. Managed to do it with implementing innerHTML. I know it's usually not a good idea (security risks), but this time it was
only way I could figure.

Overall this project wasn't too hard. My confidence with DOM manipulation is growing more.

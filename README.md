By far biggest problem was pushing the right value to the array. Eventually e.target.getAttribute to the rescue! Worked like a charm.
Little bit struggles with the winning conditions. I used a bunch of if... else if -statements and I'm sure there is a waaay more elegant solution.
But at least everything else turned out fairly clean, no global variables (which I used to think are the best!) and everything is nicely contained.
Tried to make it so players don't have access to where they shouldn't.

Creating players and their markers... it feels I somehow oversimplified it. Can it really be as minimalistic and simple as I made it to be? Am I forgetting something?

# OkCupid Take-Home Exercise

## Project Structure

I kept the redux code in a ducks pattern. I personally like this pattern of
grouping together related constants, actions/action creators, and its reducer.
Especially coming from Vue.js, this is how all Vuex code is organized and it
makes sense.

I decided to use Redux hooks instead of Redux connect. This is the Redux
recommended approach to building React components and for a good reason. It's
a good remedy to unnecessary component nesting and it reduces the amount of
code needed.

## Challenges

### Bolding the answer within the template text

In the interest of saving time and not writing an over-engineered solution, I
implemented a solution that works only for template texts that have a single
`$answer` token. A more robust solution that would handle multiple tokens isn't
needed at the moment for the given template texts and I don't think it would
make sense to solve a problem that isn't there yet.

### Generating the final essay text

I was considering updating the essay text only when the user clicks the edit button.
One upside to this is performance. Instead of the essay text being updated
whenever the user blurs from the input field, the essay text would only ever need
to be set once.

However, I decided to update essay text anytime an answer changes. The upside to
this approach is that the essay text would never be "out of sync" with the answers.
The essay text would always reflect the answers and template texts at all times
making it more predictable and easier to reason about.

# Giphy Search with TypeScript

This app pulls from Giphy and allows users to search for a GIF and copy or share it to their favorite chat program (by url).

It uses Giphy's API to generate GIFs.

It also uses Cypress for E2E testing and a GitHub Action to run tests on each push.

## Requirements/Features

- GIFs should render using the MP4 format
- App should load in under 1.5s
- It should work in the most modern browsers
- Enough styling that the app is usable and presentable
- An AJAX/Fetch library as well as a utility library for things like encoding query parameters or debouncing/throttling is acceptable

### Core

- A user should have a clear way to search for GIFs
- A user should be able to make their own queries to search for GIFs
- A user should be able to easily copy the GIF URL to a chat program

### Extras

- A user should get results shortly after they're finished typing
- A user should be able to cycle through many GIFs for each search query
- A user should be alerted when the API limit is reached (42/hr or 1000/day for free account)
- A user should be able to see previous results even after the API limit is reached
- A user should be able to see 3 random GIFs before searching


# Cordant Junior Dev Challenge

Instructions for use:
- Clone this repo
- cd `cordant-tech-test`
- Run `npm install` to install dependencies
- To start server run `node app.js` OR if nodemon is installed globally, run `nodemon`
- Navigate to http://localhost:3000/ in your browser
- Select desired client and click submit
- A list of all candidates will populate, with their relative distances to the selected client

## Approach
I approached this challenge by initially understanding the structure of the existing project. I have some familiarity with Node and Express but I spent a bit of time understanding the materialize.css and leaflet.css as these were new to me. I also played about with main.js, although I didn't get ultimately get far enough to integrate maps into the platform.

I wrote up my user stories, below, and drew a few diagrams after I installed Node and Express. The diagrams helped me to visualise my desired structure of the final application.

I came to the conclusion that a database was not necessary yet, as the client and candidate information could be served by the JSONs. If more properties were to be added to either data structure, or if the size of the JSONs grew considerably I would consider creating a database.


## Struggles/Successes
The Google Maps API was new to me, and my greatest struggle was not retrieving the calculated distances in relation to the select client location, but integrating this data by associating it with the candidates, as I did in the function `_buildCandidatesDistances` in listAllCandidates.js.  

I am happy with this code as it delegates to private methods to build a Javascript object, which is easy to reference in the views.  

## Further features
I am a step away from sorting the candidates by distance. Currently the page displays all candidates with their relative distances, but it is unsorted. I included the API response 'value' data as well as the distance 'text' in the object sent to the view so this can be queried to sort the candidates.

If I had more time I would also include the candidate's mode of transports. This would require amending the API call in the server to include each type of transport.  

I would like to improve test coverage too, there was a lot of work done in the views which I found difficult to test for but the logic in listAllCandidates should be tested.  

The styling on the client select page could be improved, the select dropdown doesn't fit with the initial appearance. The button is also far on the left and out of place, with no margins.   

### User stories
```
MVP
As a recruiter,  
So that I can choose a client,  
I want to see a list of all clients in a dropdown menu.  

As a recruiter,  
So that I can select a client,  
I want to be able to select the client from the dropdown menu.  

As a recruiter,  
So that I can choose a candidate,  
I want to see a list of all candidates after choosing a client.  


VERSION 1  
As a recruiter,  
So that I can choose the best candidate for the job,  
I want to see the candidates' distances from the client in the list.  

As a recruiter,  
So that I can choose the best candidate for the job,  
I want to see a list of all candidates sorted by proximity to client's location.  

As a recruiter,  
So that I can choose the best candidate for the job,  
I want to see the candidates' time to travel to the client along with their mode of transport.  



VERSION 2  
As a recruiter,  
So that I can see where the client is,  
I want to see their location plotted on a map as a marker.  

As a recruiter,  
So that I can see which candidates live near the client,  
I want to see a map with all the candidates' locations plotted as markers.  
```

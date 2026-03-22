## AI Conversation Review Dashboard

React application built with Vite that allows users to browse conversations, review them, update statuses, and add internal notes.

## Features

### Sidebar
- Displays the list of conversations
- Each conversations includes:
  * title, review status, last update time

### Main View
- Displays full conversation that the user clicked
- Each Main View includes:
  * **Header** - with title, category of the problem, location (city + country) and the actual status
    of the conversation. (The status can be clicked by reviewer, so that he/she can change the status).
  * **Messages** - with all conversation and timestamps
  * **Internal Notes** - with input and save button. It allows the reviewer to make notes for each of the
    conversation.

### API 
In this project the geolocation API has been used. The API determines the country by the city which
was passed as an argument.

### Tech Stack
* React
* JavaScript/TypeScript
* CSS
* GeoNames (API)

## Installation
### Clone the repository 

git clone <>
cd <>

### Install dependecies

npm install

### Run development server

npm run dev


## Author
Andrzej Nowak 

## License
MIT













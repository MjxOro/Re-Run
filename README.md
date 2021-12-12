
# Local Classifieds Website
Demo the app here: https://re-run-cuqwd.ondigitalocean.app/
*Chat currently not working

## Description
This project was to display the capability and skills of being a fullstack web developer.The front-end of the website was built with
react.js and styled using Sass. The backend is built with Node.js and Express.js.
The website has full CRUD functionality where the information is stored in a database, the choice of database for this poject is MongoDB.
There are also 3rd party api's included in this project which will require a secret API key to use to full extent.

## RE-Run
Re-run is the company name I came up with when building this website. The puropose of this website is a local classifields posting website
where users are free to post services and products. This website has similar features to other local classfields websites like: ceate, edit, read and delete
postings, Google maps integration and in app chat feature. The unique feature of this website is a loyalty point system where users are rewarded points from simply browsing the website. Users can redeem these points to have their posts featured on the hero banner to increase viewability of postings.

## Getting Started
First clone the repository using the command `git clone https://github.com/MjxOro/Re-Run.git` then install the dependencies on the `./client` and `./server`
directories using `npm install`. 

Once the dependencies are installed, fill in the `.env.sample` variables in both `/client` and `/server` directories.
Then launch the project by using `npm start` on the `./client` directory and `nodemon index.js` on the `./server` directory.



#### Google Maps API KEY
To get a google api key, you would need to head to https://developers.google.com/maps and signup for their free trial (Credit card Required).
this key is NOT exclusive to google maps so feel free to use this key for other google api features! Once your account is created, find your API key on 
the account dashboard and copy that key and paste it in your `.env.sample` file in the `./client` directory. The last step is to enable the use of your key 
for google maps, which is also located in your account dashboard.



#### SendBird APP KEY & API KEY
To get the SendBird keys, you would need to head to https://dashboard.sendbird.com/auth/signup and signup for their free trial.
Both of these keys are located in your account settings. Once you get your keys, copy and paste the keys in `.env.sample` located in both `./client` and `./server`
directories.

##TODO
- Re write code in typescript to ensure code scalability
- Fix chat feature




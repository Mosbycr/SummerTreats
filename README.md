# Summer Treats 
A web application that allows users to add treats and eat their favorite summer time treats. 

Utilized HTML, CSS, Bootstrap4, jQuery, Node.js, Express.js, Handlebars.js, AJAX, ORM, MVC, REST APIs.

Visit the live application via Heroku: https://lit-tundra-51997.herokuapp.com/

## Installation
If you would like to download and use the code you will need to:
* npm install express
* npm install express-handlebars
* npm install mysql
* In connection.js change the password to your mysql password
* Run the schema.sql and seeds.sql in mysql to create the database and tables

## Getting Started 
To use the application:
* Add a treat by typing in a treat name in the form text box at the bottom of the application and clicking the Add Treat button.
  * This will add the treat under the About to be eaten column.
  * Treats are added to the column list with a number corresponding to the order they were added.
  
* Eat a treat by clicking on the Eat Me! button beside the treat you would like to eat.
  * This will move the eaten treat to the Already Eaten column.
  
## Demo
![summerHome](https://user-images.githubusercontent.com/46547100/57962948-9725df00-78eb-11e9-9968-439ba513b6dd.PNG)

Before and after a treat is added

![summerAdd](https://user-images.githubusercontent.com/46547100/57962944-9725df00-78eb-11e9-924e-6053b52d72b6.PNG)
![summerAddAfter](https://user-images.githubusercontent.com/46547100/57962945-9725df00-78eb-11e9-8c7e-57568dfdf696.PNG)

Before and after a treat is eaten

![summerEat](https://user-images.githubusercontent.com/46547100/57962946-9725df00-78eb-11e9-8222-da84f5705396.PNG)
![summerEatAfter](https://user-images.githubusercontent.com/46547100/57962947-9725df00-78eb-11e9-8260-5a89ae564dcf.PNG)

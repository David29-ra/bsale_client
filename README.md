# Ecommerce app (bsale)

Features:

    Backend
      Language: Ruby
      Database: Mysql
      Datbase on cloud: AWS

    Frontend
      Language: Javascript

    Helpers
      Bootstrap
      SweetAlert

## Backend

For the backend part, the api was build using RoR based on Ruby, and the database used was Mysql which connects with the datababase of BSALE in aws.

    Here, the controller of Product return all products filtered by the category.

      Example of the return:

      [
        {
          "id": 7,
          "name": "vodka",
          "products": [
            {
              "id": 104,
              "name": "ABSOLUT",
              "url_image": "https://dojiw2m9tvv09...png",
              "price": 8990.0,
              "discount": 30,
              "category": 7
            }
          ]
        }
      ]

    The api used entorn variables to connect with the database, because always is important to take care with the credentials of db.



You can visit the api in the following link:

https://products-by-category.herokuapp.com/

## Frontend

For the frontend part, the UI/UX was build in Js(vanilla) using bootstrap and sweetalert for some components.

    In this part the distribution of files and directories are easy to understand because the they were named in the same way as the components of functionality.

      For Example:
        on ./scripts/helpers/capitalize.js, the file is name capitalize, because it is the helper of the capitalization of the name of the product.

    The distribution of files are similar to frameworks like React, Angular, Vue.js and its to easy to understand.

The result of the frontend is a website that can be seen in the following link:

/put link/

    For the user experience, the web site use Listeners of DOM to manage the interaction between the user and the website.

<br/><br/>
### Ready, you can enjoy!

<br/><br/>

*Made by Monito Inc. 🙊*


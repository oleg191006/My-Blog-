A project in which you can create, update, and delete posts. 

To launch the project you need:    

1. Сlone the repository and go to the project folder

       git clone https://github.com/oleg191006/My-Blog-.git
   
       cd My-Blog-


  2.Install dependencies  
    
       npm install

 3.You need to run two servers: one for the API backend and one for the frontend.

Start the API server (Backend)  
This will run the API server on port 4000, which handles the data operations (create, read, update,patch, delete posts). To start it, run:

     nodemon server.js  
     
Start the Frontend server  
In a new terminal, start the frontend server, which will run on port 3000 and provide the user interface for interacting with the posts. To start it, run:  

    nodemon index.js



  4.Follow the link  
  
  http://localhost:3000/


# Clinikk Intern Task

Backend URL (deployed): https://clinikkinterntask.onrender.com (Might take a few seconds to send the first request at it restarts the server on render free version.)
Documentation of API's : https://www.postman.com/mission-technologist-16789681/workspace/clinikkinterntask/collection/36499112-0a884635-9bb1-474d-8d61-416b94694767?action=share&creator=36499112
## Tech Stack 
1. NodeJS
2. Express
3. MongoDB
4. Cloud Storage 
5. Redis 
## Basic Approach towards this task (Check the /assets folder for basic architecture diagram) : 
I have implemented a Node.js (Express.js) backend with MongoDB to store media metadata. Instead of saving media files in the database, they should be uploaded to a cloud storage service like AWS S3 or AZURE BLOB which returns presigned URLS which should be stored in the database. This ensures efficient storage management and better scalability. The system follows a RESTful API structure, supporting CRUD operations for managing media content while maintaining clean code, modularization, and proper error handling.

Additionally, Redis caching can be implemented to store frequently accessed media URLs, reducing database queries and improving response times. When a media file is requested, the system first checks the cache; if the URL is found, it is served immediately, otherwise, it is retrieved from the database and stored in Redis for future requests. This approach enhances performance, reduces latency, and optimizes database load, ensuring a scalable and efficient media service.

## API Endpoints
1. /media POST (creates new media data at backend)
2. /media GET (gets all the urls from database)
3. /media/:id GET (gets particular id from the database)
4. /media/:id PUT (updates the particular fields on DB)
5. /media/:id DELETE (deletes particular media file)

## How to run (Locally)

To run this project follow these steps:

1. Clone the Repository

```bash
  git clone https://github.com/Blaster1111/clinikkInternTask.git
  cd clinikkInternTask
```

2. Install Backend Dependencies

```bash
  npm install
``` 

3. Setup .env Environment Variables

`MONGO_DB_URI = mongodb+srv://<username>:<password>@cluster0.mongodb.net/clinikkTV?retryWrites=true&w=majority`


4. Run the Backend

```bash
  npm run dev
``` 
 
Now the server will start working on localhost:3000 you can open that on browser and see.



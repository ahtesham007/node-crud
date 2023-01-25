In this round your task will be to write a small and secure api (REST or graphQL) that can return the test.json contents. Posible routes could be to get objects by ID, category, tags or proximity to coordinates(latitude/longitude) Update the object with a video. Add another object with a new ID.

The API should be able to handle: POST, GET, PUT, DELETE

You do not need to create a DB. Saving JSON files on the hdd is enough. (if you want to you are free to create a DB too) If you need more Testdata, you can create it based on the test.json. The content of the testdata is not important, you can just change ID, Title etc.

Please document your work. Commit and push regularly. The task is not about the perfect code, it is about your approach towards it and the thoughts you put into the task should be visible.

Context: This API will communicate with a content management system(CMS) which is used by museum employees. the employees will handle all their digital content via this CMS. They will for example change descriptions, add new videos or images of existing objects and also add entirely new objects which have to get a new ID in the system. They will search in the CMS for objects based on the name or they want to see every object in an area or just a list of all objects that they have in the system.

Hosting a working api and sharing the link will be a plus.

---

## Dependencies

NodeJS, Express and MongoDB


---

## 🛠️ Installation Steps

Star and Fork the Repo 🌟 and this will keep us motivated.

1. Clone the repository

```bash
git clone https://github.com/DanMarten/Techround220.git
```

2. Change the working directory

```bash
cd Techround220
```

3. Install dependencies

```bash
npm install
```

4. Run the app

```bash
npm start
```

## Important Note

Add .env file with MongoDB URL & port

Analyzed the data how this can be formed in more improved way



## Missing Features


- Request body validation
- JWT token for security
- Redis to improve request execution time
- Logger
- Test scripts


## Task Finished
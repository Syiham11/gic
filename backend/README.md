#this backend use language nodejs and use lib

- body-parser
- express
- mysql
- cors

#struktur backend

- folder config this use config database
- folder controller this use logic
- folder model this use query
- folder route this use route endpoint API

#List api

- http://localhost:3000/kontaks (method:get)
- http://localhost:3000/kontaks/1 (method:get by id)
- http://localhost:3000/kontaks/1 (method:put)
- http://localhost:3000/delete/1 (method:delete)
- http://localhost:3000/kontaks (method:post)

- example post { "name":"jakarta", "email":"budi@mail.com", "tlp":"08382233030" }

#Step Run Backend
import db,
setting db in folder config
npm install
node server.js or nodemon server.js

## Cryptolytics :: Backend

> ### [Curl docs](https://curl.haxx.se/docs/httpscripting.html)

```sh
curl localhost:3000/actuator/info
curl localhost:3000/actuator/metrics
curl localhost:3000/actuator/health
```

```sh
curl -v -X POST localhost:3000/api/signup -H 'Content-Type: application/json' \
    -d '{"email":"test@gmail.com", "username":"test", "password":"secret"}'
```

```sh
curl -v -X POST localhost:3000/api/login -H 'Content-Type: application/json' \
    -d '{"email":"test@gmail.com", "password":"secret"}'
```

```sh
curl -v localhost:3000/api/me -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3R1c2VyMkB0ZXN0LmRiIiwidXNlcklkIjoiNWU0YWIwMTNmYjAzMmI0NzEyOWViMzkzIiwiaWF0IjoxNTgxOTU0MjE2LCJleHAiOjE1ODE5NTc4MTZ9.u7tKe1vddkuPmURmF8Jgr6duX2wkuoCWoPUQMDgj5Ms'
```

> ### [Docker docs](https://docs.docker.com/)

- [docker installation guide](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
- [docker-compose installation guide](https://docs.docker.com/compose/install/)

```sh
sudo docker exec -it backend_db_1 mongo -u admin -p secret cryptolytics
```

> ### [Mongo docs](https://docs.mongodb.com/manual/)

```sh
> db
test-database

> use test-database
switched to db test-database

> show collections
test-collection

> db.test-collection.find().pretty()
{
	"_id" : ObjectId("5e49a489e157fc74dbee014b"),
	"username" : "test",
	"email" : "test@gmail.com",
	"password" : "$2a$12$rHDpKlywuTgpAE60Yus8sOkBUQlaocjrGtd4ZxY4gI.9pdMeIn//G",
	"createdAt" : ISODate("2020-02-16T20:22:33.778Z"),
	"updatedAt" : ISODate("2020-02-16T20:22:33.778Z"),
	"__v" : 0
}
> 
```

### Useful commands

#### Kill active process on a port

```sh
sudo kill -9 $(sudo lsof -t -i:3000)
```

#### Git

```sh
git pull --rebase origin develop
```

```sh
git push origin branch_name
```

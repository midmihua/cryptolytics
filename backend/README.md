## Cryptolytics > Backend

### TBD


> ### [Curl docs](https://curl.haxx.se/docs/httpscripting.html)

```sh
curl localhost:3000/api/login
```

```sh
curl -v -X POST localhost:3000/login -H 'Content-Type: application/json' \
    -d '{"email":"test@gmail.com", "name":"test", "password":"secret", "passwordConfirmation":"secret"}'
```

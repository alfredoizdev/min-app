# Next js my shop

We need run our database

```
docker-compose up -d
```

- -d mean **detached**

- Mongodb URL Local

## seeting variables env

```
MONGO_URL=mongodb://localhost:27017/shop
POST=8000
```

- Install package

```
npm install
npm run dev
```

## fill the database with data test

call

```
http://locahos:8000/api/seed
```

## demo of this app
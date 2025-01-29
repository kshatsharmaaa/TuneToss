# Steps

## -1 defining the problem

Saas platform
use cases : college groups / offices, youtube stream
tech used : nextjs, tailwind, shadCN, postgres + prisma
things to learn: youtube api, spotify api, regex, schemas

## 0 structure of the app

## 1 initializing a next app

npx create-next-app@latest TuneToss
npm run dev

## 2 authentication

goto to google nextauth js
npm install next-auth
do the routing logic using app router
api folder

## 3 schema design

User, Active Stream, upvotes
npm install prisma
npx init prisma
docker run -p 5432:5432 -e POSTGRES_PASSWORD=randompassword postgres
// create schema, mograte your db, create your client
npx prisma migrate dev

## 4 writing the backend

## 5 writing the frontend

## 6 polishes

## 7 deployment

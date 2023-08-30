# build stage
FROM node:18.0-alpine3.14

WORKDIR /app

COPY package.json .

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install

COPY . .

RUN npm run build

EXPOSE 9527

CMD ["npm", "run" "start"]

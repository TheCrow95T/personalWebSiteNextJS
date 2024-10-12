FROM node:20.18-alpine

COPY . /app/

WORKDIR /app

RUN npm install
RUN npm run build

CMD ["npm", "run","start"]

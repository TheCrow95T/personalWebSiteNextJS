FROM node:20.18-alpine

WORKDIR /app

# Copy package.jsons for installing dependency
COPY package.json package-lock.json .

RUN npm install
RUN npm run build

# Copy the rest of the files
COPY . /app/

# set ownership and permission
RUN chown -R node:node /app

# switch to node user
USER node

CMD ["npm", "run","start"]

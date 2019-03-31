FROM node:alpine

RUN mkdir -p /usr/src/osm
WORKDIR /usr/src/osm

COPY package.json package-lock.json ./
RUN npm install

ENV NODE_ENV production

COPY . .
RUN npm run build

CMD ["node", "src/server.js"]

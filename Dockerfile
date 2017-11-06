FROM node:alpine

RUN mkdir -p /usr/src/osm
WORKDIR /usr/src/osm

COPY package.json .
RUN npm install -q

ENV NODE_ENV production

COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=0 /usr/src/osm/dist /usr/share/nginx/html

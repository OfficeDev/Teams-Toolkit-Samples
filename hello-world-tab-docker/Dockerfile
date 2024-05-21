FROM node:18.18.0 AS development

WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app/

CMD ["npm", "start"]

FROM development AS build
RUN npm run build

FROM nginx:1.21.3-alpine AS production
COPY --from=build /app/build /usr/share/nginx/html

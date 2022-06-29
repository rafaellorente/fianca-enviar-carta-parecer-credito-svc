FROM node:16-alpine As build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm ci

COPY . .

RUN npm run build

FROM build as development

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist ./dist

CMD ["node", "dist/main"]

FROM build as production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
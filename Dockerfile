FROM registry.redhat.io/rhel8/nodejs-10:latest

USER root

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

RUN chown -R 1001:1001 /app

USER 1001

CMD ["npm", "run", "node-app"]

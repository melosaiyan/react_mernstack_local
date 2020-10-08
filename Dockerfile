# For use with Openshift 3.11
FROM registry.access.redhat.com/rhscl/nodejs-10-rhel7

USER root

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

RUN chown -R 1001:1001 /app

USER 1001

CMD ["npm", "run", "node-app"]

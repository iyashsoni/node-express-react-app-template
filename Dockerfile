FROM registry.access.redhat.com/ubi8/nodejs-16:latest
USER 0

WORKDIR /cos-usage-prediction-ui
COPY ./client/src ./client/src
COPY ./client/public ./client/public
COPY ./client/package.json ./client/

WORKDIR /cos-usage-prediction-ui/client
RUN npm install
RUN npm run build

WORKDIR /cos-usage-prediction-ui
COPY ./client/build ./client/build
COPY ./data ./data
COPY ./index.js ./index.js
COPY ./package.json ./package.json

RUN npm install
RUN echo "RUNNING BUILD"
EXPOSE 8080
RUN chown -R 1001:0 /cos-usage-prediction-ui

CMD ["nodemon", "index.js"]
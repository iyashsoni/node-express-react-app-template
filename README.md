# cos-usage-prediction-ui

This is the frontend of the prediction engine for COS usage.

# how to run?

### only server

This will start the server and serve the static files generated under `/client`
Command:

1. `npm i` (skip if already done)
2. `npm run build`
3. `npm run start`
4. goto: [link](http://localhost:2109)

### client and server in parallel

1. start the server as shown above and in a new terminal do the following
2. `cd client`
3. `npm i` (skip if already done)
4. `npm start`

with this, you can develop and test both client & server together

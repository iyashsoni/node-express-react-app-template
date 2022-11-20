# node-express-react-app-template

This is template for node-express-react web app with approriate wiring / proxying

# how to run?

### only server

This will start the server and serve the static files generated under `/client`
Command:

1. `npm i` (skip if already done)
2. `npm run build`
3. `npm run start`
4. goto: [link](http://localhost:8080)

### client and server in parallel

1. start the server as shown above and in a new terminal do the following
2. `cd client`
3. `npm i` (skip if already done)
4. `npm start`

with this, you can develop and test both client & server together

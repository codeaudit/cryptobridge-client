// Connect to and handle data from web3 clients
const Web3 = require('web3');

// Load a list of connections to web3 clients
function connectToClients(hosts, cb, clients=[]) {
  if (hosts.length == 0) { cb(null, clients); }
  else {
    try {
      const host = hosts.pop();
      console.log('host', host)
      const web3 = new Web3(new Web3.providers.HttpProvider(host));
      clients.push(web3);
      console.log('clients.length', clients.length)
      connectToClients(hosts, cb, clients);
    } catch (err) {
      cb(err);
    }
  }
}
exports.connectToClients = connectToClients;

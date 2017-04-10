const client = require('./connection.js').elasticClient;

client.count({index: 'gov', type: 'constituencies'});
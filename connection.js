// establish connection with elastic search
const elasticsearch = require('elasticsearch');
const elasticClient = new elasticsearch.Client({
  host: 'localhost:9200',
  httpAuth: 'elastic:changeme', // local elasticsearch server has x-pack auth enabled
  log: 'trace'
});

//validate server connection
elasticClient.ping({
  requestTimeout: 30000,
}, function(error) {
  if (error) {
    console.error('elasticsearch cluster is down');
  } else {
    console.log('elasticsearch up and running');
  }
});

module.exports = {
  elasticClient: elasticClient
};
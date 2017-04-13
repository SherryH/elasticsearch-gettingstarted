// https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/12.1/api-reference.html#api-search
// more examples on search: https://www.sitepoint.com/search-engine-node-elasticsearch/

const client = require('./connection.js').elasticClient;

client.search({
  index: 'gov',
  type: 'constituencies',
  q: 'ConstituencyName:Aldershot'
}, function (error, response) {
  console.log('search res', response);
});

client.search({
  index: 'gov',
  body: {
    query: {
      match: {ConstituencyName: 'Ipswich'}
    }
  }
}, function (err, res) {
  console.log('search res with Query DSL\n', res);
});
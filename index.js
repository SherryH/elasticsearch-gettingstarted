// First, index data: data.json from SitePoint and constituency.json from Compose
const client = require('./connection.js').elasticClient;

//check connection health
client.cluster.health({}, function(err, res, status) {
  console.log("client health", res);
});

// import and index the data
// each index created has specific setting associated e.g. no. shards and no. replicas
// https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-index
// https://www.elastic.co/guide/en/elasticsearch/reference/current/indices.html

//NOTE: Document> index API does not create a new index, it updates JSON in a specific index
//Indices> Create API creates a new index
client.indices.create({
  index: 'gov'
}, function(err, res){
  if (err) {
    console.error('ERROR creating index', err);
  } else {
    console.log('index created', res);
  }
});


// constituencies.json

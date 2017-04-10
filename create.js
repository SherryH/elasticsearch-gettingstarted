const client = require('./connection.js').elasticClient;

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
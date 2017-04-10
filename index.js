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
// call create.js to create index
// > node create


// constituencies.json
//add 1 data into the index
// client.index({
//   index: 'gov',
//   type: 'constituencies',
//   id: '1',
//   body: {
//     "PANO": 7,
//     "ConstituencyName": "Aldershot",
//     "ConstituencyID": "E14000530",
//     "ConstituencyType": "Borough",
//     "Electorate": 72430,
//     "ValidVotes": 46191,
//     "field7": "",
//     "RegionID": "E12000008",
//     "County": "Hampshire",
//     "Region": "South East",
//     "Country": "England"
//   }
// });


//check the num of documents in the index
//> node info

// bulk input data into the index
//> node constituencies.js


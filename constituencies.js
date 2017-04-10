const client = require('./connection.js').elasticClient;

// read the data from the json file into body[]
// the body has a structure of
// body: [
//     // action description
//     { index:  { _index: 'giv', _type: 'constituencies', _id: 1 } },
//      // the document to index
//     { "ConstituencyName": "Aldershot", "ConstituencyID": "E14000530" ... }
// ];

const inputFile = require('./data/constituencies.json');
//console.log('isArray?', Array.isArray(inputFile)); the inputFile is an Array
const body = [];
for (var data of inputFile) {
  body.push({
    index:  { _index: 'gov', _type: 'constituencies', _id: data.PANO }
  }, data);
}
// call the bulk({body:[]},callback) to pass data to the index
client.bulk({
  body,
}, function(err,res) {
  console.log('finish bulk upload', res);
});

// const bulkDelete = () => {

// };
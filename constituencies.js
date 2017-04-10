const client = require('./connection.js').elasticClient;

// read the data from the json file into body[]
// the body has a structure of
// body: [
//     // action description
//     { index:  { _index: 'gov', _type: 'constituencies', _id: 1 } },
//      // the document to index
//     { "ConstituencyName": "Aldershot", "ConstituencyID": "E14000530" ... }
// ];

const inputFile = require('./data/constituencies.json');
//console.log('isArray?', Array.isArray(inputFile)); the inputFile is an Array
const body = [];


const bulkCreate = (callback) => {
  for (var data of inputFile) {
    body.push({
      index:  { _index: 'gov', _type: 'constituencies', _id: data.PANO }
    }, data);
  }
  callback(body);
};

const bulkDelete = (callback) => {
  inputFile.forEach((input) => {
    body.push({
      delete: { _index: 'gov', _type: 'constituencies', _id: input.PANO }
    });
  });
  callback(body);
};

// call the bulk({body:[]},callback) to pass data to the index
const bulkActionCallback = (body) => {
  client.bulk({
    body,
  }, function(err,res) {
    console.log('finish bulk action', res);
  });
};

bulkCreate(bulkActionCallback);
bulkDelete(bulkActionCallback);
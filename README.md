# ElasticSearch - Getting Started
This repository contains files related to the Elastic Search tutorial from [SitePoint](https://www.sitepoint.com/search-engine-node-elasticsearch/) and [Compose](https://www.compose.com/articles/getting-started-with-elasticsearch-and-node/)

* Start the local Elastic Search server first before running the app. The server will be running on `localhost:9200`
* `npm run start:db`
* Start local Kibana. The server will be running on `localhost:5601`
* `npm run start:kibana`
* Login: `elastic/changeme`
* Run each of the files separately for importing, reading data. e.g. `node constituencies` for bulk import. `node search` for searching inside the index
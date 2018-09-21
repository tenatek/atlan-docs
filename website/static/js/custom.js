window.onload = function() {
  let runkit = RunKit.createNotebook({
    element: document.getElementById('runkit'),
    mode: 'endpoint',
    preamble:
      "const { MongoClient } = require('mongo-mock');\r\nconst Atlan = require('atlan');\r\n\r\nconst express = require(\"@runkit/runkit/express-endpoint/1.0.0\");\r\nconst app = express(exports);\r\n\r\napp.get('/', (req, res) => {\r\n  res.redirect('/api/city');\r\n});",
    source:
      "// declare your models\r\n\r\nconst city = {\r\n  schema: {\r\n    name: {\r\n      type: 'string',\r\n      required: true\r\n    },\r\n    population: {\r\n      type: 'number',\r\n      required: true\r\n    }\r\n  }\r\n};\r\n\r\n// initialize Atlan with your MongoDB connection\r\n\r\nconst db = await MongoClient.connect('mongodb://localhost:27017/geo');\r\nconst atlan = new Atlan(db, { city });\r\n\r\n// add resources with the server-side methods \r\n\r\nawait atlan.create('city', {\r\n  name: 'New York City',\r\n  population: 8500000\r\n});\r\n\r\n// plug into your ExpressJS app\r\n\r\nconst api = atlan.api();\r\napp.use('/api', api);\r\napp.listen();"
  });
  runkit.getShareableURL(url => {
    console.log(url);
    document.getElementById('tryLive').setAttribute('href', url);
  });
};

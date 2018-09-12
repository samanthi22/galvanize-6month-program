{"filter":false,"title":"user.js","tooltip":"/Associations/models/user.js","undoManager":{"mark":44,"position":44,"stack":[[{"start":{"row":0,"column":0},"end":{"row":12,"column":46},"action":"insert","lines":["// USER","var userSchema = new mongoose.Schema({","    email: String,","    name: String,","    posts: [","        {","        type: mongoose.Schema.Types.ObjectId, // object id's","        ref: \"Post\"","        }","    ]","});","","var User = mongoose.model(\"User\", userSchema);"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":3}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["var mongoose = require(\"mongoose\");",""],"id":4}],[{"start":{"row":15,"column":46},"end":{"row":16,"column":0},"action":"insert","lines":["",""],"id":5}],[{"start":{"row":16,"column":0},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":6}],[{"start":{"row":17,"column":0},"end":{"row":17,"column":1},"action":"insert","lines":[","],"id":7}],[{"start":{"row":17,"column":1},"end":{"row":17,"column":2},"action":"insert","lines":["p"],"id":8}],[{"start":{"row":17,"column":2},"end":{"row":17,"column":3},"action":"insert","lines":["d"],"id":9}],[{"start":{"row":17,"column":3},"end":{"row":17,"column":4},"action":"insert","lines":["e"],"id":10}],[{"start":{"row":17,"column":3},"end":{"row":17,"column":4},"action":"remove","lines":["e"],"id":11}],[{"start":{"row":17,"column":2},"end":{"row":17,"column":3},"action":"remove","lines":["d"],"id":12}],[{"start":{"row":17,"column":1},"end":{"row":17,"column":2},"action":"remove","lines":["p"],"id":13}],[{"start":{"row":17,"column":0},"end":{"row":17,"column":1},"action":"remove","lines":[","],"id":14}],[{"start":{"row":17,"column":0},"end":{"row":17,"column":1},"action":"insert","lines":["m"],"id":15}],[{"start":{"row":17,"column":1},"end":{"row":17,"column":2},"action":"insert","lines":["o"],"id":16}],[{"start":{"row":17,"column":2},"end":{"row":17,"column":3},"action":"insert","lines":["d"],"id":17}],[{"start":{"row":17,"column":3},"end":{"row":17,"column":4},"action":"insert","lines":["u"],"id":18}],[{"start":{"row":17,"column":4},"end":{"row":17,"column":5},"action":"insert","lines":["l"],"id":19}],[{"start":{"row":17,"column":5},"end":{"row":17,"column":6},"action":"insert","lines":["e"],"id":20}],[{"start":{"row":17,"column":6},"end":{"row":17,"column":7},"action":"insert","lines":["."],"id":21}],[{"start":{"row":17,"column":7},"end":{"row":17,"column":8},"action":"insert","lines":["e"],"id":22}],[{"start":{"row":17,"column":8},"end":{"row":17,"column":9},"action":"insert","lines":["x"],"id":23}],[{"start":{"row":17,"column":9},"end":{"row":17,"column":10},"action":"insert","lines":["p"],"id":24}],[{"start":{"row":17,"column":10},"end":{"row":17,"column":11},"action":"insert","lines":["o"],"id":25}],[{"start":{"row":17,"column":11},"end":{"row":17,"column":12},"action":"insert","lines":["r"],"id":26}],[{"start":{"row":17,"column":12},"end":{"row":17,"column":13},"action":"insert","lines":["s"],"id":27},{"start":{"row":17,"column":13},"end":{"row":17,"column":14},"action":"insert","lines":["t"]}],[{"start":{"row":17,"column":14},"end":{"row":17,"column":15},"action":"insert","lines":[" "],"id":28}],[{"start":{"row":17,"column":14},"end":{"row":17,"column":15},"action":"remove","lines":[" "],"id":29}],[{"start":{"row":17,"column":13},"end":{"row":17,"column":14},"action":"remove","lines":["t"],"id":30}],[{"start":{"row":17,"column":12},"end":{"row":17,"column":13},"action":"remove","lines":["s"],"id":31}],[{"start":{"row":17,"column":12},"end":{"row":17,"column":13},"action":"insert","lines":["t"],"id":32}],[{"start":{"row":17,"column":13},"end":{"row":17,"column":14},"action":"insert","lines":["s"],"id":33}],[{"start":{"row":17,"column":14},"end":{"row":17,"column":15},"action":"insert","lines":[" "],"id":34}],[{"start":{"row":17,"column":15},"end":{"row":17,"column":16},"action":"insert","lines":["="],"id":35}],[{"start":{"row":17,"column":16},"end":{"row":17,"column":17},"action":"insert","lines":[" "],"id":36}],[{"start":{"row":17,"column":17},"end":{"row":17,"column":18},"action":"insert","lines":["u"],"id":37}],[{"start":{"row":17,"column":18},"end":{"row":17,"column":19},"action":"insert","lines":["s"],"id":38}],[{"start":{"row":17,"column":18},"end":{"row":17,"column":19},"action":"remove","lines":["s"],"id":39}],[{"start":{"row":17,"column":17},"end":{"row":17,"column":18},"action":"remove","lines":["u"],"id":40}],[{"start":{"row":17,"column":17},"end":{"row":17,"column":18},"action":"insert","lines":["U"],"id":41}],[{"start":{"row":17,"column":18},"end":{"row":17,"column":19},"action":"insert","lines":["s"],"id":42}],[{"start":{"row":17,"column":19},"end":{"row":17,"column":20},"action":"insert","lines":["e"],"id":43}],[{"start":{"row":17,"column":20},"end":{"row":17,"column":21},"action":"insert","lines":["r"],"id":44}],[{"start":{"row":17,"column":21},"end":{"row":17,"column":22},"action":"insert","lines":[";"],"id":45}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":17,"column":22},"end":{"row":17,"column":22},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1527519453481,"hash":"f80e495fa95e517c497c494867a0c113e6edfb9c"}
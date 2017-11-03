var express = require('express'),
	app = express(),
	http = require('http').Server(app),
	io = require('socket.io')(http),
	jsforce = require('jsforce'),
	bodyParser = require('body-parser'),
	opn = require('opn');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '50mb', extended: true,  parameterLimit: 1000000}));

app.use('/static', express.static(__dirname + '/public'))

app.get('/', function(req, res, next) {
	res.sendFile(__dirname + '/index.html');
});

// app.post('/sendToIot', function(req, res, next){
// 	console.log(JSON.stringify(req.body));
// 	//var body = JSON.parse(req.body);
// 	//console.log('prased body: ' + body);
// 	if(!req.body.eventName){
// 		console.log('no body, error');
// 		res.status(400).send({error:'test'});
// 	} else {
// 		console.log('request has body');
// 	console.log('hit my endpoint with name: ' + JSON.stringify(req.body.eventName) + ' and payload: ' + JSON.stringify(req.body.eventPayload));
// 	/*sfConn.sobject(req.body.eventName).create(req.body.eventPayload, function(err, result){
// 						if(err) return console.error(err);
// 						console.log('checkin event sent to IoT Cloud');
// 						});*/
//
// 	res.status(200).end();
//  }
// });
//
// io.on('connection', function(socket){
// 	console.log('a user connected');
// 	rc522(function(rfidSerialNumber){
// 		if(rfidSerialNumber){
// 			sfConn.query("SELECT Name, Id from Contact WHERE rfid__c =\'" + rfidSerialNumber + "\' ORDER BY LastModifiedDate DESC", function(err, result){
// 				if(err) { io.emit('rfid', ''); return console.error(err);}
// 				console.log('ths is the rfid: ' + rfidSerialNumber);
// 				console.log('return salesforce respone: ' + JSON.stringify(result));
// 				if(result && result.records && result.records.length !== 0 && result.records[0].Name) {
// 					io.emit('rfid', result.records[0].Name);
// 					sfConn.sobject('checkin__e').create({
// 						location__c: 'restaurant',
// 						userid__c:result.records[0].Id,
// 						time__c: new Date().toISOString()
// 						}, function(err, result){
// 						if(err) return console.error(err);
// 						console.log('checkin event sent to IoT Cloud');
// 						});
// 				}
//
// 				else
// 					io.emit('rfid', null);
// 			});
//
// 			//send IoT cloud request here
// 		}
//
// 	});
// });

http.listen(3000, function() {
console.log('listening on port 3000');
opn('localhost:3000');
});

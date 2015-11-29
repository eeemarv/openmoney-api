

// Access token post
//Access Token Post

var request = {};
request.cors_token = args.access_token_request.value.cors_token;
request.proof_token = args.access_token_request.value.proof_token;
request.publicKey = args.access_token_request.value.publicKey;

var MasterController = require('../../MasterController');
MasterController.accessTokenPost(request, function (err, result) {
    if (err) {
        // throw error
        var examples = {};
        examples['application/json'] = err;

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    } else {
        var examples = {};
        examples['application/json'] = result;

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    }
});


//authorizePost

var request = {};
request.cors_token = args.authorize_request.value.cors_token;
request.publicKey = args.authorize_request.value.publicKey;

var MasterController = require('../../MasterController');
MasterController.authorizePost(request, function (err, result) {
    if (err) {
        // throw error
        var examples = {};
        examples['application/json'] = err;

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    } else {
        var examples = {};
        examples['application/json'] = result;

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    }
});


//registerPost

var MasterController = require('../../MasterController');

var request = {};
request.username = args.register_request.value.username;
request.publicKey = args.register_request.value.publicKey;
if( typeof args.register_request.value.email != 'undefined') {
    request.email = args.register_request.value.email;
}
if( typeof args.register_request.value.email_notifications != 'undefined') {
    request.email_notifications = args.register_request.value.email_notifications;
}

MasterController.registerPost(request, function(err, result){
    if(err) {
        // throw error
        var examples = {};
        examples['application/json'] = err;

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    } else {
        var examples = {};
        examples['application/json'] = result;

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    }
})


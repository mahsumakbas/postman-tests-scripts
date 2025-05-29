
// Postman Extended Assertions
// This file contains custom assertions for Postman responses extended from Chai library

//------------------------------ postmanRequest => Property ------------------------------
expect(res).to.be.a.postmanResponse;
expect(res).to.not.be.a.postmanResponse;

//------------------------------ postmanResponse => Property ------------------------------
expect(res).to.be.a.postmanResponse;
expect(res).to.not.be.a.postmanResponse;

//------------------------------ postmanRequestOrResponse => Property ------------------------------
expect(res).to.be.a.postmanRequestOrResponse;
expect(res).to.not.be.a.postmanRequestOrResponse;

//------------------------------ statusCodeClass => Method ------------------------------
expect(res).to.have.statusCodeClass(1);
expect(res).to.have.statusCodeClass(2);

expect(res).to.not.have.statusCodeClass(2);
expect(res).to.not.have.statusCodeClass(3);

//------------------------------ error => Property ------------------------------
expect(res).to.be.error;
expect(res).to.not.be.error;

//------------------------------ statusCode => Method ------------------------------
expect(res).to.have.statusCode(102);
expect(res).to.have.statusCode(202);

expect(res).to.not.have.statusCode(101);
expect(res).to.not.have.statusCode(201);

//------------------------------ statusReason => Method ------------------------------

expect(res).to.have.statusReason('OK');

expect(res).to.have.statusReason('No Content');

expect(res).to.have.statusReason('Bad Request');

expect(res).to.have.statusReason('Unauthorized');

expect(res).to.have.statusReason('Forbidden');

expect(res).to.have.statusReason('Not Found');

expect(res).to.have.statusReason('Not Acceptable');

expect(res).to.have.statusReason('Too Many Requests');

expect(res).to.not.have.statusReason('No Content');

expect(res).to.not.have.statusReason('Bad Request');

expect(res).to.not.have.statusReason('Unauthorized');

expect(res).to.not.have.statusReason('Forbidden');

expect(res).to.not.have.statusReason('Not Found');

expect(res).to.not.have.statusReason('Not Acceptable');

expect(res).to.not.have.statusReason('Too Many Requests');

expect(res).to.not.have.statusReason('OK');

//------------------------------ ok => Property ------------------------------
expect(res).to.be.ok;
expect(res).to.not.be.ok;

//------------------------------ status => Method ------------------------------
expect(res).to.have.status('OK');
expect(res).to.have.status('No Content');
expect(res).to.have.status('Bad Request');
expect(res).to.have.status('Unauthorized');
expect(res).to.have.status('Forbidden');
expect(res).to.have.status('Not Found');
expect(res).to.have.status('Not Acceptable');
expect(res).to.have.status('Too Many Requests');

expect(res).to.have.status(200);
expect(res).to.have.status(204);
expect(res).to.have.status(400);
expect(res).to.have.status(401);
expect(res).to.have.status(403);
expect(res).to.have.status(404);
expect(res).to.have.status(406);
expect(res).to.have.status(429);

expect(res).to.not.have.status('No Content');
expect(res).to.not.have.status('Bad Request');
expect(res).to.not.have.status('Unauthorized');
expect(res).to.not.have.status('Forbidden');
expect(res).to.not.have.status('Not Found');
expect(res).to.not.have.status('Not Acceptable');
expect(res).to.not.have.status('Too Many Requests');
expect(res).to.not.have.status('OK');

//------------------------------ header => Method ------------------------------
expect(res).to.have.header('Content-Type', 'application/json; charset=utf-8');
expect(res).to.not.have.header('Content-Type', 'application/xml');
expect(res).to.not.have.header('Cache-Control');

//------------------------------ withBody => Property ------------------------------
expect(res).to.be.withBody;
expect(res).to.not.be.withBody;

//------------------------------ json => Property ------------------------------
expect(res).to.be.json;
expect(res).to.not.be.json;

//------------------------------ body => Property ------------------------------
expect(res).to.be.body;
expect(res).to.not.be.body;

//------------------------------ responseTime => addChainableMethod ------------------------------
expect(res).to.have.responseTime(123);
expect(res).to.have.responseTime.above(100);
expect(res).to.have.responseTime.below(150);
expect(res).to.have.responseTime.within(100, 150);
expect(res).to.not.have.responseTime(123);

//------------------------------ responseSize => addChainableMethod ------------------------------
expect(res).to.have.responseSize(45);
expect(res).to.have.responseSize.above(30);
expect(res).to.have.responseSize.below(100);
expect(res).to.have.responseSize.within(30, 100);
expect(res).to.not.have.responseSize(123);

//------------------------------ jsonSchema => Method ------------------------------
var schema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    required: ['alpha'],
    additionalProperties: false,
    properties: {
        alpha: { type: 'boolean' },
        beta: { type: 'boolean' }
    }
};

expect({ alpha: true }).to.have.jsonSchema(schema);
expect({ alpha: 123 }).to.not.have.jsonSchema(schema);

//------------------------------ status code => class properties ------------------------------
expect(res).to.be.info;
expect(res).to.be.ok;
expect(res).to.be.success;
expect(res).to.be.redirection;
expect(res).to.be.clientError;
expect(res).to.be.serverError;
expect(res).to.be.error;
expect(res).to.not.be.ok;
expect(res).to.not.be.error;
expect(res).to.not.be.success;
expect(res).to.not.be.info;
expect(res).to.not.be.redirection;
expect(res).to.not.be.clientError;
expect(res).to.not.be.serverError;
expect(res).to.be.accepted;
expect(res).to.be.withoutContent;
expect(res).to.be.unauthorized;
expect(res).to.be.forbidden;
expect(res).to.be.notFound;
expect(res).to.not.be.accepted;
expect(res).to.not.be.unauthorized;
expect(res).to.not.be.rateLimited;
expect(res).to.not.be.forbidden;
expect(res).to.not.be.notFound;

//------------------------------ jsonBody => Property ------------------------------
expect(res).to.have.jsonBody;
expect(res).to.not.have.jsonBody;
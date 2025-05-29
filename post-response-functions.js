/*
suppose the response body is a JSON object like this:

{
  "status": "success",
  "message": "Data retrieved successfully",
  "employees": [
    {"firstName": "John", "lastName": "Doe"},
    {"firstName": "Anna", "lastName": "Smith"},
    {"firstName": "Peter", "lastName": "Jones"}
  ],
  "isActive": true,
  "token": "abc123xyz",
  "count": 15,
  "timestamp": "2023-10-01T12:00:00Z"
  "version": "1.0.0"
}
*/

//pm.expect() style assertions
pm.test("pm.expect() style assertions", function () {
    var respJson = pm.response.json();
    pm.expect(pm.response.code).to.equal(200);
    pm.expect(respJson).to.have.property('status').that.is.a('string');
    pm.expect(respJson).to.have.property('status').that.equals('success');
    pm.expect(respJson).to.have.property('status', 'success');
    pm.expect(respJson).to.include.keys('status', 'message', 'employees', 'isActive', 'token', 'count', 'timestamp', 'version');
    pm.expect(respJson).to.include.all.keys('status', 'message', 'employees', 'isActive', 'token', 'count', 'timestamp', 'version');
    pm.expect(respJson).to.have.property('count').that.is.a('number');
    pm.expect(respJson).to.have.property('timestamp').that.is.a('string');

    pm.expect(respJson.token).to.be.a('string');
    pm.expect(respJson.token).to.match(/^[a-zA-Z0-9]+$/);   // matches alphanumeric characters
    pm.expect(respJson.token).to.have.lengthOf(64);

    pm.expect(respJson.employees[1].firstName).to.equal('Anna');
    pm.expect(respJson.employees).to.have.lengthOf(3);          // you can use .lengthOf as well on array objects
    pm.expect(respJson.employees.length).to.be.greaterThan(0);  // or you can use .length directly on response fields
    pm.expect(respJson.employees.length).to.equal(3);
    pm.expect(respJson.employees).to.be.an('array');
    pm.expect(respJson.employees.length).to.be.lessThan(5);
    pm.expect(respJson.employees.length).to.be.lessThanOrEqual(5);

    pm.expect(respJson.count).to.be.above(10);               // greater than
    pm.expect(respJson.count).to.be.below(100);              // less than
    pm.expect(respJson.count).to.be.at.least(10);            // >= 10
    pm.expect(respJson.count).to.be.at.most(100);            // <= 100
    pm.expect(respJson.count).to.be.within(10, 100);         // inclusive range

    pm.expect(respJson.isActive).to.be.true;                    // strictly true
    pm.expect(respJson.isActive).to.not.be.false;
    pm.expect(respJson.isActive).to.be.ok;                      // truthy(NOT false, 0, "", null, undefined, NaN)
    pm.expect(respJson.isActive).to.not.be.null;

    pm.expect(respJson.message).to.include('successfully');  // substring match

});


//pm.response style assertions
pm.test("pm.response style assertions", function () {
    pm.response.to.have.status(200);
    pm.response.to.have.statusCode(200);
    pm.response.to.be.success;         // status code 2xx
    pm.response.to.be.successful;      // status code 2xx
    pm.response.to.be.ok;             // status code 2xx

    pm.response.to.have.statusMessage("OK");
    pm.response.to.have.jsonBody();

    pm.response.to.be.json;
    pm.response.to.have.header("Content-Type", "application/json");
    pm.response.to.have.body;
});



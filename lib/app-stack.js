const cdk = require('aws-cdk-lib');
const lambda = require('aws-cdk-lib/aws-lambda');

class AppStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // defines an AWS Lambda resource
    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_14_X, // execution environment
      code: lambda.Code.fromAsset('lambdas'), // code loaded from "lambda" directory
      handler: 'hello.handler', // file is "hello", function is "handler"
    });
  }
}

module.exports = { AppStack };

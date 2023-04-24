import * as path from "node:path";
import * as apigw from "aws-cdk-lib/aws-apigateway";
import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";

export class CdkWorkshopStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // defines an AWS Lambda resource
    const hello = new NodejsFunction(this, "HelloFunction", {
      entry: path.resolve(__dirname, "..", "lambda", "hello.ts"),
    });

    // defines an API Gateway REST API
    new apigw.LambdaRestApi(this, "Endpoint", { handler: hello });
  }
}

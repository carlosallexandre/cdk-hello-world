import { APIGatewayEvent } from "aws-lambda";

export async function handler(event: APIGatewayEvent) {
  console.log("request:", JSON.stringify(event, undefined, 2));
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Good Night, CDK! You've hit ${event.path}\n`,
  };
}

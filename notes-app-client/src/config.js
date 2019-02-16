export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "node-app-serverless"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://6avq5oaj9c.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_WuLHEiUcR",
      APP_CLIENT_ID: "102slfr3j03rdf0oqroau758ne",
      IDENTITY_POOL_ID: "us-east-1:a5c024a1-0ecb-4615-8c36-88cf52320679"
    },
    social: {
      FB: "631482553965418"
    }
  };
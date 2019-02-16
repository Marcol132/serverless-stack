//IAM Config
accessKey: 'AKIAI552WRW6H42BSOJQ'
secretAccessKey: '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'


// Cognito Pool
PoolId: 'us-east-1_WuLHEiUcR'
PoolArn: 'arn:aws:cognito-idp:us-east-1:664790996352:userpool/us-east-1_WuLHEiUcR'

appClientId: '102slfr3j03rdf0oqroau758ne'

identityPoolId: 'us-east-1:a5c024a1-0ecb-4615-8c36-88cf52320679'

// first note id
'219996b0-3088-11e9-828f-2761d40ba4af'

// endpoints
POST - https://6avq5oaj9c.execute-api.us-east-1.amazonaws.com/prod/notes
GET - https://6avq5oaj9c.execute-api.us-east-1.amazonaws.com/prod/notes/{id}
GET - https://6avq5oaj9c.execute-api.us-east-1.amazonaws.com/prod/notes
PUT - https://6avq5oaj9c.execute-api.us-east-1.amazonaws.com/prod/notes/{id}
DELETE - https://6avq5oaj9c.execute-api.us-east-1.amazonaws.com/prod/notes/{id}

// api gateway Id
'6avq5oaj9c'


// To deploy to s3 bucket host help = https://serverless-stack.com/chapters/deploy-again.html
first: "run npm build"

second: "aws s3 sync build/ s3://YOUR_S3_DEPLOY_BUCKET_NAME --delete"
// --delete is to delete the previous file not on this update
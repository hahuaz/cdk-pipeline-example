## Resorces

https://aws.amazon.com/blogs/developer/cdk-pipelines-continuous-delivery-for-aws-cdk-applications/
https://docs.aws.amazon.com/cdk/v2/guide/cdk_pipeline.html

## Bootstrapping

Many AWS CDK stacks that you write will include assets: external files that are deployed with the stack, such as AWS Lambda functions or Docker images. The AWS CDK uploads these to an Amazon S3 bucket or other container so they are available to AWS CloudFormation during deployment. Deployment requires that these containers already exist in the account and region you are deploying into. Creating them is called bootstrapping. To bootstrap, issue:

- `cdk bootstrap aws://ACCOUNT-NUMBER/REGION --profile ADMIN-PROFILE ^ --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess`

## Deployment

- `cdk deploy --profile <your-profile> --context appName=<yourAppName> -c account=111111111 -c region=us-west-2` deploys the pipeline CloudFormation stack, which deploys your app stack.
  - Do not forget to commit your pipeline resources to CodeCommit before the deployment.
  - **<yourAppName>** should correspond the CodeCommit repository name.
- If branch is not provided pipeline will use "prod" branch by default. If you want to deploy feature branch provide additional `--context branch=<yourBranch>` flag.

## NOTES

- structure can be changed and we could hard code account and region per stage and deploy only that stak by specifiyng stack `cdk deploy DEV/*`
- even if pipeline stack is deleted/destroyed app stack will live
- do not forget to pass contexts to pipeline shelstep synth
- pipeline is selft mutated meaning that you just make changes and push but if you defining new context variable you have to make deploy again
- if you wanna use cdk watch first list all stacks and select your app stack then use the command `cdk watch <yourappstack> --profile <your-profile> --context appName=<yourAppName> -c account=111111111 -c region=us-west-2`

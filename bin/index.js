#!/usr/bin/env node

const cdk = require('aws-cdk-lib');
const { PipelineStack } = require('../lib/pipeline-stack');
const { getContextValues } = require('../lib/helpers');

const app = new cdk.App();
const { appName, branch, account, region } = getContextValues(app.node);

// throw if appName is not provided
if (!appName) throw new Error('appName is not provided!');

// throw if ACCOUNT or REGION is not provided
if (!account || !region)
  throw new Error('env variables ACCOUNT and REGION are not provided!');

/**
 * creates pipeline stack
 * id will be CloudFormation stack name for the pipeline
 */
new PipelineStack(app, `${appName}-${branch}-pipelineStack`, {
  env: {
    account,
    region,
  },
});

app.synth();

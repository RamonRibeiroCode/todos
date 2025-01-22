#!/bin/bash

echo 'yarn install' >> /home/ramon/nodejs-aws-codedeploy-pipeline/deploy.log 
yarn >> /home/ramon/nodejs-aws-codedeploy-pipeline/deploy.log

echo 'yarn build' >> /home/ramon/nodejs-aws-codedeploy-pipeline/deploy.log 
yarn build >> /home/ramon/nodejs-aws-codedeploy-pipeline/deploy.log
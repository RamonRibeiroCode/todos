#!/bin/bash

echo 'yarn install' >> /home/ramon/dev/todo/deploy.log 
yarn >> /home/ramon/dev/todo/deploy.log

echo 'yarn build' >> /home/ramon/dev/todo/deploy.log 
yarn build >> /home/ramon/dev/todo/deploy.log
#!/bin/bash

echo 'yarn install && yarn build' >> /home/ramon/todos/deploy.log 
cd /home/ramon/todos
yarn install && yarn build >> /home/ramon/todos/deploy.log


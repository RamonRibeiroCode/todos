#!/bin/bash

echo 'yarn install' >> /home/ramon/todos/deploy.log 
yarn >> /home/ramon/todos/deploy.log

echo 'yarn build' >> /home/ramon/todos/deploy.log 
yarn build >> /home/ramon/todos/deploy.log
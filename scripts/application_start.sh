#!/bin/bash

echo 'run application_start.sh: ' >> /home/ramon/todos/deploy.log

echo 'yarn start' >> /home/ramon/todos/deploy.log
yarn restart >> /home/ramon/todos/deploy.log
#!/bin/bash

echo 'run application_start.sh: ' >> /home/ramon/todos/deploy.log
cd /home/ramon/todos
yarn restart >> /home/ramon/todos/deploy.log
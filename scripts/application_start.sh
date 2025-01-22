#!/bin/bash

echo 'run application_start.sh: ' >> /home/ramon/todos/deploy.log
cd /home/ramon/todos
pm2 restart build/server.js >> /home/ramon/todos/deploy.log
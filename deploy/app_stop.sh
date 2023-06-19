#!/bin/bash
cd /home/ubuntu/myapp
pm2 delete ecosystem.config.js || true
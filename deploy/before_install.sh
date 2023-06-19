#!/bin/bash
if [ -d /home/ubuntu/myapp ]; then
    rm -rf /home/ubuntu/myapp
fi
mkdir -vp /home/ubuntu/myapp
#!/bin/bash
cd /home/kavia/workspace/code-generation/smoothnav-6878-6893/main_container_for_smoothnav
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


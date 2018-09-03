#!/bin/bash

npm run build
ssh ubuntu@aws "kill $(pgrep node); rm -r build/;"
scp -rp build ubuntu@aws:~/
ssh ubuntu@aws "screen -m -d serve -s build;"


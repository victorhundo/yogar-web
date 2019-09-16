#!/bin/bash
cd /app

npm install
ng serve --host 0.0.0.0 --disable-host-check --public-host=http://yogar.splab.ufcg.edu.br
tail -f /dev/null

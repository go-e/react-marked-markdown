ECHO "> Start transpiling ES2015"
ECHO ""
./node_modules/.bin/babel --plugins "transform-runtime" src --ignore __tests__ --out-dir ./dist
ECHO ""
ECHO "> Complete transpiling ES2015"

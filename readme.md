// install all node packages
npx lerna bootstrap

// how to add node package
npx lerna add redux --scope=kartonah-web
npx lerna add redux --scope=kartonah-common
npx lerna add redux --scope=kartonah-mobile

// delete all node_modules
npx lerna clean

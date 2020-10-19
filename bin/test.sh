#!/bin/bash
set -euxo pipefail

cd tests
rsync -r "$PWD"/unit/supporting/ /tmp
npm install && npm run unit_tests
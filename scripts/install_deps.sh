#!/usr/bin/env sh

set -xeu

pip install -r ./api/requirements.txt --no-cache-dir

EXTRA=./api/requirements-extra.txt

if [ -e $EXTRA ]; then
  pip install -r $EXTRA --no-cache-dir
fi

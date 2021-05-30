#!/usr/bin/env sh

set -xeu

if [ $1 = "lint" ]; then
  flake8 . --max-line-length 80
  isort . --check --profile black
  black . -l 80 --check
elif [ $1 = "fmt" ]; then
  isort . --profile black
  black . -l 80
elif [ $1 = "install" ]; then
  pip install \
    black \
    isort \
    flake8 \
    flake8-bugbear \
    flake8-comprehensions \
    flake8-executable
fi

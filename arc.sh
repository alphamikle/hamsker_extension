#!/bin/bash

INCLUDE=("icons" "js" "manifest.json")

rm ./hamsker.zip

cd ./dist || exit 1

zip -r ../hamsker.zip "${INCLUDE[@]}"

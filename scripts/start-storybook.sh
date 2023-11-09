#!/bin/bash

if [[ -n $1 ]]
then
    echo "STORYBOOK_DIRECTORY=$1"
    export STORYBOOK_DIRECTORY=$1
fi

npm run dev:start

#!/bin/sh

# grab the JSON from the github API and save it to a file named github.json
curl https://api.github.com/users/jshawl/starred?type=public > github.json
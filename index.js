import core from '@actions/core';
import fetch from 'node-fetch';

const image = core.getInput('image');
const server = core.getInput('deployment_server');
const secret = core.getInput('secret');
core.setSecret(secret);

fetch(server, {
  method: 'POST',
  headers: {
    'Authorization': secret,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    image
  })
})
    .then(() => {
      core.info("Deploy started")
    })
    .catch((error) => {
      core.setFailed(error)
    });

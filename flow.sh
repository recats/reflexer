#!/bin/bash
yarn add flow-typed --peer
./node_modules/.bin/flow-typed install styled-components@2
yarn flow

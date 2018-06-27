#!/bin/bash
yarn add flow-typed --peer
./node_modules/.bin/flow-typed install styled-components@3
yarn flow

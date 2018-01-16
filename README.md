# reflexer

[![Greenkeeper badge](https://badges.greenkeeper.io/stk-dmitry/reflexer.svg)](https://greenkeeper.io/)
[![npm](https://img.shields.io/npm/v/reflexer.svg)](https://www.npmjs.com/package/reflexer)
[![Build Status](https://travis-ci.org/stk-dmitry/reflexer.svg?branch=master)](https://travis-ci.org/stk-dmitry/reflexer)
![Recats Digital](https://img.shields.io/badge/recats-digital-1abc9c.svg?style=flat)

# Install
```sh
yarn add reflexer
npm install reflexer
```

## Grid
```js
import { Grid } from 'reflexer';

<Grid fluid?>
  grid reflexer
</Grid>
```

## Row
#### [Support params in Row](https://github.com/stk-dmitry/reflexer/blob/master/src/Row/const.js)

```js
import { Row } from 'reflexer';

<Row
  flexWrap={{ xs: *, sm: *, ... }}
  flexDirection={{ xs: *, sm: *, ... }}
  justifyContent={{ xs: *, sm: *, ... }}
  alignItems={{ xs: *, sm: *, md: *, ... }}
  alignContent={{ xs: *, sm: *, md: *, ... }}
>
  row reflexer
</Row>
```

## Col
```js
import { Col } from 'reflexer';

<Col
  basis={{ xs: 12, sm: 6 }}
  order={{ xs: 1, sm: 2, md: 3 }}
  offset={{ xs: 1, sm: 3 }}
>
  column reflexer
</Col>
```


## Theme
```js
import { ThemeProvider } from 'reflexer';
// or
import { ThemeProvider } from 'styled-components';

const theme = {
  reflexer: {
    gridFluid: *,
    rowGutter: *,
    colGutter: *,
  }
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
```


## Default params
```js
export const theme = {
  reflexer: {
    gridFluid: '2rem',
    rowGutter: '-0.5rem',
    colGutter: '0.5rem',
  },
};

export const sizeMedia = {
  xl: '75em', lg: '64em', md: '48em', sm: '30em', xs: 0,
};
```

## Flow
create in folder 'flow-typed' and in it file 'reflexer.js'
```
declare module 'reflexer' {  declare var exports: any;  }
```
and .flowconfig add
```
[ignore]
.*/node_modules/reflexer/.*
```

## TODO
- [ ] Test
- [ ] Coveralls
- [ ] Demo Stand

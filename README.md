
<img src="https://user-images.githubusercontent.com/9702154/44300665-9425a000-a313-11e8-8e75-1b26791f326f.png" width="200" />


[![Greenkeeper badge](https://badges.greenkeeper.io/stk-dmitry/reflexer.svg)](https://greenkeeper.io/)
[![npm](https://img.shields.io/npm/v/reflexer.svg)](https://www.npmjs.com/package/reflexer)
[![Build Status](https://travis-ci.org/stk-dmitry/reflexer.svg?branch=master)](https://travis-ci.org/stk-dmitry/reflexer)
![Recats Digital](https://img.shields.io/badge/recats-digital-1abc9c.svg?style=flat)
[![dependencies Status](https://david-dm.org/stk-dmitry/reflexer/status.svg)](https://david-dm.org/stk-dmitry/reflexer)
[![devDependencies Status](https://david-dm.org/stk-dmitry/reflexer/dev-status.svg)](https://david-dm.org/stk-dmitry/reflexer?type=dev)

# Install
```sh
yarn add reflexer@beta
npm install reflexer@beta
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

# <params>={{ xs: <value> }} || <params>="<value>"

<Row
  flexWrap={{ xs: * }}
  # or such an option flexWrap="wrap"
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

# <params>={{ xs: <value | 'auto'> }} || <params>="<value | 'auto'>"

<Col
  basis={{ xs: 12 }}
  # or such an option basis={12}
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
    gridFluid: '2rem',
    # or griudFluid: { xs: '2rem' }
    rowGutter: '-0.5rem',
    # or rowGutter: { xs: '-0.5rem', retina: '-1rem' }
    colGutter: '0.5rem',
    # or colGutter: { xs: '0.5rem', retina: '1rem', md: .... }
    column: 20,
    size: {
      xs: [{ value: 32, type: 'rem', media: 'min-width' }, { value: 72, type: 'rem', media: 'max-width' }],
      sm: { value: 32, type: 'rem', media: 'min-width' },
      neRetina: 72,
      retia: '(-webkit-min-device-pixel-ratio: 2),  (min-resolution: 192dpi)',
    },
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
    column: 12,
    size: {
      xl: 75,
      lg: 64,
      md: 48,
      sm: 30,
      xs: 0,
    },
  },
};
// sizes variants
{
  xs: [{ value: 32, type: 'rem', media: 'min-width' }, { value: 72, type: 'rem', media: 'max-width' }], // -> @media (min-width: 32rem) and (max-width: 72rem)
  sm: { value: 32, type: 'rem' /* optional and default 'em' */, media: 'min-width' /* optional and default 'min-width' */ },  // -> @media (min-width: 32rem)
  md: 72, // -> @media (min-width: 72em)
  retina: '(-webkit-min-device-pixel-ratio: 2),  (min-resolution: 192dpi)', // -> @media (-webkit-min-device-pixel-ratio: 2),  (min-resolution: 192dpi)
}
```

## Flow
create in folder 'flow-typed' and in it file 'reflexer.js'
```
declare module 'reflexer' {  declare module.exports: any;  }
```
and .flowconfig add
```
[ignore]
.*/node_modules/reflexer/.*
```

## TODO
- [ ] Test
- [ ] Coveralls
- [x] Demo Stand

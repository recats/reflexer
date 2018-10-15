<img src="https://user-images.githubusercontent.com/9702154/44400365-89f1e480-a553-11e8-9c02-09cb2c28b754.png" width="200" />

[![Greenkeeper badge](https://badges.greenkeeper.io/stk-dmitry/reflexer.svg)](https://greenkeeper.io/)
[![npm](https://img.shields.io/npm/v/reflexer.svg)](https://www.npmjs.com/package/reflexer)
[![Build Status](https://travis-ci.org/stk-dmitry/reflexer.svg?branch=master)](https://travis-ci.org/stk-dmitry/reflexer)
[![dependencies Status](https://david-dm.org/stk-dmitry/reflexer/status.svg)](https://david-dm.org/stk-dmitry/reflexer)
[![devDependencies Status](https://david-dm.org/stk-dmitry/reflexer/dev-status.svg)](https://david-dm.org/stk-dmitry/reflexer?type=dev)

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

### Media
```js
import { media } from 'reflexer';

const Container = styled.div`
  ${props => media(props, 'lg')`
    color: red;
  `}
  // @media (min-width: 64em) {
  //  .fbIKz {
  //    color: red;
  //  }
  // }
`;
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
      xs: [{ size: 32, unit: 'rem', querie: 'min-width' }, { size: 72, unit: 'rem', querie: 'max-width' }],
      sm: { size: 32, unit: 'rem', querie: 'min-width' },
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

## Custom Media Queries
```js
{
  column: 20,
  {
    xSmall: [{ size: 32, unit: 'rem', querie: 'min-width' }, { size: 72, unit: 'rem', querie: 'max-width' }], // -> @media (min-width: 32rem) and (max-width: 72rem)
    sm: { size: 32, unit: 'rem' /* optional and default 'em' */, media: 'min-width' /* optional and default 'min-width' */ },  // -> @media (min-width: 32rem)
    md: 72, // -> @media (min-width: 72em)
    retina: '(-webkit-min-device-pixel-ratio: 2),  (min-resolution: 192dpi)', // -> @media (-webkit-min-device-pixel-ratio: 2),  (min-resolution: 192dpi)
  }
}
// Usage
return (
 <Row justifyContent={{ xSmall: 19, retina: 10, sm: 15, md: 2 }} />
)
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
      xs: 0, # ‘xs’ is a minimum width that reflexer will allow. By default it’s set to zero. If it is set to 30, then min-width: 30em will be generated
    },
  },
};
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

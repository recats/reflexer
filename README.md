# reflexer

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
  flexWrap={{ xs: flexWrap.*, sm: flexWrap.*, md: flexWrap.*, lg: flexWrap.* }}
  flexDirection={{ xs: flexDirection.*, sm: flexDirection.*, md: flexDirection.*, lg: flexDirection.* }}
  justifyContent={{ xs: justifyContent.*, sm: justifyContent.*, md: justifyContent.*, lg: justifyContent.* }}
  alignItems={{ xs: alignItems.*, sm: alignItems.*, md: alignItems.*, lg: alignItems.* }}
  alignContent={{ xs: alignContent.*, sm: alignContent.*, md: alignContent.*, lg: alignContent.* }}
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
import { ThemeProvider } from 'styled-components';

const theme = {
  reflexer: {
    gridFluid: '2rem',
    rowGutter: '-0.5rem',
    colGutter: '0.5rem',
  }
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
```


## Default size
```js
export const sizeMedia = {
  xl: 75, lg: 64, md: 48, sm: 30, xs: 0,
};
```

## TODO
- [ ] Test
- [ ] Coveralls
- [ ] Demo Stand

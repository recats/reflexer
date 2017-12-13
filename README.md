# reFlexer

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
  gutter="2rem"
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


## TODO
- [ ] Test
- [ ] Coveral
- [ ] Demo Stand

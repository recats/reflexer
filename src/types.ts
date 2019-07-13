export interface IProps extends IRowParams {
  order?: number | ISizeObject;
  offset?: { basis: number | ISizeObject, float: 'left' | 'right' };
  basis?: number | ISizeObject;
  fluid?: boolean;

  theme: {
    reflexer: {
      gridFluid: string;
      rowGutter: string;
      colGutter: string;
      column: number;
      size: ISize;
    };
  };
}

export interface IRowParams {
  flexWrap?: ISizeObject;
  flexDirection?: ISizeObject;
  justifyContent?: ISizeObject;
  alignItems?: ISizeObject;
  alignContent?: ISizeObject;
}

export interface ISize {
  xl: number;
  lg: number;
  md: number;
  sm: number;
  xs: number;
}

export interface ISizeObject {
  [key: string]: number | string;
}

export type IParamsValue = number | string | ISizeObject;

export type IDefaultParams = 'flexWrap' | 'flexDirection' | 'justifyContent' | 'alignItems' | 'alignContent';

export type IEntityProps = 'size' | 'gridFluid' | 'rowGutter' | 'colGutter' | 'column' | ISize;

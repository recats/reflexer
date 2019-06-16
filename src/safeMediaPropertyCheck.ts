import * as EnumRow from './Row/const';

import { mediaProperty } from './helpers';
import { IDefaultParams, IProps, IRowParams } from './types';

const defaultParams: IRowParams = {
  flexWrap: { xs: EnumRow.flexWrap.wrap },
  flexDirection: { xs: EnumRow.flexDirection.row },
  justifyContent: { xs: EnumRow.justifyContent.flexStart },
  alignItems: { xs: EnumRow.alignItems.stretch },
  alignContent: { xs: EnumRow.alignContent.stretch },
};

export default (props: IProps, valueKey: IDefaultParams, paramsKey: string, isCheckPecent?: boolean) => {
  if (Object.prototype.hasOwnProperty.call(props, valueKey)) {
    return mediaProperty(props, props[valueKey], paramsKey, isCheckPecent);
  }
  return mediaProperty(props, defaultParams[valueKey], paramsKey, isCheckPecent);
};

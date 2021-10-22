import React from 'react';
import './style';
import {tuple} from '@/util/type';
import classNames from 'classnames';
import {ConfigContext} from '@/config-provider';

function isUnborderedButtonType(type: ButtonType | undefined) {
  return type === 'text' || type === 'link';
}

const ButtonTypes = tuple(
  'default',
  'primary',
  'ghost',
  'dashed',
  'link',
  'text',
);
export type ButtonType = typeof ButtonTypes[number];

export interface BaseButtonProps {
  type?: ButtonType;
}

function Button(props: any) {
  const {
    loading = false,
    prefixCls: customizePrefixCls,
    type,
    danger
  } = props;

  let {getPrefixCls} = React.useContext(ConfigContext);

  const prefixCls = getPrefixCls('btn', customizePrefixCls);

  const classes = classNames(prefixCls, {
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-dangerous`]: !!danger,
  });

  const buttonNode = <button className={classes}>ButtonText</button>;

  return buttonNode;
}

export default Button;

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
    danger = false,
    block = false,
    ghost = false,
    size: customizeSize,

    ...rest
  } = props;

  let {getPrefixCls} = React.useContext(ConfigContext);

  const prefixCls = getPrefixCls('btn', customizePrefixCls);

  let sizeCls = '';
  switch (customizeSize) {
    case 'large':
      sizeCls = 'lg';
      break;
    case 'small':
      sizeCls = 'sm';
      break;
    default:
      break;
  }

  const classes = classNames(prefixCls, {
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-dangerous`]: danger,
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-background-ghost`]: ghost && !isUnborderedButtonType(type),
  });

  const buttonNode = <button
    {...rest}
    className={classes}
  >ButtonText</button>;

  return buttonNode;
}

export default Button;

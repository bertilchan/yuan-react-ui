import React from 'react';
import styles from './style/index.less';
import { tuple } from '@/util/type';
import classNames from 'classnames';

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

function Button() {
  const prefixCls = 'yuan';
  const classes = classNames(prefixCls);
  return <button className={classes}>test</button>;
}

export default Button;

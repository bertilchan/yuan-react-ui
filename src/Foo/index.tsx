import React from 'react';
import styles from './index.less';
import { tuple } from '@/util/type';

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

export default ({ title }: { title: string }) => (
  <button className={styles.title}>{title}</button>
);

import * as React from 'react';
import defaultRenderEmpty, { RenderEmptyHandler } from './renderEmpty';

export type DirectionType = 'ltr' | 'rtl' | undefined;

export interface ConfigConsumerProps {
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
  renderEmpty: RenderEmptyHandler;
  direction?: DirectionType;
}

const defaultGetPrefixCls = (
  suffixCls?: string,
  customizePrefixCls?: string,
) => {
  if (customizePrefixCls) return customizePrefixCls;

  return suffixCls ? `yuan-${suffixCls}` : 'yuan';
};

export const ConfigContext = React.createContext<ConfigConsumerProps>({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,

  renderEmpty: defaultRenderEmpty,
});

export const ConfigConsumer = ConfigContext.Consumer;

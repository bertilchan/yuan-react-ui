import React from 'react';
import './style';
import RcTabs, {
  TabPane,
  TabsProps as RcTabsProps,
  TabPaneProps,
} from 'rc-tabs';
import SizeContext, { SizeType } from '@/config-provider/SizeContext';
import { ConfigContext } from '@/config-provider';
import classNames from 'classnames';

export type TabsType = 'line' | 'card' | 'editable-card';

export interface TabsProps extends Omit<RcTabsProps, 'editable'> {
  type?: TabsType;
  size?: SizeType;
  hideAdd?: boolean;
  centered?: boolean;
  addIcon?: React.ReactNode;
  onEdit?: (
    e: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove',
  ) => void;
}

function Tabs({
  type,
  className,
  size: propSize,
  onEdit,
  hideAdd,
  centered,
  addIcon,
  ...props
}: TabsProps) {
  const { prefixCls: customizePrefixCls } = props;
  const { getPrefixCls, direction } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('tabs', customizePrefixCls);

  const rootPrefixCls = getPrefixCls();
  return (
    <SizeContext.Consumer>
      {contextSize => {
        const size = propSize !== undefined ? propSize : contextSize;
        return (
          <RcTabs
            direction={direction}
            moreTransitionName={`${rootPrefixCls}-slide-up`}
            {...props}
            className={classNames(
              {
                [`${prefixCls}-${size}`]: size,
                [`${prefixCls}-card`]: ['card', 'editable-card'].includes(
                  type as string,
                ),
                [`${prefixCls}-editable-card`]: type === 'editable-card',
                [`${prefixCls}-centered`]: centered,
              },
              className,
            )}
            prefixCls={prefixCls}
          />
        );
      }}
    </SizeContext.Consumer>
  );
}

Tabs.TabPane = TabPane;

export default Tabs;

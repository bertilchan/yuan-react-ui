import React from 'react';
import { ConfigConsumer, ConfigContext, ConfigConsumerProps } from './context';

export { ConfigContext, ConfigConsumer, ConfigConsumerProps };

const ConfigProvider: React.FC & {
  ConfigContext: typeof ConfigContext;
} = props => {
  return <div></div>;
};

/** @private Internal usage. Do not use in your production. */
ConfigProvider.ConfigContext = ConfigContext;

export default ConfigProvider;

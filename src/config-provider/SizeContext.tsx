import * as React from 'react';

export type SizeType = 'small' | 'middle' | 'large' | undefined;

const SizeContext = React.createContext<SizeType>(undefined);

export interface SizeContextProps {
  size?: SizeType;
}

export const SizeContextProvider: React.FC<SizeContextProps> = props => {
  return (
    <SizeContext.Consumer>
      {originSize => (
        <SizeContext.Provider value={props.size || originSize}>
          {props.children}
        </SizeContext.Provider>
      )}
    </SizeContext.Consumer>
  );
};

export default SizeContext;

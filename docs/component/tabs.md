# Tabs

## Basic

Default activate first tab.

```jsx
import React from 'react';
import { Tabs } from 'yuan-react-ui';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default () => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
)
```

## Card

Another type of Tabs, which doesn't support vertical mode.

```jsx
import React from 'react';
import { Tabs } from 'yuan-react-ui';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default () => (
  <Tabs defaultActiveKey="1" onChange={callback} type="card">
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
)
```

## Left Position

Tab's position: left, right, top or bottom. Will auto switch to `top` in mobile.

```jsx
import React from 'react';
import { Tabs } from 'yuan-react-ui';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default () => (
  <>
    <Tabs tabPosition="left">
      <TabPane tab="Tab 1" key="1">
        Content of Tab 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab 3
      </TabPane>
    </Tabs>
  </>
)
```

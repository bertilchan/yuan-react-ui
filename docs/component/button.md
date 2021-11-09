## Button

### Type

There are `primary` button, `default` button, `dashed` button, `text` button and `link` button in type.

```tsx
import React from 'react';
import {Button} from 'yuan-react-ui';

export default () => (
  <>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </>
);
```

### Danger

```tsx
import React from 'react';
import {Button} from 'yuan-react-ui';

export default () => (
  <>
    <Button type="primary" danger>
      Primary
    </Button>
    <Button danger>Default</Button>
    <Button type="dashed" danger>
      Dashed
    </Button>
    <Button type="text" danger>
      Text
    </Button>
    <Button type="link" danger>
      Link
    </Button>
  </>
);
```

### Block

`block` property will make the button fit to its parent width.

```tsx
import React from 'react';
import {Button} from 'yuan-react-ui';

export default () => (
  <>
    <Button type="primary" block>
      Primary
    </Button>
    <Button block>Default</Button>
    <Button type="dashed" block>
      Dashed
    </Button>
    <Button type="link" block>
      Link
    </Button>
  </>
);
```

### Ghost

`ghost` property will make button's background transparent, it is commonly used in colored background.

```jsx
import React from 'react';
import {Button} from 'yuan-react-ui';

export default () => (
  <>
    <div style={{background: '#C0C8C8', padding: '26px 16px 16px'}}>
      <Button type="primary" ghost>
        Primary
      </Button>
      <Button ghost>Default</Button>
      <Button type="dashed" ghost>
        Dashed
      </Button>
      <Button type="primary" danger ghost>
        Danger
      </Button>
      <Button type="text" ghost>
        Text
      </Button>
      <Button type="link" ghost>
        Link
      </Button>
    </div>
  </>
);
```

### Disabled

```tsx
import React from 'react';
import {Button} from 'yuan-react-ui';

export default () => (
  <>
    <Button type="primary" disabled>
      Primary
    </Button>
    <Button disabled>Default</Button>
    <Button type="dashed" disabled>
      Dashed
    </Button>
    <Button type="primary" danger disabled>
      Danger
    </Button>
    <Button type="text" disabled>
      Text
    </Button>
    <Button type="link" disabled>
      Link
    </Button>
  </>
);
```

### Size

```tsx
import React from 'react';
import {Button} from 'yuan-react-ui';

export default () => (
  <>
    <Button type="primary" size="large">
      Primary
    </Button>
    <Button type="primary" size="default">
      Primary
    </Button>
    <Button type="primary" size="small">
      Primary
    </Button>
  </>
);
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle

---
---

## Button

### Type

There are `primary` button, `default` button, `dashed` button, `text` button and `link` button in type.

```tsx
import React from 'react';
import { Button } from 'yuan-react-ui';

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
import { Button } from 'yuan-react-ui';

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

### Block Button

`block` property will make the button fit to its parent width.

```tsx
import React from 'react';
import { Button } from 'yuan-react-ui';

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

More skills for writing demo: https://d.umijs.org/guide/demo-principle

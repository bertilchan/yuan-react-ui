# Chart

```tsx
import React, {useEffect} from 'react';
import {CandleChart} from 'yuan-react-ui';

export default () => {
  useEffect(() => {
    const div = document.getElementById("candle");
    const candleChart = new CandleChart(div);
  }, [])
  return <div id={"candle"}></div>

}
```

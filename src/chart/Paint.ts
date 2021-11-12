class Paint {
  private readonly dataBrush: CanvasRenderingContext2D;
  private readonly coordinateBrush: CanvasRenderingContext2D;
  private readonly specificBrush: CanvasRenderingContext2D;

  private readonly centerInterval: number;
  private readonly centerHalfInterval: number;
  private readonly barWidth: number;
  private readonly barHalfWidth: number;

  private cacheData: InnerDataType[] = [];

  constructor(divElement: HTMLDivElement, width: number, height: number) {
    const coordinateWidth = 60;
    const dataWidth = width - 60;
    // The data temporarily defaults to displaying 100 bars.
    const displayNode = 100;

    this.dataBrush = Paint.createBrush(dataWidth, height);
    this.specificBrush = Paint.createBrush(dataWidth, height);
    this.coordinateBrush = Paint.createBrush(coordinateWidth, height);

    // Merge data and specific layer.
    divElement.style.position = 'relative';
    divElement.appendChild(this.dataBrush.canvas);
    divElement.appendChild(this.specificBrush.canvas);
    let specificStyle = this.specificBrush.canvas.style;
    specificStyle.position = 'absolute';
    specificStyle.left = '0';
    divElement.appendChild(this.coordinateBrush.canvas);

    this.centerInterval = dataWidth / displayNode;
    this.centerHalfInterval = this.centerInterval / 2;
    this.barHalfWidth = this.centerInterval / 3;
    this.barWidth = this.barHalfWidth * 2;

    // Add mouse event
    const drawCross = this.drawCross.bind(this);
    const specificBrush = this.specificBrush;

    this.specificBrush.canvas.onmousemove = function(event) {
      drawCross(event, dataWidth, height);
    };
    const clearCanvas = this.clearCanvas.bind(this);
    this.specificBrush.canvas.onmouseout = function() {
      clearCanvas();
    };
  }

  private clearCanvas() {
    const canvas = this.specificBrush.canvas;
    this.specificBrush.clearRect(0, 0, canvas.width, canvas.height);
  }

  private drawCross(event: MouseEvent, width: number, height: number) {
    const brush = this.specificBrush;
    const canvas = brush.canvas;
    brush.clearRect(0, 0, canvas.width, canvas.height);

    const rect = canvas.getBoundingClientRect();
    const originX = event.clientX - rect.left * (canvas.width / rect.width);
    const x = this.findXPosition(
      this.cacheData,
      0,
      this.cacheData.length - 1,
      originX,
    );
    const y = event.clientY - rect.top * (canvas.height / rect.height);

    brush.strokeStyle = '#417DF4';

    const row = new Path2D();
    row.moveTo(x, 0);
    row.lineTo(x, height);
    brush.stroke(row);

    const column = new Path2D();
    column.moveTo(0, y);
    column.lineTo(width, y);
    brush.stroke(column);
  }

  private findXPosition(
    cacheData: InnerDataType[],
    start: number,
    end: number,
    x: number,
  ): number {
    const middle = Math.trunc((start + end) / 2);

    if (
      Math.abs(cacheData[middle].axis.start.x - x) <= this.centerHalfInterval
    ) {
      return cacheData[middle].axis.start.x;
    }

    if (x < cacheData[middle].axis.start.x) {
      if (middle - 1 < start) {
        return cacheData[middle].axis.start.x;
      }
      return this.findXPosition(cacheData, start, middle - 1, x);
    } else {
      if (middle + 1 > end) {
        return cacheData[middle].axis.start.x;
      }
      return this.findXPosition(cacheData, middle + 1, end, x);
    }
  }

  private static createBrush(
    width: number,
    height: number,
  ): CanvasRenderingContext2D {
    const area = document.createElement('canvas');
    area.width = width;
    area.height = height;

    const areaContext = area.getContext('2d');
    if (areaContext) {
      return areaContext;
    } else {
      throw new Error('The area canvas context is ' + areaContext);
    }
  }

  public fillBackgroundColor(backgroundColor: string, borderColor: string) {
    const dataArea = this.dataBrush.canvas;
    this.dataBrush.fillStyle = backgroundColor;
    this.dataBrush.fillRect(0, 0, dataArea.width, dataArea.height);
    this.dataBrush.strokeStyle = borderColor;
    this.dataBrush.lineWidth = 4;
    this.dataBrush.strokeRect(1, 1, dataArea.width, dataArea.height);

    const coordinateArea = this.coordinateBrush.canvas;
    this.coordinateBrush.fillStyle = backgroundColor;
    this.coordinateBrush.fillRect(
      0,
      0,
      coordinateArea.width,
      coordinateArea.height,
    );
  }

  public draw(data: DataType[]) {
    // Find max and min value from data
    let maxValue = data[0].high;
    let minValue = data[0].low;
    for (let i = 0; i < data.length; i++) {
      if (data[i].high > maxValue) {
        maxValue = data[i].high;
      }

      if (data[i].low < minValue) {
        minValue = data[i].low;
      }
    }

    // Draw ordinate
    const interval = Paint.getInterval(maxValue - minValue);

    // Transform data
    maxValue = maxValue + interval;
    minValue = minValue - interval < 0 ? minValue : minValue - interval;
    this.transform(data, maxValue, minValue);

    // Draw bar
    this.dataBrush.lineWidth = 2;
    for (let i = 0; i < this.cacheData.length; i++) {
      const transformDatum = this.cacheData[i];

      if (transformDatum.datum.close >= transformDatum.datum.open) {
        this.dataBrush.strokeStyle = '#C53530';
        this.dataBrush.fillStyle = '#C53530';
      } else {
        this.dataBrush.strokeStyle = '#479F68';
        this.dataBrush.fillStyle = '#479F68';
      }

      let path2D = new Path2D();
      path2D.moveTo(transformDatum.axis.start.x, transformDatum.axis.start.y);
      path2D.lineTo(transformDatum.axis.end.x, transformDatum.axis.end.y);
      this.dataBrush.stroke(path2D);

      const bar = transformDatum.bar;
      this.dataBrush.fillRect(bar.x, bar.y, bar.width, bar.height);
    }
  }

  private static getInterval(difference: number): number {
    if (difference > 0 && difference < 5) {
      return 0.5;
    } else if (difference > 5 && difference < 10) {
      return 1;
    }

    // Get factor
    let tmp = difference;
    let count = 0;
    while (tmp > 1) {
      tmp = tmp / 10;
      count++;
    }

    let factor = 1;
    for (let i = 1; i < count; i++) {
      factor = factor * 10;
    }

    // Get interval
    return Math.trunc((difference + factor) / factor) * factor * 0.1;
  }

  private transform(data: DataType[], maxValue: number, minValue: number) {
    console.log(data);
    const dataArea = this.dataBrush.canvas;
    const ratio = dataArea.height / (maxValue - minValue);

    for (let i = 0; i < data.length; i++) {
      const x = i * this.centerInterval;
      const open = dataArea.height - (data[i].open - minValue) * ratio;
      const close = dataArea.height - (data[i].close - minValue) * ratio;
      const high = dataArea.height - (data[i].high - minValue) * ratio;
      const low = dataArea.height - (data[i].low - minValue) * ratio;

      let top;
      let bottom;
      if (open < close) {
        top = open;
        bottom = close;
      } else {
        top = close;
        bottom = open;
      }

      const transform = {
        axis: {
          start: {
            x,
            y: high,
          },
          end: {
            x,
            y: low,
          },
        },

        bar: {
          x: x - this.barHalfWidth,
          y: top,
          width: this.barWidth,
          height: bottom - top,
        },
        datum: data[i],
      };

      if (transform.bar.height == 0) {
        transform.bar.height = 1;
      }

      this.cacheData.push(transform);
    }
  }
}

interface InnerDataType {
  axis: {
    start: {
      x: number;
      y: number;
    };
    end: {
      x: number;
      y: number;
    };
  };

  bar: {
    x: number;
    y: number;
    width: number;
    height: number;
  };

  datum: DataType;
}

export interface DataType {
  open: number;
  close: number;
  high: number;
  low: number;
}

export default Paint;

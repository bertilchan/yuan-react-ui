class Paint {
  private readonly dataBrush: CanvasRenderingContext2D;
  private readonly coordinateBrush: CanvasRenderingContext2D;
  private readonly specificBrush: CanvasRenderingContext2D;

  private readonly interval: number;

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

    this.interval = dataWidth / displayNode;
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

  public drawLine(data: DataLineType[]) {
    let path2D = new Path2D();
    let transformData = this.transform(data);

    path2D.moveTo(transformData[0].x, transformData[0].y);
    for (let i = 0; i < transformData.length; i++) {
      path2D.lineTo(transformData[i].x, transformData[i].y);
    }

    this.dataBrush.strokeStyle = '#726637';
    this.dataBrush.lineWidth = 2;
    this.dataBrush.stroke(path2D);
  }

  private transform(
    data: DataLineType[],
  ): { x: number; y: number; datum: DataLineType }[] {
    let maxValue = data[0].value;
    let minValue = data[0].value;
    for (let i = 0; i < data.length; i++) {
      if (data[i].value > maxValue) {
        maxValue = data[i].value;
      }

      if (data[i].value < minValue) {
        minValue = data[i].value;
      }
    }

    const dataArea = this.dataBrush.canvas;
    const ratio = dataArea.height / (maxValue - minValue);
    const result: { x: number; y: number; datum: DataLineType }[] = [];

    for (let i = 0; i < data.length; i++) {
      const x = i * this.interval;
      const y = dataArea.height - (data[i].value - minValue) * ratio;

      result.push({
        x: x,
        y: y,
        datum: data[i],
      });
    }

    return result;
  }
}

export interface DataLineType {
  value: number;
}

export default Paint;

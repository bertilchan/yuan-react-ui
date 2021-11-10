class Paint {
  private readonly dataArea: HTMLCanvasElement;
  private readonly coordinateArea: HTMLCanvasElement;
  private readonly dataBrush: CanvasRenderingContext2D;
  private readonly coordinateBrush: CanvasRenderingContext2D;

  private readonly interval: number;

  constructor(coordinateArea: HTMLCanvasElement, dataArea: HTMLCanvasElement) {
    this.dataArea = dataArea;
    const dataAreaContext = dataArea.getContext('2d');
    if (dataAreaContext) {
      this.dataBrush = dataAreaContext;
    } else {
      throw new Error('The data area canvas context is ' + dataAreaContext);
    }

    this.coordinateArea = coordinateArea;
    const coordinateAreaContext = coordinateArea.getContext(`2d`);
    if (coordinateAreaContext) {
      this.coordinateBrush = coordinateAreaContext;
    } else {
      throw new Error(
        'The coordinate area canvas context is ' + dataAreaContext,
      );
    }

    if (this.dataArea.height !== this.coordinateArea.height) {
      throw new Error(
        'The data area height is not equal to coordinate area height.',
      );
    }

    // The data temporarily defaults to displaying 100 bars.
    this.interval = this.dataArea.width / 100;
  }

  public fillBackgroundColor(backgroundColor: string, borderColor: string) {
    this.dataBrush.fillStyle = backgroundColor;
    this.dataBrush.fillRect(0, 0, this.dataArea.width, this.dataArea.height);
    this.dataBrush.strokeStyle = borderColor;
    this.dataBrush.lineWidth = 4;
    this.dataBrush.strokeRect(1, 1, this.dataArea.width, this.dataArea.height);

    this.coordinateBrush.fillStyle = backgroundColor;
    this.coordinateBrush.fillRect(
      0,
      0,
      this.coordinateArea.width,
      this.coordinateArea.height,
    );
  }

  public drawLine(data: DataLineType[]) {
    let path2D = new Path2D();
    let transformData = this.transform(data);

    console.log(transformData);

    path2D.moveTo(transformData[0].x, transformData[0].y);
    for (let i = 0; i < transformData.length; i++) {
      path2D.lineTo(transformData[i].x, transformData[i].y);
    }

    this.dataBrush.strokeStyle = 'red';
    this.dataBrush.stroke(path2D);

    // this.brush.
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

    const ratio = this.dataArea.height / (maxValue - minValue);

    console.log(minValue, maxValue, ratio);
    const result: { x: number; y: number; datum: DataLineType }[] = [];

    for (let i = 0; i < data.length; i++) {
      const x = i * this.interval;
      const y = this.dataArea.height - (data[i].value - minValue) * ratio;

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

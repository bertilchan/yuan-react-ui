import Paint, { DataType } from './Paint';

function CandleChart(divElement: HTMLDivElement) {
  let paint = new Paint(divElement, 700, 300);
  paint.fillBackgroundColor('#1E2334', '#282F3E');

  const data: DataType[] = [];

  for (let index = 0; index < 100; index++) {
    let number;
    if (index == 0) {
      number = random(500, 1000);
    } else {
      number = data[index - 1].close;
    }

    let high = random(number - number * 0.1, number + number * 0.1);
    let low = random(number - number * 0.1, number + number * 0.1);
    let open = random(number - number * 0.1, number + number * 0.1);
    let close = random(number - number * 0.1, number + number * 0.1);

    if (high < low) {
      high = low;
    }

    if (open > high) {
      open = high;
    }
    if (open < low) {
      open = low;
    }
    if (close > high) {
      close = high;
    }
    if (close < low) {
      close = low;
    }

    data.push({
      open,
      close,
      high,
      low,
    });
  }

  paint.draw(data);
}

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default CandleChart;

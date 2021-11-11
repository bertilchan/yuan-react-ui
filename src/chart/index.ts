import Paint, { DataLineType } from './Paint';

function CandleChart(divElement: HTMLDivElement) {
  let paint = new Paint(divElement, 700, 300);
  paint.fillBackgroundColor('#1E2334', '#282F3E');

  const data: DataLineType[] = [];

  for (let index = 0; index < 100; index++) {
    data.push({
      value: Math.round(Math.random() * 10),
    });
  }

  paint.drawLine(data);
}

export default CandleChart;

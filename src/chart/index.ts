import Paint, { DataLineType } from './Paint';

function CandleChart(divElement: HTMLDivElement) {
  const height = 300;

  const dataArea = document.createElement('canvas');
  dataArea.width = 700;
  dataArea.height = height;

  const coordinateArea = document.createElement('canvas');
  coordinateArea.width = 60;
  coordinateArea.height = height;

  divElement.appendChild(dataArea);
  divElement.appendChild(coordinateArea);

  let paint = new Paint(coordinateArea, dataArea);
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

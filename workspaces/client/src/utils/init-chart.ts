declare global {
  interface Window {
    Chart: any;
    myChartSaved: any;
  }
}

const getChartElAndDestroy = () => {
  const chartContainer = document.querySelector('#my-chart-container') as HTMLElement;

  chartContainer.innerHTML = '';
  const canvas = document.createElement('canvas');
  canvas.id = 'my-chart';

  let child = chartContainer.lastElementChild;
  while (child) {
    chartContainer.removeChild(child);
    child = chartContainer.lastElementChild;
  }

  chartContainer.appendChild(canvas);

  const canvasEl = document.querySelector('#my-chart') as HTMLElement;

  if (window.myChartSaved) {
    window.myChartSaved.destroy();
    window.myChartSaved = null;
  }
  return canvasEl;
};

export const initChart = (config) => {
  const canvasEl = getChartElAndDestroy();

  // await new Promise<void>((resolve) => {
  //   setTimeout(() => {
  //     resolve();
  //   }, 500);
  // });

  if (window.myChartSaved) {
    window.myChartSaved.destroy();
  }

  const myChart = new window.Chart(
    canvasEl,
    config,
  );

  myChart.update();

  window.myChartSaved = myChart;
};

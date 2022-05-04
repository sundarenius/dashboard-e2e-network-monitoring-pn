// import { cloneDeep } from 'lodash';

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

export const options = {
  responsive: true,
  layout: {
    padding: 20,
  },
  plugins: {
    title: {
      display: true,
      text: 'PostNord E2E network parcel monitoring demo',
    },
  },
};

export const chartTypes = [
  {
    name: 'Bar chart',
    type: 'bar',
  },
  {
    name: 'Line chart',
    type: 'line',
  },
  {
    name: 'Pie chart',
    type: 'pie',
  },
  {
    name: 'Doughnut chart',
    type: 'doughnut',
  },
  // {
  //   name: 'PolarArea chart',
  //   type: 'polarArea',
  // },
  // {
  //   name: 'Radar chart',
  //   type: 'radar',
  // },
  {
    name: 'Scatter chart',
    type: 'scatter',
  },
  {
    name: 'Bubble chart',
    type: 'bubble',
  },
];

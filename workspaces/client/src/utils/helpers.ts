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

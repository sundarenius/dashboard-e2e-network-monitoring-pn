import {
  Bar,
  Line,
  Pie,
  Doughnut,
  PolarArea,
  Radar,
  Scatter,
  Bubble,
} from 'react-chartjs-2';

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
    type: 'Bar chart',
    cmpnt: Bar,
  },
  {
    type: 'Line chart',
    cmpnt: Line,
  },
  {
    type: 'Pie chart',
    cmpnt: Pie,
  },
  {
    type: 'Doughnut chart',
    cmpnt: Doughnut,
  },
  {
    type: 'PolarArea chart',
    cmpnt: PolarArea,
  },
  {
    type: 'Radar chart',
    cmpnt: Radar,
  },
  {
    type: 'Scatter chart',
    cmpnt: Scatter,
  },
  {
    type: 'Bubble chart',
    cmpnt: Bubble,
  },
];

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

export const chartTypes = [
  {
    type: 'Bar',
    cmpnt: Bar,
  },
  {
    type: 'Line',
    cmpnt: Line,
  },
  {
    type: 'Pie',
    cmpnt: Pie,
  },
  {
    type: 'Doughnut',
    cmpnt: Doughnut,
  },
  {
    type: 'PolarArea',
    cmpnt: PolarArea,
  },
  {
    type: 'Radar',
    cmpnt: Radar,
  },
  {
    type: 'Scatter',
    cmpnt: Scatter,
  },
  {
    type: 'Bubble',
    cmpnt: Bubble,
  },
];

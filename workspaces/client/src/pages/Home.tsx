import type { FC } from 'react';
import {
  useAppSelector,
} from 'redux/redux-hooks';

interface Props {}

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];

const data = {
  labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      // 'blue',
      // 'green',
      // 'yellow',
      // 'purple',
      // 'cyan',
      // 'orange',
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
    ],
    borderWidth: 1,
    data: [0, 10, 5, 2, 20, 30],
  }],
};

const options = {
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

const cmpntProps = {
  width: 100,
  height: 50,
  data,
  options,
};

const Home:FC<Props> = (): JSX.Element => {
  const chart = useAppSelector(({ context }) => context.chart);
  const txt = 'Home page';
  console.log(txt);
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <chart.cmpnt {...cmpntProps} />
  );
};

export default Home;

const backgroundColor = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 206, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(255, 159, 64, 0.2)',
];

const borderColor = [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
];

const overview = {
  name: 'Full e2e flow',
  datasets: [
    {
      label: 'Parcels',
      backgroundColor,
      borderColor,
      borderWidth: 1,
      data: {
        Checkout: 150,
        Pickup: 150,
        Hubs: 120,
        Terminal: 110,
        Distribution: 90,
        'End-point (arrived)': 75,
      },
    },
    {
      label: 'Parcels (on time)',
      backgroundColor,
      borderColor,
      borderWidth: 1,
      data: [145, 140, 120, 100, 90, 60],
    },
  ],
};

const rdm = () => Math.floor(Math.random() * (500 - 50 + 1)) + 50;
const d = () => ([{ x: 'Jan', net: rdm(), cogs: rdm(), gm: rdm() }, { x: 'Feb', net: rdm(), cogs: rdm(), gm: rdm() }]);
const checkout = () => ({
  datasets: [{
    label: 'Net sales',
    data: d(),
    parsing: {
      yAxisKey: 'net',
    },
    backgroundColor,
  }, {
    label: 'Cost',
    data: d(),
    parsing: {
      yAxisKey: 'cogs',
    },
    backgroundColor,
  }, {
    label: 'Gross margin',
    data: d(),
    parsing: {
      yAxisKey: 'gm',
    },
    backgroundColor,
  }],
});

export const sections = [
  {
    name: 'Network overview',
    data: overview,
  },
  {
    name: 'Checkout',
    data: checkout(),
  },
  {
    name: 'Pickup',
    data: checkout(),
  },
  {
    name: 'Hubs',
    data: checkout(),
  },
  {
    name: 'Terminal',
    data: checkout(),
  },
  {
    name: 'Distribution',
    data: checkout(),
  },
  {
    name: 'End-points',
    data: checkout(),
  },
];

type TNetworkData = () => any;
export const networkData: TNetworkData = () => ({
  results: {
    periods: [
      {
        from: "2022-02-01",
        to: "2022-03-01",
        data: {
          orders: 8000,
          pickups: 7600,
          arrivedToTerminals: 7500,
        }
      },
      {
        from: "2022-01-01",
        to: "2022-02-01",
        data: {
          orders: 7900,
          pickups: 7200,
          arrivedToTerminals: 7100,
        }
      },
      {
        from: "2021-12-01",
        to: "2022-01-01",
        data: {
          orders: 9800,
          pickups: 9600,
          arrivedToTerminals: 9500,
        }
      },
    ]
  },
  location: 'SE',
  success: true
})

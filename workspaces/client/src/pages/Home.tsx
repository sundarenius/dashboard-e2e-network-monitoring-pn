/* eslint-disable react/jsx-props-no-spreading */
import type { FC } from 'react';
import {
  useAppSelector,
} from 'redux/redux-hooks';
import { options } from 'utils/helpers';
import ChartLayout from 'components/ChartLayout';

interface Props {}

const Home:FC<Props> = (): JSX.Element => {
  const {
    chart,
    selectedSection,
  } = useAppSelector(({ context }) => context);

  const cmpntProps = {
    data: selectedSection.data,
    options,
  };

  return (
    <>
      <p style={{ paddingLeft: '25px', marginLeft: '30px' }}>
        Displaying random data. Doughnout, Pie, Polar area, and Radar&nbsp;
        only works for the data logic we have for &quot;Network overview&quot;.&nbsp;
        Just testing different setups here, <strong> NO real structure yet</strong>.
      </p>
      <ChartLayout>
        <div style={{ position: 'relative', maxHeight: '60vh', maxWidth: '40vw' }}>
          <chart.cmpnt {...cmpntProps} />
        </div>
      </ChartLayout>
    </>
  );
};

export default Home;

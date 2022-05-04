/* eslint-disable react/jsx-props-no-spreading */
import type { FC } from 'react';
import { useEffect, useCallback } from 'react';
import {
  useAppSelector,
} from 'redux/redux-hooks';
import { options } from 'utils/helpers';
import { initChart } from 'utils/init-chart';
import ChartLayout from 'components/ChartLayout';
import { cloneDeep } from 'lodash';

interface Props {}

const Home:FC<Props> = (): JSX.Element => {
  const {
    chart,
    selectedSection,
  } = useAppSelector(({ context }) => context);

  const cmpntProps = useCallback(() => ({
    data: cloneDeep(selectedSection.data),
    options,
  }), [selectedSection]);

  useEffect(() => {
    const data = {
      type: chart.type,
      ...cmpntProps(),
    };
    initChart(data);
  }, [cmpntProps, chart]);

  return (
    <>
      <p style={{ paddingLeft: '25px', marginLeft: '30px' }}>
        Displaying random data. Doughnout, Pie, Polar area, and Radar&nbsp;
        only works for the data logic we have for &quot;Network overview&quot;.&nbsp;
        Just testing different setups here, <strong> NO real structure yet</strong>.
      </p>
      <ChartLayout>
        <div style={{ position: 'relative', maxHeight: '60vh', maxWidth: '40vw' }}>
          <div id="my-chart-container" />
        </div>
      </ChartLayout>
    </>
  );
};

export default Home;

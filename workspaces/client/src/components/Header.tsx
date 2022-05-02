import type { FC } from 'react';
// import { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import {
  useAppSelector,
  useAppDispatch,
} from 'redux/redux-hooks';
import { chartTypes } from 'utils/helpers';
import { contextActions } from 'redux/actions';

interface Props {}

const Header:FC<Props> = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const chart = useAppSelector(({ context }) => context.chart);

  const handleItemClick = (e: any, data: any) => {
    const chartData = chartTypes.find((val) => val.type === data.name) as Record<any, any>;
    console.log(chartData);
    dispatch(contextActions.setChart(chartData));
  };

  return (
    <>
      <Menu pointing>
        {chartTypes.map((c) => (
          <Menu.Item
            key={c.type}
            name={c.type}
            active={c.type === chart.type}
            onClick={handleItemClick}
          />
        ))}
      </Menu>
    </>
  );
};

export default Header;

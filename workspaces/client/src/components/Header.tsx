import type { FC } from 'react';
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
    const chartData = chartTypes.find((val) => val.name === data.name) as Record<any, any>;
    dispatch(contextActions.setChart(chartData));
  };

  return (
    <Menu>
      {chartTypes.map((c) => (
        <Menu.Item
          key={c.name}
          name={c.name}
          active={c.name === chart.name}
          onClick={handleItemClick}
        />
      ))}
    </Menu>
  );
};

export default Header;

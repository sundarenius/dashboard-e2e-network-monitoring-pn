import type { FC } from 'react';
import {
  useAppSelector,
  useAppDispatch,
} from 'redux/redux-hooks';
import {
  Menu,
  Segment,
} from 'semantic-ui-react';
import { sections } from 'utils/sections';
import { contextActions } from 'redux/actions';

interface Props {
  children: JSX.Element
}

const ChartLayout:FC<Props> = ({ children }): JSX.Element => {
  const dispatch = useAppDispatch();
  const selectedSection = useAppSelector(({ context }) => context.selectedSection);

  const setDataHandler = (e: any, d: any) => {
    const section = sections.find((val) => val.name === d.name) as Record<any, any>;
    dispatch(contextActions.setSelectedSection(section));
  };

  return (
    <div id="chart-layout-container" style={{ padding: '25px', margin: '30px' }}>
      <Menu pointing secondary>
        {sections.map((section) => (
          <Menu.Item
            key={Math.random()}
            name={section.name}
            active={selectedSection.name === section.name}
            onClick={setDataHandler}
          />
        ))}
      </Menu>

      <Segment.Group style={{ background: 'white', height: '75vh' }}>
        {children}
      </Segment.Group>
    </div>
  );
};

export default ChartLayout;

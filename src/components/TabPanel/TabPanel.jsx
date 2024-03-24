import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import { Features } from '../Features/Features';

import css from './TabPanel.module.css';
import { Review } from '../Review/Review';
import { Form } from 'components/Form/Form';

export const TabPanels = ({ props }) => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            '& .MuiTabs-indicator': {
              backgroundColor: '#E44848',
              borderBottom: '3px solid #E44848',
            },
            '& .MuiTab-root': {
              color: '#101828',
            },
          }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Features" value="1" />
            <Tab label="Reviews" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className={css.block}>
            <Features props={props} />
            <Form />
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div className={css.block}>
            <Review props={props} />
            <Form />
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

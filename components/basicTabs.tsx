import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { PanoramaWideAngleSelect } from '@mui/icons-material';

interface TabPanelProps {
  label: string;
  children?: React.ReactNode;
  index: number;
  value: number;
}

export function TabPanel(props: TabPanelProps) {
  const { label, children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface BasicTabsProps {
  panelTitles: string[]
  //tabPanelContents: React.ReactNode[]
  children: JSX.Element[]
}

export function BasicTabs(props: BasicTabsProps) {
  const { panelTitles, children } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {panelTitles.map((title, index) => (
            <Tab label={title} {...a11yProps(index)} />))}
        </Tabs>
      </Box>
      {children.map((child, index) => (
        <TabPanel
          label={panelTitles[index]}
          value={value}
          index={index}
          >
          {child}
        </TabPanel>
        ))}
    </Box>
  );
}
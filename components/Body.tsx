import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Skeleton, Container, AppShell, useMantineTheme, Navbar } from '@mantine/core';
import { NavbarMinimal } from './NavbarMinimal';
import { StatsGrid } from './Stats';
import { HeaderSearch } from './Header';

const child = <Skeleton height={140} radius="md" animate={false} />;

export function Body() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
  return (
    <AppShell
        styles={{
            main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        navbar = {<NavbarMinimal />}
        header = {<HeaderSearch links={[
            {
                "link": "/about",
                "label": "Features"
              },
              {
                "link": "/pricing",
                "label": "Pricing"
              },
              {
                "link": "/learn",
                "label": "Learn"
              },
              {
                "link": "/community",
                "label": "Community"
              }
        ]} />}
    >

        {/* <Container > */}
            <StatsGrid data={[
                {
                    "title": "Soil Moisture Percentage",
                    "icon": "receipt",
                    "value": "13,456",
                    "diff": 34
                  },
                  {
                    "title": "Profit",
                    "icon": "coin",
                    "value": "4,145",
                    "diff": -13
                  },
                  {
                    "title": "Coupons usage",
                    "icon": "discount",
                    "value": "745",
                    "diff": 18
                  },
                  {
                    "title": "New customers",
                    "icon": "user",
                    "value": "188",
                    "diff": -30
                  }
            ]}/>
        <Grid>
            <Grid.Col xs={4}>{child}</Grid.Col>
            <Grid.Col xs={8}>{child}</Grid.Col>
            <Grid.Col xs={8}>{child}</Grid.Col>
            <Grid.Col xs={4}>{child}</Grid.Col>
            <Grid.Col xs={3}>{child}</Grid.Col>
            <Grid.Col xs={3}>{child}</Grid.Col>
            <Grid.Col xs={6}>{child}</Grid.Col>
        </Grid>
        {/* </Container> */}
    </AppShell>
  );
}
import React, { useState, useEffect } from 'react';
import { Grid, Skeleton, Container, AppShell, useMantineTheme, Navbar, Group, Paper } from '@mantine/core';
import { NavbarMinimal } from './NavbarMinimal';
import { StatsGrid } from './Stats';
import { HeaderSearch } from './Header';
import CardGraph from './Graph';

//Database Firebase
import { db } from '../firebase/clientApp';
import { ref, onValue } from "firebase/database";
import { TemperatureCelsius } from 'tabler-icons-react';
// console.log(db);

let dataHumidity = 0
let dataHumidityBefore = 0
var dataRealTimeHumidityPath = 'node/interface/roomHumidity';
const dataRealTimeHumidity = ref(db, dataRealTimeHumidityPath);
onValue(dataRealTimeHumidity, (snapshot) => {
  dataHumidity = snapshot.val();
  console.log(dataHumidity);
});
console.log(dataHumidity);
let roomTemperature = 0
var dataRealTimeTemperaturePath = 'node/interface/roomTemperature';
const dataRealTimeTemperature = ref(db, dataRealTimeTemperaturePath);
onValue(dataRealTimeTemperature, (snapshot) => {
  roomTemperature = snapshot.val();
  console.log(roomTemperature);
});

let PercentageSoilSensor1 = 0
let PercentageSoilSensor2 = 0
var dataRealTimeSoilSensor1Path = 'node/interface/percentageSoilSensor1';
const dataRealTimeSoilSensor1 = ref(db, dataRealTimeSoilSensor1Path);
onValue(dataRealTimeSoilSensor1, (snapshot) => {
  PercentageSoilSensor1 = snapshot.val();
  console.log(PercentageSoilSensor1);
});
console.log(PercentageSoilSensor1);
var dataRealTimeSoilSensor2Path = 'node/interface/percentageSoilSensor2';
const dataRealTimeSoilSensor2 = ref(db, dataRealTimeSoilSensor2Path);
onValue(dataRealTimeSoilSensor2, (snapshot) => {
  PercentageSoilSensor2 = snapshot.val();
  console.log(PercentageSoilSensor2);
});

let BitSoilSensor1 = 0
let BitSoilSensor2 = 0
var dataRealTimeBitSoilSensor1Path = 'node/interface/bitSoilSensor1';
const dataRealTimeBitSoilSensor1 = ref(db, dataRealTimeBitSoilSensor1Path);
onValue(dataRealTimeBitSoilSensor1, (snapshot) => {
  BitSoilSensor1 = snapshot.val();
  console.log(BitSoilSensor1);
});
console.log(BitSoilSensor1);
var dataRealTimeBitSoilSensor2Path = 'node/interface/bitSoilSensor2';
const dataRealTimeBitSoilSensor2 = ref(db, dataRealTimeBitSoilSensor2Path);
onValue(dataRealTimeBitSoilSensor2, (snapshot) => {
  BitSoilSensor2 = snapshot.val();
  console.log(BitSoilSensor2);
});


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
                    "title": "Plant 1 Soil Moisture Percentage",
                    "icon": "receipt",
                    "value": `${PercentageSoilSensor1}`,
                    "diff": 34
                  },
                  {
                    "title": "Plant 1 Soil Moisture BitOutput",
                    "icon": "coin",
                    "value": `${BitSoilSensor1}`,
                    "diff": -13
                  },
                  {
                    "title": "Plant 2 Soil Moisture Percentage",
                    "icon": "discount",
                    "value": `${PercentageSoilSensor2}`,
                    "diff": 18
                  },
                  {
                    "title": "Plant 2 Soil Moisture BitOutput",
                    "icon": "user",
                    "value": `${BitSoilSensor2}`,
                    "diff": -30
                  },
                  {
                    "title": "Greenery Humidity",
                    "icon": "user",
                    "value": `${dataHumidity}`,
                    "diff": -30
                  },
                  {
                    "title": "Greenery Temperature",
                    "icon": "temperature",
                    "value": `${roomTemperature}`,
                    "diff": -30
                  },
            ]}/>
        <Grid>
            <Grid.Col xs={7} >
                <CardGraph />
            </Grid.Col>
            <Grid.Col xs={5}>{child}</Grid.Col>
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
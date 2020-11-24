import React, { PureComponent } from 'react';
import { Box, Button } from 'viviui'
import NextLink from 'next/link'
import App from '../App'

import _ from "lodash";
import ReactEcharts from 'echarts-for-react';
import { getBarChart, getLineChart, getPieChart } from "./chart";
import { Layout, Button } from 'antd';
import { WidthProvider, Responsive } from "react-grid-layout";

import * as serviceWorker from './serviceWorker'

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const { Header, Content } = Layout;

serviceWorker.unregister()

const Home = ({ props }) => {
  const ResponsiveReactGridLayout = WidthProvider(Responsive)
  return (
    <App>
      <NextLink href='https://juejin.cn/post/6844903843436691463'><Button>拖拽布局</Button></NextLink>
      <ResponsiveReactGridLayout
        className='layout'
        // {props}
        layouts={layouts}
        onLayoutChange={(layout, layouts) =>
          this.onLayoutChange(layout, layouts)}
      >
        {this.generateDOM()}
      </ResponsiveReactGridLayout>
    </App>
  )
}
export default Home

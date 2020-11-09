import React from 'react'

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box
} from 'viviui'

export default () => {
  return (
      <div class='sub-menu_menu__20_qG'>
        <div class='sub-menu_menu-inner__1k2-4'>
          <div class='sub-menu_menu-content__36v7q'>
            <a class='submenu-tabs_tab__3OnI2' href=''>Overview</a>
            <a class='submenu-tabs_tab__3OnI2' href=''>Projects</a>
            <a class='submenu-tabs_tab__3OnI2' href=''>Integrations</a>
            <a class='submenu-tabs_tab__3OnI2 submenu-tabs_active__3AUNY' href=''>Activity</a>
            <a class='submenu-tabs_tab__3OnI2' href=''>Domains</a>
            <a class='submenu-tabs_tab__3OnI2' href=''>Usage</a>
            <a class='submenu-tabs_tab__3OnI2' href=''>Settings</a>
          </div>
        </div>
      </div>
      <style>

        {`
        .sub-menu_menu__20_qG{
          transition: box-shadow .2s ease;
          border:1px solid black;
        }
         .sub-menu_menu-inner__1k2-4{
          width: var(--geist-page-width-with-margin);
          max-width: 100%;
          padding: 0 var(--geist-page-margin);
          z-index: 1100;
          height: 48px;
          line-height: 48px;
          margin: auto auto -1px;
          display: flex;
          align-items: flex-end;
          line-height: normal;
          font-size: 16px;
          font-weight: 500;
          overflow: auto;
        }
        .sub-menu_menu-content__36v7q{
          display: flex;
          transition: transform .25s ease;
          flex-grow: 1;
          align-items: center;
        }
        .submenu-tabs_tab__3OnI2 {
          position: relative;
          display: inline-block;
          padding: 16px 12px;
          color: var(--accents-5);
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          transition: color 0.2s ease 0s;
          outline: none;
          cursor: pointer;
          user-select: none;
        }
       .submenu-tabs_active__3AUNY:before {
          content: "";
          display: block;
          position: absolute;
          height: 0;
          left: 9px;
          right: 9px;
          bottom: 0;
          border-bottom: 2px solid;
        }
        `}
      </style>
  )
}

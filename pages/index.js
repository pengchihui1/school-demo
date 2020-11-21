// import React from 'react'
import { Box } from 'viviui'
import App from '../App'
import { AgGridReact } from 'ag-grid-react'
// import 'ag-grid/dist/styles/ag-grid.css'
// import 'ag-grid/dist/styles/ag-theme-material.css'
import 'ag-grid-enterprise'

const Index = () => {
  const columns = [
    {
      field: 'jobTitle'
    },
    {
      field: 'employmentType'
    }
  ]

  const getDataPath = (data) => {
    return data.orgHierarchy
  }

  const autoGroupColumnDef = {
    headerName: 'Organization Hierarchy',
    width: 300,
    cellRendererParams: {
      suppressCount: true
    }
  }
  return (
    <App>
      <Box>
        <AgGridReact
          containerStyle={{ height: '400px' }}
          columnDefs={columns}
          rowData={data}
          treeData
          getDataPath={getDataPath}
          autoGroupColumnDef={autoGroupColumnDef}
        />
      </Box>
    </App>
  )
}
export default Index

const data = [
  {
    orgHierarchy: ['Erica Rogers'],
    jobTitle: 'CEO',
    employmentType: 'Permanent',
    email: 'erica.rogers@acme.com'
  },
  {
    orgHierarchy: ['Erica Rogers', 'Malcolm Barrett'],
    jobTitle: 'Exec. Vice President',
    employmentType: 'Permanent',
    email: 'malcolm.barrett@acme.com'
  },
  {
    orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Esther Baker'],
    jobTitle: 'Director of Operations',
    employmentType: 'Permanent',
    email: 'esther.baker@acme.com'
  },
  {
    orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Esther Baker', 'Brittany Hanson'],
    jobTitle: 'Fleet Coordinator',
    employmentType: 'Permanent',
    email: 'brittany.hanson@acme.com'
  },
  {
    orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Esther Baker', 'Brittany Hanson', 'Leah Flowers'],
    jobTitle: 'Parts Technician',
    employmentType: 'Contract',
    email: 'leah.flowers@acme.com'
  },
  {
    orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Esther Baker', 'Brittany Hanson', 'Tammy Sutton'],
    jobTitle: 'Service Technician',
    employmentType: 'Contract',
    email: 'tammy.sutton@acme.com'
  },
  {
    orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Esther Baker', 'Derek Paul'],
    jobTitle: 'Inventory Control',
    employmentType: 'Permanent',
    email: 'derek.paul@acme.com'
  },
  {
    orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Francis Strickland'],
    jobTitle: 'VP Sales',
    employmentType: 'Permanent',
    email: 'francis.strickland@acme.com'
  },
  {
    orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Francis Strickland', 'Morris Hanson'],
    jobTitle: 'Sales Manager',
    employmentType: 'Permanent',
    email: 'morris.hanson@acme.com'
  },
  {
    orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Francis Strickland', 'Todd Tyler'],
    jobTitle: 'Sales Executive',
    employmentType: 'Contract',
    email: 'todd.tyler@acme.com'
  },
  {
    orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Francis Strickland', 'Bennie Wise'],
    jobTitle: 'Sales Executive',
    employmentType: 'Contract',
    email: 'bennie.wise@acme.com'
  },
  {
    orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Francis Strickland', 'Joel Cooper'],
    jobTitle: 'Sales Executive',
    employmentType: 'Permanent',
    email: 'joel.cooper@acme.com'
  }
]

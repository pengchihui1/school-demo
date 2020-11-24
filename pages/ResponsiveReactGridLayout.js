
import React from 'react'

const ResponsiveReactGridLayout = ({ props, children }) => {
  return (
    <ResponsiveReactGridLayout
      className='layout'
      {...props}
      layouts={layouts}
      onLayoutChange={(layout, layouts) =>
        this.onLayoutChange(layout, layouts)}
    >
      {children}
    </ResponsiveReactGridLayout>
  )
}

export default ResponsiveReactGridLayout

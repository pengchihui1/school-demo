import React, { useContext } from 'react'

export const HelloContext = React.createContext(null)

const Hello = ({ children, itemOnClick }) => {
  let left = null
  let right = null
  let center = null
  children.forEach(c => {
    if (c.type.name === 'Left') left = c
    if (c.type.name === 'Right') right = c
    if (c.type.name === 'Center') center = c
  })
  return (
    <HelloContext.Provider value={itemOnClick}>
      {left}
      {center}
      {right}
    </HelloContext.Provider>
  )
}

export const Left = ({ children }) => {
  const itemOnClick = useContext(HelloContext)
  return (
    <div onClick={() => itemOnClick(children)}>
      <b>{children}</b>
    </div>
  )
}

export const Right = ({ children }) => {
  const itemOnClick = useContext(HelloContext)
  return (
    <div onClick={() => itemOnClick(children)}>
      <b>{children}</b>
    </div>
  )
}

export const Center = ({ children }) => {
  const itemOnClick = useContext(HelloContext)
  return (
    <div onClick={() => itemOnClick(children)}>
      <b>{children}</b>
    </div>
  )
}

export default Hello

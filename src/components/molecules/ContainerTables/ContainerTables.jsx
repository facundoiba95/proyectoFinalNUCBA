import React, { useContext } from 'react'
import { TableContainerStyle } from './ContainerTablesStyles'
import { ApiContext } from '../../../context/ApiContext'

const ContainerTables = ({children}) => {
  const { isAll } = useContext(ApiContext);

  return (
    <TableContainerStyle isAll={isAll}>
        {children}
    </TableContainerStyle>
  )
}

export default ContainerTables
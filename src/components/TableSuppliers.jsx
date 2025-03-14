import React from 'react'
import TableRowData from './TableRowData'

function TableSuppliers() {
  return (
    <table className='table table-dark table-striped table-hover table-bordered table-sm caption-top'>
        <caption className='caption text-white text-center'>Lista de Proveedores</caption>
        <thead>
            <tr>
                <th>Empresa</th>
                <th>Contacto</th>
                <th>Telefono</th>
                <th>Email</th>
                <th>Opciones</th>
            </tr>
        </thead>
        <TableRowData />
    </table>
  )
}

export default TableSuppliers
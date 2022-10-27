import React from 'react'
import { Link } from 'react-router-dom'
import './table.css'

export default function Table({ data, DeleteProduct }) {
    console.log(data)
    return (
        <div className='container-table'>
            <table>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Produto</th>
                        <th>Descrição</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th><img style={{ width: '100px' }} alt="img" title="" src={data.image} /></th>
                        <td>{data.product}</td>
                        <td>{data.description}</td>
                        <td>{data.quantity}</td>
                        <td>{data.value}</td>
                        <td>

                            <Link to={`/edit/${data._id}`}>Detalhes</Link>
                            <button onClick={() => { DeleteProduct(data._id) }} >deletar</button>
                        </td>
                    </tr>

                </tbody>

            </table>

        </div >
    )
}

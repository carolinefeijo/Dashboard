import React from 'react'
import './table.css'

export default function Table() {
    return (
        <div className='container-table'>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Foto</th>
                        <th>Produto</th>
                        <th>Descrição</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <th><img style={{width:'100px'}} alt="" title="" src="https://cf.shopee.com.br/file/48d484e9a80aa215b1fdf3f3ac215715_tn" /></th>
                        <td>Blusa Listrada</td>
                        <td>Blusa de fortaleza com detalhes de onça</td>
                        <td>20</td>
                        <td>R$55,00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

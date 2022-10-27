import React, { useState, useEffect } from 'react'
import './home.css'

import ButtonCreate from '../../components/ButtonCreate';
import Table from '../../components/Table';

import { fetchListProduct, fetchDeleteProduct } from '../../services/users';

export const Home = () => {
    const [ListProduct, setlistProduct] = useState([])

    const GetListProduct = async () => { // lista de produtos
        const data = await fetchListProduct();
        setlistProduct(data)
    }

    const DeleteProduct = async (id) => {
        const data = await fetchDeleteProduct(id);
        alert(data.message)
        GetListProduct()   
    }

    useEffect(() => {
        GetListProduct()
    }, []);


    return (
        <div className='container-home' >

            <div className='container-nav-main'>
                <div className='container-nav'>
                    <h1>Lizzy Modas</h1>
                    <ButtonCreate />
                </div>
            </div>

            <div className='container-main'>
               {ListProduct.map((data) => <Table data={data} key={data._id} DeleteProduct={DeleteProduct} />)}
            </div>
            
        </div>
    )
}

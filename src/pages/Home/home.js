import React from 'react'
import ButtonCreate from '../../components/ButtonCreate'
import Table from '../../components/Table'


import './home.css'

export const Home = () => {
    return (
        <div className='container-home' >

            <div className='container-nav-main'>
                <div className='container-nav'>
                    <h1>Lizzy Modas</h1>
                    <ButtonCreate />
                </div>
            </div>

            <div className='container-main'>
                <Table />
            </div>

        </div>
    )
}

import React, { useState } from 'react'
import './style.css'

import { fetchNewProduct } from '../../services/users'


const Form = () => {

  const [image, setImage] = useState("")
  const [product, setProduct] = useState("")
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState("")
  const [value, setValue] = useState("")



  const createNewProduct = async () => { // criar novo produto
    const data = await fetchNewProduct(image, product, description, quantity, value);
    if (data.message === "produto criado com sucesso") {
      window.location.href = 'http://localhost:3000/';
    } else {
      console.log("naõ deu")
    }
  }

  const validInput = (e) => { // validar informação do formulario
    e.preventDefault();
    if (image && product && description && quantity && value !== "") {
      return createNewProduct()
    } else {
      return alert("PREENCHA O CAMPO")
    }
  }

  return (
    <div className='container-form'>
      <h1>Inserir produto</h1>
      <form onSubmit={validInput}>

        <div className='div-container-input'>
          <label className='label-text' htmlFor='img'> Foto</label>
          <input className='style-input-img' type="file" accept='file' name='image' onChange={(e) => setImage(e.target.value)} value={image} />
        </div>


        <div className='div-container-input'>
          <label className='label-text' htmlFor='product'> Produto</label>
          <input className='style-input' type="text" name='product' placeholder='Digite o produto' onChange={(e) => setProduct(e.target.value)} value={product} />
        </div>

        <div className='div-container-input'>
          <label className='label-text' htmlFor='value' > Valor</label>
          <input className='style-input' type="number" name='value' placeholder='Digite o valor' onChange={(e) => setValue(e.target.value)} value={value} />
        </div>

        <div className='div-container-input'>
          <label className='label-text' htmlFor='quantity' > Quantidade</label>
          <input className='style-input' type="number" name='age' placeholder='Digite a quantidade' onChange={(e) => setQuantity(e.target.value)} value={quantity} />
        </div>

        <div className='div-container-input'>
          <label className='label-text' htmlFor='description' > Descrição</label>
          <input className='style-input-description' type="text" name='description' placeholder='Digite a descrição' onChange={(e) => setDescription(e.target.value)} value={description} />
        </div>

        <input className='custom-input-button' type="submit" value="Enviar" />

      </form>
    </div>

  )
}

export default Form;
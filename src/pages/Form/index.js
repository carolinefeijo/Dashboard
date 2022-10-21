import React, { useState } from 'react'
import './style.css'



const Form = () => {
  const [product, setProduct] = useState("")
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState("")
  const [value, setValue] = useState("")


  const validInput = (e) => {
    e.preventDefault();
    if (product && description && quantity && value !== "") {
      return alert("todos campos preenchidoss")
    } else {
      return alert("PREENCHA O CAMPO")
    }
  }

  return (
    <div className='container-form'>
      <form onSubmit={validInput}>

      <div className='div-container-input'>
          <label className='label-text' htmlFor='product'> Produto</label>
          <input className='label-text-secundar' type="text" name='product' placeholder='Digite o produto' onChange={(e) => setProduct(e.target.value)} value={product} />
        </div>


        <div className='div-container-input'>
          <label className='label-text' htmlFor='product'> Produto</label>
          <input className='label-text-secundar' type="text" name='product' placeholder='Digite o produto' onChange={(e) => setProduct(e.target.value)} value={product} />
        </div>

        <div className='div-container-input'>
          <label className='label-text' htmlFor='description' > Descrição</label>
          <input className='label-text-secundar-description' type="text" name='description' placeholder='Digite a descrição' onChange={(e) => setDescription(e.target.value)} value={description} />
        </div>

        <div className='div-container-input'>
          <label className='label-text' htmlFor='quantity' > Quantidade</label>
          <input className='label-text-secundar' type="number" name='age' placeholder='Digite a quantidade' onChange={(e) => setQuantity(e.target.value)} value={quantity} />
        </div>


        <div className='div-container-input'>
          <label className='label-text' htmlFor='value' > Valor</label>
          <input className='label-text-secundar' type="number" name='value' placeholder='Digite o valor' onChange={(e) => setValue(e.target.value)} value={value} />
        </div>


        <input className='custom-input-button' type="submit" value="Enviar" />

      </form>

    </div>

  )
}

export default Form;
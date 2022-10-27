import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchUpdateProduct, fetchEditProduct } from '../../services/users';

const EditProduct = () => {
  const { id } = useParams();

  // const [image, setImage] = useState("");
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [value, setValue] = useState("");

  const GetEditProduct = async () => {
    const data = await fetchEditProduct(id)
    // setImage(data.image)
    setProduct(data.product)
    setDescription(data.description)
    setQuantity(data.quantity)
    setValue(data.value)
  }


  const uptadeProduct = async () => {
    const product = {
      // image,
      product,
      description,
      quantity,
      value
    }
    const data = await fetchUpdateProduct(product,id)

  }

  useEffect(() => {
    GetEditProduct()
  }, [])


  return (
    <div>
      <form >

        <div className='div-container-input'>
          <h1>EDITAR produto</h1>
          <p> ID : {id}  </p>
          <label className='label-text' htmlFor='img'> Foto</label>
          {/* <input className='style-input-img' type="file" accept='file' name='image' onChange={(e) => setImage(e.target.value)} value={image} /> */}
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


        <input className='custom-input-button' type="submit" value="Enviar" onClick={uptadeProduct} />

      </form>

    </div>
  )
}

export default EditProduct
import React, { useState } from 'react'
// imports from firebase
import { db, storage } from '../Firebase/firebaseConfig';
import { addDoc,collection } from 'firebase/firestore';
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage'
import "./AddFoodData.css";
const AddFoodData = () => {
    const [name,setName]=useState()
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price,setPrice]=useState('')
    const [image,setImage]=useState(null)
    const [address,setAddress]=useState('')
    const [phone,setPhone]=useState('')
    // const [imageUrl,setImageUrl]=useState('')
    // console.log(name, description, category, price, image, address, phone);
    
    const handleSubmit = (e) => {
      e.preventDefault()
      
      if (image == null) {
        alert('Please select an image')
        return
      }
      else {
        const imageRef = ref(storage, `FoodImages/${image.name}`)
        uploadBytes(imageRef, image)
          .then(() => {
            alert('Image uploaded successfully')
            getDownloadURL(imageRef)
              .then((url) => {
                // console.log(url);

                const foodData = {
                  name,
                  description,
                  category,
                  price,
                  imageUrl:url,
                  address,
                  phone,
                };
                console.log(foodData);
                try {
                    const docRef = addDoc(collection(db, "FoodData"), foodData);
                    alert('data added succesfully', docRef.id);
                }
                catch (error) {
                    alert('Error adding document:', error)
                }
              })
          })
          .catch((error) => {
          alert(error.message)
        })
      }

       
    }

  return (
    <div className="form_outer">
      <h1>Add Food Data</h1>
      <form className="form_inner">
        <label>Food Name</label>
        <input
          type="text"
          name="food_name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label>Food Description</label>
        <input
          type="text"
          name="food_name"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />
        <label>Food category</label>
        <input
          type="text"
          name="food_category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <br />
        <label>Food Price</label>
        <input
          type="number"
          name="food_name"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <br />
        <label>Food Image</label>
        <input
          type="file"
          name="food_name"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <br />
        <label>Restaurant address</label>
        <input
          type="text"
          name="food_name"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <br />
        <label>Restaurant Phone</label>
        <input
          type="tel"
          name="food_name"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <br />
        <button onClick={handleSubmit}>Upload Data </button>
      </form>
    </div>
  );
}

export default AddFoodData
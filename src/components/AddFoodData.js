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
//
    const [type,setType]=useState('')
    const [mealType,setMealType]=useState('')
    const [addon,setAddon]=useState('')
    const [addonPrice, setAddonPrice] = useState('')
    
  //address
  const [phone, setPhone] = useState('')
    const [email,setEmail]=useState('')
    const [addressBuilding, setAddressBuilding] = useState("");
    const [addressStreet, setAddressStreet] = useState("");
    const [addressCity, setAddressCity] = useState("");
    const [addressPin, setAddressPin] = useState("");


    
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
                  imageUrl: url,
                  type,
                  mealType,
                  addon,
                  addonPrice,
                  phone,
                  email,
                  addressBuilding,
                  addressStreet,
                  addressCity,
                  addressPin,
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
        <div className='form_row'>
          <div className="form_col">
            <label>Food Price</label>
            <input
              type="text"
              name="food_price"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="form_col">
            <label>Food Type</label>
            <select
              type="text"
              name="food_price"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            >
              <option value='null'>select food type</option>
              <option value='veg'>Veg</option>
              <option value='non_veg'>Non-veg</option>
            </select>
          </div>
          
        </div>
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
            // setAddress(e.target.value);
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
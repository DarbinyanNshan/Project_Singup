import React from "react";
import "./style.css"
import { useState } from "react"



export  const Dashboard  = () => {

  const [btn,setBtn] = useState(false)
    const Change = ()=>{
        setBtn(!btn)
      } 

  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  
  };
  const [btn_2,setBtn_2] = useState(false)
    const Change_2 = ()=>{
        setBtn_2(!btn_2)
      } 
   
    const [title,setTitle] = useState('')
    const [title1,setTitle1] = useState('')
    const [age,setAge] = useState('')
    const [position,setPosition] = useState('')


   

    return <>
    <div>
      <div className="profile">
         {btn_2? 
            <div className="images">
            {selectedImages &&
           selectedImages.map((image) => {
            return (
              <div key={image} className="image">
                <img src={image}  alt="upload" />
               
               </div>
               );
              })}
              <div>
          <h2 className="frist_name1">{title}<p className="frist_name2">{title1}</p></h2>
          <p className="age1">{age}</p>
          <p className="position1">{position}</p>
          </div>
          </div> : null} 
          
       
        </div>
      <div className="form">
             <button className="form_btn" onClick={Change}>Edit User</button>
             {btn? <div className="form_1">
           <div>
              <div className="first_name">
                <p>First Name</p>
                <input type="text" placeholder="First Name" value={title}  onChange={(e) => setTitle(e.target.value)} />
                
              </div>

              <div className="last_name">
                <p>Last Name</p>
                <input type="text" placeholder="Last Name"  onChange={(e) => setTitle1(e.target.value)} />
              </div>

              <div className="age">
                <p>Age</p>
                <input type="number" placeholder="Age"  value={age}  onChange={(e) => setAge(e.target.value)}/>
              </div>
              
              <div className="gander">
                <p>Gander</p>
                 <input   className="gander_input" type="radio" name="fav_language"/>
                   <label >Male</label>
                 <input className="gander_input" type="radio" name="fav_language" />
                   <label>Famale</label>
                
              </div>

            </div>
              

            <div>
              <div className="position">
                <p>Position</p>
                <input type="text" placeholder="position"  value={position}  onChange={(e) => setPosition(e.target.value)}/>
              </div>

              <div className="email">
                <p>Email</p>
                <input type="email" placeholder="Email" />
              </div>

              <div className="phone_number">
                <p>Phone Number</p>
                <input type="text" placeholder="Phone Number" />
              </div>

              <div className="phone_number">
                <p>Date of Birth</p>
                <input type="date" placeholder="Phone Number" />
              </div>
                   

        <section className="section">
           <label><p className="profil_img"> Profile Image</p>
           <input
           className="input_btn"
           type="file"
           name="images"
           onChange={onSelectFile}
           multiple
            accept="image/png , image/jpeg, image/webp"
           />
           </label>
          <br />
          <div className="images">
           {selectedImages &&
           selectedImages.map((image) => {
            return (
              <div key={image} className="image">
                <img src={image}  alt="upload" />
               
               </div>
               );
              })}
          </div>
        </section>
        <button className="save_btn" onClick={Change_2}>Save Changes</button>
           </div>

             
               
            </div>: null } 
      

         </div>
         </div>
          
  
    </>
    }


 





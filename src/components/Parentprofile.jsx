
import styled from "styled-components";
import {Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import Select from 'react-select';
// import axios from "axios";




export const StyledSchoolProfile = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 50px auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 16px;
  background: #f5f6f899;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    max-width: 100%;
  }

  
`;
export const StyledForm = styled(Form)`
padding: 20px;
margin: 50px;


`
export const Formgroup = styled.div`
  margin-bottom: 1.1rem;
  display: flex;
 gap: 50px;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;
export const StyledField = styled(Field)`
  display: flex;
  justify-content: center;
  width: 70%; 
  height: 1rem;
  padding: 0.8rem 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #6e7fd7;
  outline: none;
  font-size: 1rem;
  align-items: center;
  border-radius: 1.2rem;
  flex-shrink: 0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);

`;
export const FormButton = styled.button`
  display: flex;
  width: 65%;
  height: 1.5rem;
  padding: 20px 20px;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex-shrink: 0;
  border-radius: 25px;
  font-size: 1.2rem;
  background: linear-gradient(0deg, #6e7fd7 0%, #6e7fd7 100%), #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  color: #fff;
  outline: none;
  border: none;
  font-weight: bold;
  margin-inline: auto;
`;

export const Top = styled.div``;
export const Bottom = styled.div``;

export const Parentprofile = () => {
  const [image, setImage] = useState("null")

  const [userData, setUserData] = useState({
    address: "",
    location: "",
    socialHandles: "",
    dateOfBirth: "",
    languages: [],
    
  });

  const languages = [
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value:'yoruba', label: 'Yoruba'},
    { value:'igbo', label: 'Igbo'},
    { value:'german', label: 'German'},
    { value:'hausa', label: 'Hausa'},  
    { value:'arabic', label: 'Arabic'},
    { value:'japanese', label: 'Japanese'},
    { value:'russian',label: 'Russian'},
    { value:'hindi', label: 'Hindi'},
    { value:'punjabi', label: 'Punjabi'},
    {value:'italian', label: 'Italian'},
  ];


  });

  const validationSchema = Yup.object({
    address: Yup.string().required("Address is required"),
    location: Yup.string().required("Location is required"),
    socialHandles: Yup.string().required("kindly input one handle")
  
  });

  // will be fetching the user data from the api here
  useEffect(() =>{

    const fetchUserData = async () => {
      try{
        const response = await fetch();
        const data = await response.json();
        setUserData(data);

      }catch (error) {
        console.log("Error fetching User data", error)
      }
    };
    fetchUserData();



  }, []);

  const isUpdate = Object.values(userData).some(value => value !== "");

  const handleSubmit = async (values) => {
    try {
      
      // Use the appropriate API endpoint for creating or updating the profile
      const apiEndpoint = isUpdate ? "your-update-api-endpoint" : "your-create-api-endpoint";
  
      const response = await fetch(apiEndpoint, {
        method: isUpdate ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify(values),
      });
  
      if (response.ok) {
        console.log(isUpdate ? "Profile updated successfully!" : "Profile created successfully!");
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // function handleUpload(){
  //   if (!image){
  //     console.log("error inputing file");
  //     return;
  //   }
  //   const FormData = new FormData()
  //   FormData.append("image", image)

  //   axios.post("", formData).then((res) => {
  //     console.log(res.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  return (
    <StyledSchoolProfile>
        <>
        <img src="assets/profile.jpg" width="200px"/>
      <input type="file" name="file" onChange={(e) => {setImage(e.target.files[0])}}/>
      <h3>Ramadan</h3>
      <button>Edit Image</button>
        </>
      
      <Formik
        initialValues={userData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <Formgroup>
            <label htmlFor="address">Address</label>
            <StyledField
              type="text"
              id="address"
              name="address"
            /> 
          </Formgroup>
          <ErrorMessage name="address" component="span" style={{ color: "red" }} />

          <Formgroup>
            <label htmlFor="location">Location</label>
            <StyledField
              type="text"
              id="location"
              name="location"
            />
            
          </Formgroup>
          <ErrorMessage name="location" component="span" style={{ color: "red" }} />

          <Formgroup>
            <label htmlFor="socialHandles">Social Handles</label>
            <StyledField
              type="text"
              id="socialHandles"
              name="socialHandles"
            />
           
          </Formgroup>
          <ErrorMessage name="socialHandles" component="span" style={{ color: "red" }} />

          <Formgroup>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <StyledField
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
            />
          </Formgroup>

          <Formgroup>
            <label htmlFor="language">Languages</label>
            <StyledField
              name="language"
              render={({ field, form }) => (
                  <Select
                       {...field}
                       options={languages}
                       isMulti
                       onChange={(options) => form.setFieldValue('languages', options)}
                       onBlur={() => form.setFieldTouched('languages', true)}
                          />
                        )}
            
            ></StyledField>
              
          </Formgroup>
          <ErrorMessage name="language" component="span" style={{ color: "red" }} />

          <Formgroup>
            <label htmlFor="occupation">Occupation</label>
            <StyledField
              type="text"
              id="occupation"
              name="Occupation"
            />
            
          </Formgroup>
          <ErrorMessage name="occupation" component="span" style={{ color: "red" }} />

          {/* Add similar input fields for other details */}
          <FormButton type="submit">Save</FormButton>
        </StyledForm>
      </Formik>
    </StyledSchoolProfile>
  );
};
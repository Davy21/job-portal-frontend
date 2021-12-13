import React, { useEffect,useState } from 'react'
import styled from 'styled-components';
import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Footer from '@sections/Footer';
import { Section, Container } from '@components/global';
import { Formik, } from 'formik';
import * as Yup from "yup";
import { Form, Button, Row, Col,InputGroup,DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { submitJobForm } from "../services/jobFormService"
import { uploadFile } from "../services/uploadFileService"
import { v4 as uuid } from 'uuid';
import { navigate } from '@reach/router';

const JobForm = (props) => {

  const unique_id = uuid();

  let jobTitle , jobLocation;
  if(props.location.state){
    jobTitle = props.location.state.job.jobTitle;
    jobLocation = props.location.state.job.jobLocation;
  }

  const initialValues = {
    firstName: "",
    lastName: "",
    jobTitle: jobTitle,
    yearsExperience: "",
    preferredLocation: jobLocation,
    hearAboutVacancy: "",
    noticePeriod: "",
    skillSetsArr: [],
    contactNo: "",
    email: "",
    address: "",
    resumePath: ""
  };

  const options = [
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'ia', text: 'Information Architecture', value: 'ia' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
    { key: 'meteor', text: 'Meteor', value: 'meteor' },
    { key: 'node', text: 'NodeJS', value: 'node' },
    { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
    { key: 'python', text: 'Python', value: 'python' },
    { key: 'rails', text: 'Rails', value: 'rails' },
    { key: 'react', text: 'React', value: 'react' },
    { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
    { key: 'ruby', text: 'Ruby', value: 'ruby' },
    { key: 'ui', text: 'UI Design', value: 'ui' },
    { key: 'ux', text: 'User Experience', value: 'ux' },
  ]

  const validationSchema = Yup.object().shape({
    firstName : Yup.string().required("First name is a required field"),
    lastName : Yup.string().required("Last name is a required field"),
    jobTitle : Yup.string().required("Job title is a required field"),
    yearsExperience : Yup.number().required("Number of Years' Experience is a required field").positive().integer()
                      .typeError("Only number is allowed"),
    preferredLocation : Yup.string().required("Preferred location is a required field"),
    noticePeriod: Yup.number().required("Notice Period is a required field").positive().integer()
                  .typeError("Only number is allowed"),
    contactNo: Yup.string().required("Contact no. is a required field"),
    email: Yup.string().email().required("Email is a required field"),
    address: Yup.string().required("Address is a required field")
  })

  function fileUploadEvent(event){
    let file = event.target.files[0];
    console.log(file);
    let ext =  file.name.split('.').pop();
    uploadFile(file,unique_id + "." + ext);
  }

  return (
  <Layout>
    <Navbar />
        <Section>
        <Container>
          <h1>Job Application Form</h1><hr/>
          <Formik 
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            validate={values =>{
              const errors = {};
              if(!values.hearAboutVacancy){
                errors.hearAboutVacancy = "Please select an option"
              }

              if(values.skillSetsArr && values.skillSetsArr.length <= 0){
                errors.skillSetsArr = "Skillsets is a required field"
              }
              
              if(!values.resumePath){
                //errors.resumePath = "Please upload a resume in .doc or .pdf format"
              }

              return errors;
            }}
            onSubmit={(values, {setSubmitting, resetForm}) => { 
              setSubmitting(true);
              values.FormId = unique_id;

              submitJobForm(values).then(response => {
                if(response.status === 201){
                  console.log("form submitted")
                  navigate("/submitSuccess")
                }else{
                  console.log("form failed to submit")
                  navigate("/submitFailure")
                }
              })

              resetForm();
              setSubmitting(false);
              
            }}>
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
                isSubmitting
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group as={Row} className="mb-3" controlId="formFirstName">
                    <Form.Label column sm="2">
                      First Name :
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control type="text" name="firstName" placeholder="First Name" onChange={handleChange} onBlur={handleBlur} value={values.firstName}/>
                      {errors.firstName && touched.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formLastName">
                    <Form.Label column sm="2">
                      Last Name :
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control type="text" name="lastName" placeholder="Last Name" onChange={handleChange} onBlur={handleBlur} value={values.lastName}/>
                      {errors.lastName && touched.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formJobTitle">
                    <Form.Label column sm="2">
                      Job Title :
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control type="text" name="jobTitle" placeholder="Job Title" onChange={handleChange} onBlur={handleBlur} value={values.jobTitle}/>
                      {errors.jobTitle && touched.jobTitle && <ErrorMessage>{errors.jobTitle}</ErrorMessage>}
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formYeardExperience">
                    <Form.Label column sm="3">
                      Number of Years' Experience :
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control type="text" name="yearsExperience" placeholder="Number of Years' Experience" onChange={handleChange} onBlur={handleBlur} value={values.yearsExperience}/>
                      {errors.yearsExperience && touched.yearsExperience && <ErrorMessage>{errors.yearsExperience}</ErrorMessage>}
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPreferredLocation">
                    <Form.Label column sm="2">
                      Preferred Location :
                    </Form.Label>
                    <Col>
                      <Form.Control type="text" name="preferredLocation" placeholder="Preferred Location" onChange={handleChange} onBlur={handleBlur} value={values.preferredLocation}/>
                      {errors.preferredLocation && touched.preferredLocation && <ErrorMessage>{errors.preferredLocation}</ErrorMessage>}
                    </Col>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPreferredLocation">
                    <Form.Label>
                      Where did you hear about the vacancy :
                    </Form.Label>
                    <Form.Check
                      type="radio"
                      name="hearAboutVacancy"
                      label="Search"
                      id="hearAboutVacancy-1"
                      onChange={() => setFieldValue("hearAboutVacancy", "Search")}
                    />
                    <Form.Check
                      type="radio"
                      name="hearAboutVacancy"
                      label="Staff"
                      id="hearAboutVacancy-2"
                      onChange={() => setFieldValue("hearAboutVacancy", "Staff")}
                    />
                    <Form.Check
                      type="radio"
                      name="hearAboutVacancy"
                      label="Advertisement"
                      id="hearAboutVacancy-3"
                      onChange={() => setFieldValue("hearAboutVacancy", "Advertisement")}
                    />
                    <Form.Check
                      type="radio"
                      name="hearAboutVacancy"
                      label="Friends"
                      id="hearAboutVacancy-4"
                      onChange={() => setFieldValue("hearAboutVacancy", "Friends")}
                    />
                    {errors.hearAboutVacancy && touched.hearAboutVacancy && <ErrorMessage>{errors.hearAboutVacancy}</ErrorMessage>}
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPreferredLocation">
                    <Form.Label column sm="3">
                      Notice period in your current role :
                    </Form.Label>
                    <Col sm="9">
                      <InputGroup className="mb-3">
                        <Form.Control type="text" name="noticePeriod" placeholder="Notice Period in Day(s)" onChange={handleChange} onBlur={handleBlur} value={values.noticePeriod}/>
                        <InputGroup.Text id="basic-addon2">Day(s)</InputGroup.Text>
                      </InputGroup>
                      {errors.noticePeriod && touched.noticePeriod && <ErrorMessage>{errors.noticePeriod}</ErrorMessage>}
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formSkillSets">
                    <Form.Label column sm="2">
                      Skillsets
                    </Form.Label>
                    <Col sm="10">
                      <Dropdown placeholder='Skills' fluid multiple selection options={options} 
                      name="skillSetsArr"
                      onChange={(field,data) =>{
                        setFieldValue("skillSetsArr",data.value)
                      }} />
                      {errors.skillSetsArr && touched.skillSetsArr && <ErrorMessage>{errors.skillSetsArr}</ErrorMessage>}
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formContactNo">
                    <Form.Label column sm="2">
                      Contact No. :
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control type="text" name="contactNo" placeholder="Contact No." onChange={handleChange} onBlur={handleBlur} value={values.contactNo}/>
                      {errors.contactNo && touched.contactNo && <ErrorMessage>{errors.contactNo}</ErrorMessage>}
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formEmail">
                    <Form.Label column sm="2">
                      Email :
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control type="text" name="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur} value={values.email}/>
                      {errors.email && touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formAddress">
                    <Form.Label column sm="2">
                      Address :
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control type="text" name="address" placeholder="Address" onChange={handleChange} onBlur={handleBlur} value={values.address}/>
                      {errors.address && touched.address && <ErrorMessage>{errors.address}</ErrorMessage>}
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formResume">
                    <Form.Label column sm="2">
                      Upload Resume :
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control type="file" accept=".pdf,.doc" onChange={fileUploadEvent} onBlur={handleBlur} />
                      {!errors.resumePath && !touched.resumePath && <NotificationMessage>*Only .doc and .pdf file formats are allowed</NotificationMessage>}
                      {errors.resumePath && touched.resumePath && <ErrorMessage>{errors.resumePath}</ErrorMessage>}
                    </Col>
                  </Form.Group>
                  <Button variant="success" type="submit" disabled={isSubmitting}>Submit</Button>
                </Form>
              )}
          </Formik>
        </Container>
        </Section>
    <Footer />
  </Layout>

  )
};

const ErrorMessage = styled.span`
  color: red;
`;

const NotificationMessage = styled.span`
  font-style: italic;
`;

export default JobForm;

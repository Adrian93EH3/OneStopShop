import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import AuthContext from "../../contexts/AuthContext";
import Card from "react-bootstrap/Card";
import { Formik } from "formik";
import * as yup from "yup";
import { Redirect } from "react-router-dom";

import API from "../../lib/API";
import { Row } from "react-bootstrap";

const schema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  price: yup.string().required(),
  image: yup.string().required(),
});

function FormExample() {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false)
  const [errorOccured, setErrorOccured] = useState(false);
  console.log(redirectToReferrer);
  if (redirectToReferrer) {
    return <Redirect to="/home" />;
  }

  return (
    <div>
    <Card>
      <div id="formCard"></div>
      {errorOccured ? <div>Error, please try again</div> : null}
      <Formik
        validationSchema={schema}
        onSubmit={
          (values) => {
            console.log(redirectToReferrer);
            API.Products.createProduct(values).then((data) => {
              console.log("returned data", data);
              if(data.data.errors) {
                setErrorOccured(true);
              }else{
                 setRedirectToReferrer(true);
              }
            })
          }

        }
        initialValues={{
          category: "",
          name: "",
          description: "",
          price: "",
          image: "",
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form noValidate onSubmit={handleSubmit} id="form">
            <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.SelectCustomSizeSm">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as="select"
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                >
                  <option>choose an option</option>
                  <option>Backpacks</option>
                  <option>Shoes</option>
                  <option>Tech</option>
                  <option>Clothing</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="validationFormik101">
                <Form.Label>Item Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="validationFormik103">
                <Form.Label>Item Description</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  isInvalid={!!errors.description}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.description}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="validationFormik103">
                <Form.Label>Sale Price</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="Price"
                    aria-describedby="inputGroupPrepend"
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                    isInvalid={!!errors.price}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.price}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>

            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={values.image}
                onChange={handleChange}
                isInvalid={!!errors.image}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.image}
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        )}
      </Formik>
    </Card>
    <Row className="spacing"></Row>
    </div>
  );
}

class Admin extends Component {
  static contextType = AuthContext;

  render() {
    return (
      <div className="col-sm-6 ml-4 mr-4 justify-content-sm-center">
        <FormExample />
      </div>
    );
  }
}

export default Admin;

import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import AuthContext from "../../contexts/AuthContext";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object({
  itemName: yup.string().required(),
  itemDescription: yup.string().required(),
  salePrice: yup.string().required(),
  image: yup.string().required(),
});

function FormExample() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        category: "",
        itemName: "",
        itemDescription: "",
        salePrice: "",
        image: ""
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
                custom
              >
                <option>Backpacks</option>
                <option>Shoes</option>
                <option>Tech</option>
                <option>Clothes</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="validationFormik101">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                name="itemName"
                value={values.itemName}
                onChange={handleChange}
                isInvalid={!!errors.itemName}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.itemName}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="validationFormik103">
              <Form.Label>Item Description</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                name="itemDescription"
                value={values.itemDescription}
                onChange={handleChange}
                isInvalid={!!errors.itemDescription}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.itemDescription}
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
                  placeholder="salePrice"
                  aria-describedby="inputGroupPrepend"
                  name="salePrice"
                  value={values.salePrice}
                  onChange={handleChange}
                  isInvalid={!!errors.salePrice}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.salePrice}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>

          <Form.Group>
          <Form.Label>Image</Form.Label>
            <Form.File
              className="position-relative"
              required
              name="image"
              onChange={handleChange}
              isInvalid={!!errors.image}
              feedback={errors.image}
              id="validationFormik107"
              feedbackTooltip
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}

class Secret extends Component {
  static contextType = AuthContext;

  render() {
    return (
      <div className="col-sm-6 ml-4 mr-4 justify-content-sm-center">
        <FormExample />
      </div>
    );
  }
}

export default Secret;

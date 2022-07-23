import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

//forms and styles
import { Formik, Field, Form } from "formik";
import { Button, Card, FormField } from "semantic-ui-react";


const TodoForm = ( { users } ) => {

  const dispatch = useDispatch();
  let id;
  if( users ){
    id = users.id
  }

const defaultValues = {
  title: "",
  description: "",
  userId: ''
}

const handleSubmit = ( values ) => {
  values.userId  = id;
  values.success = false;
  dispatch(addTodo(values));
};
 
return(
  <div>
    <Card color="orange" fluid>
      <Card.Content className="gradient-custom1">
        <Card.Header>
          <h2>To Do</h2>
        </Card.Header>
      </Card.Content>

      <Card.Content>
        <Formik
          initialValues={defaultValues}
          onSubmit={(value) => {
            handleSubmit(value);
          }}
        >
          <Form className="ui form">
            <FormField>
              <Field
                rows={4}
                name="title"
                id="topic"
                placeholder="title"
                ></Field>
            </FormField>
            <FormField>
              <Field
                rows={2}
                name="description"
                placeholder="description"
                maxLength="200"
                as="textarea"
                ></Field>
            </FormField>
              <Button
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    float: "right",
                  }}
                  inverted
                  color="green"
                  type="submit"
                >
                Add
              </Button>

          </Form>
        </Formik>
      </Card.Content>
    </Card>
  </div>
  );
};

const mapStateToProps = ( state ) => {
  return{
    users: state.users
  };
}

 
export default connect( mapStateToProps, { addTodo } )(TodoForm);


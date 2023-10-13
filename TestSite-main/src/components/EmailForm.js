import React, { useRef } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, FormControl, FormLabel, Input, Stack, Box } from '@chakra-ui/react';
import emailjs from 'emailjs-com';

// Define your EmailJS User ID, Service ID, and Template ID
const emailjsUserID = 'O2-KzZ9z4W55-Wwp_3-Ys';
const serviceID = 'service_5zll00x';
const templateID = 'template_imooplo';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

function MyForm() {
  const messageRef = useRef(null);

  const handleFormSubmit = (values, actions) => {
    emailjs
      .send(serviceID, templateID, {
        from_name: values.name,
        message: values.message,
        reply_to: values.email,
      })
      .then((response) => {
        console.log('Email sent successfully:', response);
        actions.resetForm();
      })
      .catch((error) => {
        console.error('Email failed to send:', error);
      });
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {(props) => (
        <Form>
          <Box
            bg="black" /* Set the background color of the container to black */
            p={4} /* Add padding to the container */
            borderRadius="lg" /* Add rounded corners to the container */
          >
            <Box
              bg="white" /* Set the background color of the form container to white */
              p={4} /* Add padding to the form container */
              borderRadius="lg" /* Add rounded corners to the form container */
            >
              <FormControl id="name" border="2px solid black" p={2} borderRadius="md">
                <FormLabel color="black">Name</FormLabel>
                <Field type="text" name="name" as={Input} />
                <ErrorMessage name="name" component="div" className="error" style={{ color: 'red' }} />
              </FormControl>
              <FormControl id="email" border="2px solid black" p={2} borderRadius="md">
                <FormLabel color="black">Email</FormLabel>
                <Field type="email" name="email" as={Input} />
                <ErrorMessage name="email" component="div" className="error" style={{ color: 'red' }} />
              </FormControl>
              <FormControl id="message" border="2px solid black" p={2} borderRadius="md">
                <FormLabel color="black">Message</FormLabel>
                <Field
                  name="message"
                  as="textarea"
                  rows="5"
                  style={{
                    background: 'white',
                    color: 'black',
                  }}
                />
                <ErrorMessage name="message" component="div" className="error" style={{ color: 'red' }} />
              </FormControl>
              <Button
                bg={'gray.400'}
                color={'black'}
                type="submit"
                isLoading={props.isSubmitting}
                _hover={{
                  bg: 'gray.500',
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default MyForm;

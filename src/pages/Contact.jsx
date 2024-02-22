
  import { Formik, Form, Field, ErrorMessage } from 'formik';
  import * as Yup from 'yup';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faUser, faEnvelope  } from '@fortawesome/free-solid-svg-icons';
  import { Formgroup } from '../components/styles/About.styled';
  import { Buttonstyle } from '../components/styles/About.styled';

  export const Contact = () => {
    const initialValues = {
      name: '',
      email: '',
      textarea: '',
    };

    const validationSchema = Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      textarea: Yup.string().required('Required'),
    });

    return (
      <>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit
        >
          <Form>
            <>
            <Formgroup>
              <FontAwesomeIcon icon={faUser} className="icon" />
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Name"
              />
              <ErrorMessage name="Enter your name" component="div" />
            </Formgroup>
            </>
            <>
            <Formgroup>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage name="Enter a valid email" component="div" />
            </Formgroup>
            </>
            <>
              <Formgroup>
              <Field
                as="textarea" 
                id="textarea"
                name="textarea" 
                placeholder="Message"
                className="textarea"/>
              <ErrorMessage name="message" component="div" />
              </Formgroup>
              
            </>
             <Buttonstyle type="submit">Send
             </Buttonstyle>
          
          </Form>
        </Formik>
      </>
    );
  };

  
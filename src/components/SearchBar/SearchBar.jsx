import { Formik, Form, Field } from 'formik';
import css from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
  return (
    <div className={css.formContainer}>
      <Formik
        initialValues={{
          topic:'',
        }}
        onSubmit={(values, actions)=>{
          onSearch(values.topic.trim());
          actions.resetForm();
        }}
        >
          <Form  className = {css.formik}>
            <label>Search images and photos</label>
              <Field
              className={css.input}
              type="text"
              autoComplete="off"
              autoFocus
              name = 'topic'
              />
              <button type="submit">Search</button>
          </Form>
        </Formik>   
    </div>
  

  )
}

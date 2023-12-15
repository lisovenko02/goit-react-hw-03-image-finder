import { FormBtn, FormImg, Header, InputField } from "./Searchbar.styled"
import { Formik } from 'formik';
import { IoPawOutline } from "react-icons/io5";

export const Searchbar = ({onSearch}) => {
    
    return (
        <Header>
            <Formik
            initialValues={{ query: ''}}
            onSubmit={(values, actions) => {
                onSearch(values.query);
                actions.resetForm();
            }}
            >
            {() => (
                <FormImg>
                <FormBtn type="submit">
                    <IoPawOutline />
                </FormBtn>
                <InputField type="name" name="query" />
                
                </FormImg>
            )}
            </Formik>
        </Header>
)}

import  styled from "styled-components";
import { Form as FormikForm, Field as FormikField, ErrorMessage as ErrorMessageFormik } from 'formik';

export const Form = styled(FormikForm)`
width: 350px;
padding: 8px;
border: 1px solid black;
display: flex;
flex-direction: column;
margin: 0 auto;
gap: 12px;
`

export const Field = styled(FormikField)`
width: 200px;
margin: 0 auto;
`

export const FormLabel = styled.label`
display: flex;
flex-direction: column;
font-size: 16px;
margin: 0 auto;
`
export const ErrorMessage = styled(ErrorMessageFormik)`
font-size: 14px;
color: red;
`
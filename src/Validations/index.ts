import * as yup from 'yup';

export const createTagValidationSchema = yup.object(
    {
        name : yup.string().required('Tag name is required'),
        description : yup.string().required('description is required')
    }
 )


export const createUserValidationSchema = yup.object(
    {
        firstName : yup.string().required('first Name is required').min(6,'first Name must be at least 6 characters'),
        lastName : yup.string().required('Last Name is required').min(5,'Last Name must be at least 5 characters'),
        email : yup.string().required('email is required').email('email is invalid')
    }
)

export const createPostValidationSchema = yup.object(
    {
        title : yup.string().required('Post title is requred').min(6,'title must be min 6 characters'),
        description : yup.string().required('Post description is required').min(12,'Post description must be at least 12 characters'),
        postedDate : yup.date().required('posted Date is required'),
        userId : yup.string().required('user is required')
    }
)

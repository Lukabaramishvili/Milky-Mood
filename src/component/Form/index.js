import React from 'react';

const FormComponent = ({handleSuccess}) => {
    return (
        <form onSubmit = {handleSuccess} >
            <label for="name">Name: </label>
            <input name="name" type="text" required autoComplete="off"/>

            <label for="email">Email address: </label>
            <input name="email" type="email" required autoComplete="off"/>

            <button type="submit">Submit</button>
        </form>
    )
}

export default FormComponent;

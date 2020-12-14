import React from 'react';
import Addtodos from './Addtodos';
import Button1 from './Button1'

function AddForm(handleSubmit,handleChange) {
    return (
        <div>
           <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange}></input>
                <Button1 type="submit" text="ADD" />
            </form>
        </div>
    )
}

export default AddForm

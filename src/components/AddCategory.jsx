import React, { useState } from 'react'
import Input from './Input';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => [...cats, inputValue]);
            setInputValue('');
        } else
            alert('Porfavor ingresar una categoria');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                name='addCategory'
                type="text"
                label='Add Category'
                placeholder="Agregar categoria" required={false}
                defaultValue={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory
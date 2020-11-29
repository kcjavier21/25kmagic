import React from 'react';
import './Form.css';
import successpng from '../imgs/Android-Logo.png'

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>&nbsp;&nbsp;&nbsp;Your account has been successfully created!</h1>
      <img className='form-img-2' src={successpng} alt='success' />
    </div>
  );
};

export default FormSuccess;

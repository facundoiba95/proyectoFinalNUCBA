import React, { useContext, useState } from 'react'
import { CardModalStyles, ContainerModalAuthStyles } from './ModalStyles'
import Button from '../../atoms/Button/Button'
import { AiOutlineClose } from 'react-icons/ai';
import { ApiContext } from '../../../context/ApiContext';

const ModalAuth = ({
    titleModal,
    handleFunctionBtnOne, 
    handleFunctionBtnTwo,
    titleBtnOne,
    titleBtnTwo,
    titleSmall
}) => {
  const { isOpenModal, setIsOpenModal } = useContext(ApiContext);

  return (
    <ContainerModalAuthStyles isOpenModal={isOpenModal}>
        <CardModalStyles>
        <AiOutlineClose className='closeModal' onClick={() => setIsOpenModal(false)}/>
            <h3>{titleModal}</h3>
            <small>{titleSmall}</small>
            <span className='buttons'>
               <Button title={titleBtnOne} handleFunction={handleFunctionBtnOne}/>
               <Button title={titleBtnTwo} handleFunction={handleFunctionBtnTwo}/>
            </span>     
        </CardModalStyles>
    </ContainerModalAuthStyles>
  )
}

export default ModalAuth;
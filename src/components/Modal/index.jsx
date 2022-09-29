import React from 'react'

const Modal = (handleClose) => {

    const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(evento);
    }

    const onClose = () => {
        //se deberia cerrar el modal
        handleClose(false);
    }

    return (
    <div className=''> 
        <form className='' onClick={handleSubmit}>
            <h2>titulo modal</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, assumenda a iste ducimus, similique veritatis accusamus dolorem sed odit alias tempore ipsam? Fuga expedita architecto saepe ullam eum aperiam a.</p>
            <div className='buttons.container'>
                <button className='rounded-button-cancel' type='button' onClick={onClose}>close</button>
                <button className='rounded-button-send' type='submit'>send</button>
            </div>
        </form>
    </div>
)
}

export default Modal
import React from 'react';
import s from './deliveryButton.module.css';

const DeliveryButton = () => {
    return (
        <div>
            <div className={s.button}>
                <div className={s.buttonText}>
                    Доставим завтра до 20:00
                </div>
            </div>
        </div>
    )
};

export default DeliveryButton;
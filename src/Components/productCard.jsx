import React from 'react';
import s from './productCard.module.css'
import Description from './decription/description';
import ProductView from './productView/productView';
import DeliveryButton from './deliveryButton/deliveryButton';

const productCard = () => {
    return (
        <div>
            <div className={s.productCard}>
                <div className={s.back}></div>
                <ProductView />
                <Description />
                <DeliveryButton/>
            </div>
        </div>
    )
};

export default productCard;
import React from "react";
import s from './productView.module.css';

const ProductView = () => {
    return (
        <div>
            <div className={s.productImage}>
                <img src='https://imgpng.ru/d/laptop_PNG101815.png' />
            </div>
            <div className={s.quickView}>
                <h3>Быстрый просмотр</h3>
            </div>
        </div>
    )
};

export default ProductView;
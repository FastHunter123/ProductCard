import React from "react";
import s from './productView.module.css';

const ProductView = () => {
    return (
        <div>
            <div className={s.productImage}>
                <img src='https://imgpng.ru/d/laptop_PNG101815.png' alt="ТУТ ДОЛЖЕН БЫТЬ НОУТБУК" />
            </div>
            <div className={s.quickView}>
                Быстрый просмотр
            </div>
        </div>
    )
};

export default ProductView;
import React from "react";
import s from './description.module.css'

const Description = () => {
    return (
        <div>
            <div className={s.newPrice}>
                <div>50500 P</div>
                <div className={s.withWallet}>С кошельком</div>
            </div>
            <div className={s.oldPrice}>
                67890 P
            </div>
            <div className={s.description}>
                Ноутбук игровой, спортивный, 150 ГБ оперативной
                памяти, 20ТБ SSD
            </div>
            <div className={s.bonusImg}>
                <img src='https://cdn-icons-png.flaticon.com/512/2883/2883375.png' />
            </div>
            <div className={s.reviews}>
                3000 отзывов
            </div>
        </div>
    )
};

export default Description;
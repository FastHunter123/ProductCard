import React from 'react';
import s from './Background.module.css'

const Background = () => {
    return (
        <div>
            <div className={s.productCard}>
                <div className={s.back}></div>
                <div className={s.productImage}>
                    <img src='https://imgpng.ru/d/laptop_PNG101815.png' />
                </div>
                <div className={s.quickView}>
                    <h3>Быстрый просмотр</h3>
                </div>
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
                    <img src='https://cdn-icons-png.flaticon.com/512/3391/3391560.png' />
                </div>
                <div className={s.reviews}>
                    3000 отзывов
                </div>
                <div className={s.button}>
                    <div className={s.buttonText}>
                        Доставим завтра до 20:00
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Background;
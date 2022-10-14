import styles from '../../styles/item.module.scss'
import {FaBtc, FaEthereum} from "react-icons/fa";

export default function Item({item}){
    const bitcoin = item.title === 'bitcoin';
    const ethereum = item.title === 'ethereum';
    const style = {
        fill: 'white',
        minWidth: '20px',
        minHeight: '20px',
    }
    return (
        <>
            <div className={styles.container}>
                {bitcoin && (
                    <div
                        style={{background:'orange'}}
                        className={styles.ico}
                        children={<FaBtc style={style}/>}
                    />
                )}
                {ethereum && (
                    <div
                        style={{background:'#7a8de5'}}
                        className={styles.ico}
                        children={<FaEthereum style={style}/>}
                    />
                )}
                <span
                    className={styles.price}
                    children={item.price}
                />
            </div>
        </>
    )
}
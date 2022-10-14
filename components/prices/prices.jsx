import styles from '../../styles/prices.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import useWebSocket from "react-use-websocket";
import API from "../../consts/API";
import LoaderSpinner from "../loader-spinner/loader-spinner";
import {pricesSlice} from "../../store/reducers/pricesSlice";
import Item from "../item/item";

export default function Prices(){
    const { lastJsonMessage, readyState } = useWebSocket(API);
    const dispatch = useDispatch();

    const isLoading = useSelector(({isLoading}) => isLoading);
    const tokens =useSelector(({tokens}) => tokens);
    const showApp = !isLoading && tokens && tokens.length === 2;

    useEffect(() => {
        if(readyState){
            dispatch(pricesSlice.actions.fetched());
        }
    },[readyState])

    useEffect(() => {
        if(lastJsonMessage){
            dispatch(pricesSlice.actions.setPrices(lastJsonMessage));
        }
    },[lastJsonMessage])

    return (
        <>
            {!showApp && (<LoaderSpinner/>)}
            {showApp && (
                <>
                    <div className={styles.container}>
                        {tokens.map((token,key) => <Item key={key} item={token}/>)}
                    </div>
                </>
            )}
        </>
    )
}
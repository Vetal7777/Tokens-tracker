import styles from '../../styles/loader-spinner.module.scss'
import {Oval} from "react-loader-spinner";
import React from "react";

export default function LoaderSpinner(){
    return (
        <>
            <div className={styles.container}>
                <Oval
                    ariaLabel="loading-indicator"
                    height={100}
                    width={100}
                    strokeWidth={5}
                    strokeWidthSecondary={1}
                    color="#1c1c1c"
                    secondaryColor="white"
                />
            </div>
        </>
    )
}
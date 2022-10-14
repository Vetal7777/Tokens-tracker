import '../styles/globals.scss'
import styles from '../styles/my-app.module.scss'
import Prices from "../components/prices/prices";
import {Provider} from "react-redux";
import {setupStore} from "../store/store";

function MyApp() {
    const store = setupStore();

    return (
        <>
            <Provider store={store}>
                <div className={styles.container}>
                    <Prices/>
                </div>
            </Provider>
        </>
    )
}

export default MyApp

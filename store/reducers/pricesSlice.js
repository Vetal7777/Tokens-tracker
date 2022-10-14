import {createSlice} from "@reduxjs/toolkit";
import initialState from "../../state/state";

export const pricesSlice = createSlice({
    name: 'Prices',
    initialState,
    reducers: {
        fetched(state){
            state.isLoading = false;
        },
        setPrices(state,action){
            const lastTokens = Object.keys(action.payload).reduce((tokens,tokenName) => {
                const token = {
                    title: tokenName,
                    price: action.payload[tokenName]
                };
                tokens.push(token)
                return tokens;
            },[]);
            const getUpdatedTokens = () => {
                switch (true){
                    case !state.tokens:
                        return lastTokens
                    break;
                    case state.tokens && state.tokens.length === 2:
                        return state.tokens.map(token => lastTokens.find(lastToken => lastToken.title === token.title) ?? token);
                    break;
                    case state.tokens && state.tokens.length === 1:
                        return !lastTokens.find(({title}) => title === state.tokens[0].title) ? [...lastTokens,state.tokens[0]] : lastTokens;
                    break;
                }
            }
            state.tokens = getUpdatedTokens();
        }
    }
})

export default pricesSlice.reducer;
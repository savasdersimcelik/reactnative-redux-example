import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector,  } from "react-redux";
import { imagesActions, imagesReducer } from "./images";

export const actions = {
    image: imagesActions,
}

const reducers = {
    image: imagesReducer
}

export const store  = configureStore({
    reducer: reducers,
    enhancers: [],
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
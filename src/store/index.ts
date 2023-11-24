import { configureStore } from "@reduxjs/toolkit";
import { PeopleType } from "../data/people";
import peopleReducer from "./People/slice";
import favoritesReducer from "./Favorites/slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";



export interface Store {
    people: PeopleType[],
    favorites: PeopleType[]
}


export const store = configureStore<Store> ({

    reducer: {
        people: peopleReducer,
        favorites: favoritesReducer,
    }
})





export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 
                               
                     
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
export const useAppDipatch: () => AppDispatch = useDispatch;
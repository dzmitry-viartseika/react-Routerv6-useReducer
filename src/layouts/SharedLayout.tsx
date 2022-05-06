import { Outlet } from 'react-router-dom';
import TheHeader from "../components/TheHeader/TheHeader";
import {useEffect, useState, useReducer, Reducer} from "react";
import axios from 'axios';

// enum UsersActions {
//     ADD_USER = 'ADD_USER',
//     SET_USERS = 'SET_USERS',
// }
//
// interface ICompany {
//     name: string;
//     catchPhrase: string;
//     bs: string;
// }
//
// interface IAddress {
//     suite: string;
//     city: string;
//     zipcode: string;
//     geo: any;
// }
//
// interface IUser {
//     id: number;
//     website: string;
//     username: string;
//     phone: string;
//     name: string;
//     email: string;
//     company: ICompany;
//     address: IAddress;
// }
//
// interface IPropInitialState {
//     usersList: IUser[] | [];
// }
//
// interface UserAction {
//     type: UsersActions;
//     payload: string;
// }
//
// interface IssueReducer {
//     state: IPropInitialState;
//     action: {
//         type: UsersActions;
//         payload: string;
//     };
// }
//
// const initialStateTest = {
//     usersList: []
// }

const reducer: Reducer<any, any> = (state = [], action) => {
    // const { type, payload } = action;
    switch (action.type) {
        // case UsersActions.ADD_USER: {
        case 'increment': {
            console.log('action.payload', action.payload);
            return {usersList: [...state.usersList, action.payload]}
        }
        case 'decrement': {
            console.log('action.payload', action.payload);
            return {usersList: [...state.usersList, action.payload]}
        }
        default:
            return state;
    }
}
//
// const initialState = {
//     usersList: [],
// }

function SharedLayout(): JSX.Element {
    const [state, dispatch] = useReducer(reducer, {usersList: []});
    const [userName, setUserName] = useState<string>('');

    const changeValue = (event: any): void => {
        setUserName(event.target.value)
    }

    const addNewUser = () => {
        console.log('addNewUser');
        dispatch({
            type: 'increment',
            payload: userName
        })
    }


    useEffect(() => {
        // console.log('state', state);
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                // const persons = ['1','2','3','4','5'];
                // setUsers(persons);
                // dispatch({
                //     type: UsersActions.SET_USERS,
                //     payload: persons,
                // })
                // console.log('state', state);
            });
        console.log('useEffect')
    }, []);

    return (
        <>
            <TheHeader />
            <input type="text" value={userName} onChange={changeValue}/>
            <button onClick={addNewUser}>-</button>
            <br/>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            Count: {state.count}
            {
                state.usersList.map((item: any) => (
                    <div key={item}>
                        {item}
                    </div>
                ))
            }
            <section className='section'>
                <Outlet />
            </section>
        </>
    )
}
export default SharedLayout;

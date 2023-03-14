import { createContext, useContext, useState } from "react";

const StateContext=createContext({
    currentUser:{},
    userToken:null,
    surveys:[],
    setUserToken:()=>{},
    setCurrentUser:()=>{},
})

export const ContextProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState({
            imageUrl:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
         
    })
    const surveysData=[
        {
            "id":1,
            "name":"first text",
            "image_url":"https://images.unsplash.com/photo-1678384979913-5a1007bc4a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            "desc":"this is desc",
            "qs":[
                {
                    "id":1,
                    "type":"text",
                    "q":"what?"
                },
                {
                    "id":3,
                    "type":"check",
                    "q":"what?"
                },
                {
                    "id":4,
                    "type":"text",
                    "q":"what?"
                },
            ]
        },
        {
            "id":2,
            "name":"first text",
            "image_url":"https://images.unsplash.com/photo-1678398315175-32e77ac02145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            "desc":"this is desc",
            "qs":[
                {
                    "id":6,
                    "type":"text",
                    "q":"what?"
                },
                {
                    "id":7,
                    "type":"check",
                    "q":"what?"
                },
                {
                    "id":8,
                    "type":"text",
                    "q":"what?"
                },
            ]
        },
        {
            "id":2,
            "name":"first text",
            "image_url":"https://images.unsplash.com/photo-1678398315175-32e77ac02145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            "desc":"this is desc",
            "qs":[
                {
                    "id":6,
                    "type":"text",
                    "q":"what?"
                },
                {
                    "id":7,
                    "type":"check",
                    "q":"what?"
                },
                {
                    "id":8,
                    "type":"text",
                    "q":"what?"
                },
            ]
        }
    ]
    const [userToken,_setUserToken]=useState(localStorage.getItem('TOKEN') || '')
    const [surveys,setSurveys]=useState(surveysData)
    const setUserToken=(token)=>{
        if (token) {
            localStorage.setItem('TOKEN',token)
        }else{
            localStorage.removeItem('TOKEN')
        }
        _setUserToken(token)
    }
    return (
        <StateContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken,
            surveys
        }}>
            {children}
        </StateContext.Provider>
    )
};

export const useStateContext=()=>useContext(StateContext)
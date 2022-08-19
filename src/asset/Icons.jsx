import React from "react";

export const Icons = ({type}) =>{
    if(type === 'magnifier'){
        return(
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 13L9 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }

    if(type === 'sandwich'){
        <svg width="18" height="10" viewBox="0 0 18 10" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.599976 1.40001C0.599976 0.73727 1.13723 0.200012 1.79998 0.200012H16.2C16.8627 0.200012 17.4 0.73727 17.4 1.40001C17.4 2.06275 16.8627 2.60001 16.2 2.60001H1.79998C1.13723 2.60001 0.599976 2.06275 0.599976 1.40001Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M0.599976 8.60001C0.599976 7.93727 1.13723 7.40001 1.79998 7.40001H16.2C16.8627 7.40001 17.4 7.93727 17.4 8.60001C17.4 9.26275 16.8627 9.80001 16.2 9.80001H1.79998C1.13723 9.80001 0.599976 9.26275 0.599976 8.60001Z" fill="white"/>
        </svg>

    }
}
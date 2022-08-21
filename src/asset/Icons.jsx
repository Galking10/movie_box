import React from "react";

export const Icons = ({type, fill='white'}) =>{
    if(type === 'magnifier'){
        return(
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" >
            <path d="M13 13L9 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }

    if(type === 'sandwich'){
        return(
            <svg width="18" height="10" viewBox="0 0 18 10" fill="white" >
        <path d="M0.599976 1.40001C0.599976 0.73727 1.13723 0.200012 1.79998 0.200012H16.2C16.8627 0.200012 17.4 0.73727 17.4 1.40001C17.4 2.06275 16.8627 2.60001 16.2 2.60001H1.79998C1.13723 2.60001 0.599976 2.06275 0.599976 1.40001Z" />
        <path d="M0.599976 8.60001C0.599976 7.93727 1.13723 7.40001 1.79998 7.40001H16.2C16.8627 7.40001 17.4 7.93727 17.4 8.60001C17.4 9.26275 16.8627 9.80001 16.2 9.80001H1.79998C1.13723 9.80001 0.599976 9.26275 0.599976 8.60001Z" />
        </svg> 
        )
    }

    if(type === 'play'){
        return(
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" >
        <path fillRule="evenodd" clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7.5547 5.16795C7.24784 4.96338 6.8533 4.94431 6.52814 5.11833C6.20298 5.29235 6 5.63121 6 6V10C6 10.3688 6.20298 10.7077 6.52814 10.8817C6.8533 11.0557 7.24784 11.0366 7.5547 10.8321L10.5547 8.83205C10.8329 8.64659 11 8.33435 11 8C11 7.66565 10.8329 7.35342 10.5547 7.16795L7.5547 5.16795Z" fill="white"/>
        </svg>

        )
        
    }

    if(type === 'left'){
        return(
            <svg width="16" height="30" viewBox="0 0 16 30" fill="none" >
            <path d="M15 1L0.999999 15L15 29" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

        )
    }

    if(type === 'right'){
        return(
            <svg width="16" height="30" viewBox="0 0 16 30" fill="none" >
            <path d="M0.999999 1L15 15L1 29" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }
}
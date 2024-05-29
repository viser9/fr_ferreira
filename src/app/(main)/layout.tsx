import Header from "@/components/Header"
import React from "react";

const HomePageLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <>
            <Header />  
            {children}
        </>
    )
}

export default HomePageLayout;
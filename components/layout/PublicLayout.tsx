import React, { FC, PropsWithChildren } from "react";
import PublicNavbar from "../PublicNavbar";


const PublicLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <PublicNavbar />
            {children}
        </>
    );
};

export default PublicLayout;
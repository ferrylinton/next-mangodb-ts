import React, { FC, PropsWithChildren, useEffect } from "react";
import { useRouter } from "next/router";

const SecureLayout: FC<PropsWithChildren> = ({children}) => {


    return (
        <>
            <h1>Scure Layout</h1>
            {children}
        </>
    );
};
export default SecureLayout;
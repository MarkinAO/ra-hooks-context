import React from "react";

type AccessType = {
    access: boolean
    setAccess: Function
}
const inittialValue = {
    access: false, 
    setAccess: () => {}
}
const Access = React.createContext<AccessType>(inittialValue);

export default Access;
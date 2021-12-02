import React, { createContext, useState } from 'react';

export const UserContext = createContext([[], ()=>{}]);

export default function UserProvider({children}) {
  const [users, setUsers] = useState([]);
    return (
        <UserContext.Provider
        value={[users, setUsers]}>
      {children}
      </UserContext.Provider>
    )
}

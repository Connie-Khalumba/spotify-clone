"use client"

import { MyUserContextProvider } from "@/hooks/useUser";

interface  UserProviderProps {
    children: React.ReactNode;  // Children components to be wrapped by UserProvider
}

const UserProvider: React.FC<UserProviderProps> = ({
    children,
}) => {
    return (
        <MyUserContextProvider>
          {children}
        </MyUserContextProvider>
    )
}

export default UserProvider;
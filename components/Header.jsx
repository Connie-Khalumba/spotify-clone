"use client"

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
  }
  

const Header: React.FC<HeaderProps> = ({
    children,
    className,
}) => {
    const router = useRouter();

    const handleLogout = () => {
        // Handle logout in the near future.
    }
    return (
        <div
         className={twMerge}
        >
            
        </div>
    )
}

export default Header;
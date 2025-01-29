"use client";

import { useState, useEffect } from "react";

import Modal from "@/components/Modal"

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
       
    }, []);

    if (!isMounted) {
        return null;
    }
    return (
        <>
        <Modal />
        </>
    );
}

export default ModalProvider;
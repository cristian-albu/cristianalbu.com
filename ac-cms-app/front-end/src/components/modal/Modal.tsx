import { FC, useEffect, useState } from "react";
import { T_Modal } from ".";
import Button from "../button";
import { createPortal } from "react-dom";

const Modal: FC<T_Modal> = ({ target, children, close }) => {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    };

    const toggleModal = () => {
        setShowModal((prev) => !prev);
    };

    useEffect(() => {
        if (close === false) {
            closeModal();
        }
    }, [close]);
    return (
        <div>
            <Button onClick={toggleModal}>{target}</Button>

            {showModal &&
                createPortal(
                    <div className="fixed top-0 left-0 w-full h-full flex justify-end items-center p-5">
                        <div
                            className="absolute top-0 left-0 w-full h-full bg-[#0000000c]"
                            onClick={closeModal}
                        />
                        <div className="relative w-[50%] h-full bg-white rounded-lg shadow-2xl p-10 flex flex-col justify-between">
                            {children}
                            <div className="w-full flex justify-end border-t-2 border-t-black pt-5">
                                <Button onClick={closeModal}>Close</Button>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </div>
    );
};

export default Modal;

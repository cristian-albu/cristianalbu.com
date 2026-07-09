"use client";

import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { T_TextInput, T_TextInputValue } from "../types";
import { Button } from "@/components/general";
import Image from "next/image";
import { TextInput } from "../text-input";

export type T_FileUploadInputProps = {
    data: T_TextInput;
    inputValue: T_TextInputValue;
    changeHandler: (name: string, newVal: T_TextInputValue) => void;
};

const MAX_SIZE_MB = 5;
const ACCEPTED_TYPES = ["image/png", "image/jpeg", "image/webp"];

export const FileUploadInput: FC<T_FileUploadInputProps> = ({
    data,
    inputValue,
    changeHandler,
}) => {
    const inputRef = useRef<null | HTMLInputElement>(null);
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<null | string>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUploadClick = () => {
        inputRef.current?.click();
    };

    const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
        const currFile = e.target.files?.[0] ?? null;

        if (!currFile) return;
        let validationError = "";

        if (!ACCEPTED_TYPES.includes(currFile.type)) {
            validationError = `File type not supported. Use ${ACCEPTED_TYPES.join(", ")}.`;
        }
        if (currFile.size > MAX_SIZE_MB * 1024 * 1024) {
            validationError = `File is too large. Max size is ${MAX_SIZE_MB}MB`;
        }

        if (validationError) {
            setError(validationError);
            setFile(null);
            setPreviewUrl(null);
            return;
        }

        setError("");
        setFile(currFile);
    };

    const handleRemoveFile = () => {
        setError("");
        setFile(null);
        setPreviewUrl(null);
    };

    console.log(loading);

    useEffect(() => {
        if (!file) return;

        const url = URL.createObjectURL(file);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPreviewUrl(url);

        return () => URL.revokeObjectURL(url);
    }, [file]);

    useEffect(() => {}, []);

    return (
        <div className="flex flex-col w-full relative gap-2">
            <TextInput
                data={data}
                inputValue={inputValue}
                changeHandler={changeHandler}
            />
            <div className="flex w-full justify-between items-start">
                <Button>📁 Browse existing files</Button>

                <div className="flex flex-col w-1/2 justify-start items-start">
                    <Button onClick={handleUploadClick} disabled={loading}>
                        ☝️ Choose file
                    </Button>
                    <label className="w-full flex flex-col gap-2">
                        <input
                            ref={inputRef}
                            type="file"
                            className="hidden"
                            disabled={loading}
                            onChange={handleFile}
                        />
                        {previewUrl && file && (
                            <div className="w-full flex flex-col">
                                <Image
                                    src={previewUrl}
                                    width={600}
                                    height={500}
                                    alt="preview"
                                />
                                <p>
                                    {file.name} -{" "}
                                    {(file.size / 1024).toFixed(1)} KB
                                    <span
                                        onClick={handleRemoveFile}
                                        className="cursor-pointer"
                                    >
                                        ❌
                                    </span>
                                </p>
                            </div>
                        )}
                    </label>
                </div>
            </div>
            {error && <p>{error}</p>}
        </div>
    );
};


import { ChangeEvent, FormEvent } from "react";

export type FormValues = {
    name: string;
    email: string;
    subject?: string;
    message?: string;
};

export type FormContextType = {
    values: FormValues;
    handleChange: (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    loading: boolean;
};
"use client";

import React, {
    createContext,
    useCallback,
    useContext,
    useState,
    ReactNode,
    ChangeEvent,
  FormEvent,
} from "react";
import { FormContextType, FormValues } from "@/types/form-types";

const defaultFormValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const FormContext = createContext<FormContextType>({
  values: defaultFormValues,
  handleChange: () => {},
  handleSubmit: () => {},
  loading: false,
});

interface FormProviderProps {
  children: ReactNode;
};

const FormContextProvider = ({ children }: FormProviderProps) => {
  const [form, setForm] = useState<FormValues>(defaultFormValues);
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);

      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        alert("Message stored! (Check localStorage)");

        setForm(defaultFormValues);
      } catch (error) {
        console.error("Form submit error:", error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return (
    <FormContext.Provider
      value={{
        values: form,
        handleChange,
        handleSubmit,
        loading,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);

export default FormContextProvider;

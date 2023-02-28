import { useState } from "react";

const useFormSubmit = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleErrors = (response: Response) => {
    setLoading(false);
    if (!response.ok) {
      console.log(response);
      setError(response.statusText);
    } else {
      setError(null);
      setSuccess(true);
    }
    return response;
  };
  const submit = (data: any) => {
    setLoading(true);
    return fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-us", ...data }),
    }).then(handleErrors);
  };

  return {
    error,
    success,
    loading,
    submit,
  };
};

export default useFormSubmit;

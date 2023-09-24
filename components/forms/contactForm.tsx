import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import TextareaAutosize from "react-textarea-autosize";
import { Container } from "../../components/util/container";
import { Section } from "../util/section";
import useFormSubmit from "../../hooks/useFormSubmit";
import NavLink from "../layout/NavLink";
type FormData = {
  name: string;
  email: string;
  message: string;
};

const schema = z.object({
  name: z.string().min(1, { message: "We'll need to know your name" }),
  email: z.string().email({ message: "We don't think that's a valid email address" }),
  message: z.string().min(1, { message: "Please give us more information" }),
});

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClass?: string;
}

interface TextareaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  containerClass?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, containerClass, error, ...rest }: InputProps, ref) => {
    return (
      <fieldset className={`flex flex-col mb-4 ${containerClass}`}>
        {label && <label>{label}</label>}
        <input
          ref={ref}
          {...rest}
          className="bg-transparent py-4 border-0 border-b-2 text-base md:text-lg outline-0 focus:outline-0 focus:border-primary dark:focus:border-gold transition-all placeholder:text-neutral-200 "
        />
        {error && (
          <span className="text-error pt-3 font-bold font-mono">{error}</span>
        )}
      </fieldset>
    );
  }
);
Input.displayName = "Input";

const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, containerClass, error, style, ...rest }: TextareaProps, ref) => {
    return (
      <fieldset className={`flex flex-col mb-4 ${containerClass}`}>
        {label && <label>{label}</label>}
        <TextareaAutosize
          minRows={1}
          ref={ref}
          className="bg-transparent py-4 border-0 border-b-2 text-base md:text-lg outline-0 focus:outline-0 focus:border-primary  dark:focus:border-gold transition-all placeholder:text-neutral-200 scrollbar-hide"
          {...rest}
        />

        {error && (
          <span className="text-error pt-3 font-bold font-mono">{error}</span>
        )}
      </fieldset>
    );
  }
);
TextArea.displayName = "TextArea";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => submit(data));

  const { submit, success, error, loading } = useFormSubmit();

  return (
    <section className="pb-24">
      {success ? (
        <>
          <Container>
            <p className="text-lg mb-2 text-neutral-400">Delivered</p>
            <h1 className="text-xl mb-4 font-bold dark:text-white">
              Your message has been sent
            </h1>
            <p>Someone from the team will get in contact.</p>
          </Container>
          <div className="bg-black bg-no-repeat bg-cover bg-center bg-[url('/img/black-abstract-bg.png')] bg text-white py-24  h-[400px]" />
        </>
      ) : (
        <Container>
          <header className="mb-12 md:w-2/3">
            <h2 className="text-xl mb-2">Contact us</h2>
            <p className="text-xl mb-4 font-bold max-w-xl">
              Speak to us about how we can help you.
            </p>
            <p >
              Prefer email?{" "}
              <NavLink href="mailto:team@hatchhead.co?subject='Enquiry'">
                Reach out to us here.
              </NavLink>
            </p>
          </header>

          {error && (
            <div className="bg-error text-white p-4 mb-12 rounded-sm">
              {error}
            </div>
          )}

          <form
            onSubmit={onSubmit}
            className="flex flex-col"
            name="contact-us"
            method="POST"
            data-netlify="true"
          >
            <Input
              {...register("name")}
              name="name"
              placeholder="Your name"
              error={errors.name?.message}
              autoComplete="name"
              containerClass="lg:w-1/2 xl:w-1/3 w-full"
            />
            <Input
              {...register("email")}
              name="email"
              placeholder="Your email address"
              error={errors.email?.message}
              autoComplete="email"
              containerClass="lg:w-1/2 xl:w-1/3  w-full"
            />
            <TextArea
              {...register("message")}
              name="message"
              placeholder="What can we help you with?"
              error={errors.message?.message}
            />

            <input type="hidden" name="form-name" value="contact-us" />

            <footer className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="bg-primary dark:bg-gold flex justify-center space-x-3 dark:contrast-more:text-black items-center  button text-white border-full px-4 py-2 rounded-full dark:hover:bg-gold-75 hover:bg-primary-75"
              >
                <span>Send Message</span>
                {loading && (
                  <svg
                    className="w-5 h-5 mr-3 -ml-1 text-red-500 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
              </button>
            </footer>
          </form>
        </Container>
      )}
    </section>
  );
}

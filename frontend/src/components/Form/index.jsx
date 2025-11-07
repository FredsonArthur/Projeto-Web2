import { cn } from "../../utils/clsx";
import { Link } from "react-router-dom"

const FormRoot = ({ children, className, ...props }) => {
  return (
    <form {...props} className={cn("", className)}>
      {children}
    </form>
  );
};

const FormHeader = ({ children, className, ...props }) => {
  return (
    <header {...props} className={cn("", className)}>
      {children}
    </header>
  );
};

const FormLabel = ({ children, className, ...props }) => {
  return (
    <label {...props} className={cn("", className)}>
      {children}
    </label>
  );
};

const FormTitle = ({ title, className, ...props }) => {
  return (
    <h1 {...props} className={cn("font-semibold", className)}>
      {title}
    </h1>
  );
};

const FormInput = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={cn("border border-blue-500/60 outline-none p-2 rounded", className)}
    />
  );
};

const FormLink = ({ href, label, className, ...props }) => {
  return (
    <Link to={href} {...props} className={cn("", className)}>{label}</Link>
  );
};

const FormButton = ({ handleClick, label, className, ...props }) => {
  return (
    <button {...props} onClick={handleClick} className={cn("px-4 py-2 rounded bg-blue-500 text-white", className)}>
      {label}
    </button>
  );
};

const Form = {
  FormRoot,
  FormHeader,
  FormTitle,
  FormLabel,
  FormInput,
  FormButton,
  FormLink
};

export default Form;

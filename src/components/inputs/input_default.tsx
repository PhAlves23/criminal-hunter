import { IconType } from "react-icons";

interface InputDefaultProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: IconType;
}

export const InputDefault = ({
  label,
  icon: Icon,
  ...props
}: InputDefaultProps) => {
  const { id } = props;
  return (
    <div className="mb-5">
      <label htmlFor={id} className="label-style">
        {label}
      </label>
      <div className="relative">
        <input className="input-style" {...props} />
        {Icon && <Icon size={24} className="absolute right-4 top-4" />}
      </div>
    </div>
  );
};

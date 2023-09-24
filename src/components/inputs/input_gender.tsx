import { useState } from "react";
import { IconType } from "react-icons";

interface InputDefaultProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputGender = ({ label, ...props }: InputDefaultProps) => {
  const { id } = props;
  const [gender, setGender] = useState(0);
  const [genderSelected, setGenderSelected] = useState("Masculino");

  const handleChangeGender = (value: number) => {
    setGender(value);
    switch (value) {
      case 0:
        setGenderSelected("Masculino");
        break;
      case 1:
        setGenderSelected("Feminino");
        break;
      default:
        setGenderSelected("Masculino");
        break;
    }
  };

  return (
    <div className="mb-5">
      <label htmlFor={id} className="label-style">
        {label}
      </label>
      <div className="input-style flex items-center justify-between">
        <p>Selecione</p>
        <div>
          <button
            type="button"
            className={`py-2 px-3 rounded-full ${gender === 0 && "bg-primary"}`}
            onClick={() => handleChangeGender(0)}
          >
            Masculino
          </button>
          <button
            type="button"
            className={`py-2 px-3 rounded-full ${gender === 1 && "bg-primary"}`}
            onClick={() => handleChangeGender(1)}
          >
            Feminino
          </button>
        </div>
      </div>
    </div>
  );
};
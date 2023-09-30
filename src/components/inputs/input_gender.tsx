import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface InputDefaultProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  selectedGenderValue?: string;
  setSelectedGenderValue?: Dispatch<SetStateAction<string>>;
  disabled?: boolean;
  label: string;
}

export const InputGender = ({
  label,
  selectedGenderValue,
  setSelectedGenderValue,
  disabled,
  ...props
}: InputDefaultProps) => {
  const { id } = props;
  const [gender, setGender] = useState("");

  const handleChangeGender = (value: number) => {
    if (disabled) return;
    if (selectedGenderValue) {
      setGender(selectedGenderValue);
    }
    switch (value) {
      case 0:
        if (setSelectedGenderValue) setSelectedGenderValue("Male");
        break;
      case 1:
        if (setSelectedGenderValue) setSelectedGenderValue("Female");
        break;
      default:
        if (setSelectedGenderValue) setSelectedGenderValue("Male");
        break;
    }
  };

  return (
    <div className="mb-5">
      <label htmlFor={id} className="label-style">
        {label}
      </label>
      <div className="input-style flex items-center justify-between">
        {selectedGenderValue !== "null" && <p>Selecione</p>}
        <div>
          {selectedGenderValue === "" || selectedGenderValue === "null" ? (
            <button>não informado</button>
          ) : (
            <>
              <button
                type="button"
                className={`py-2 px-3 rounded-full ${
                  selectedGenderValue === "Male" && "bg-primary"
                }`}
                onClick={() => handleChangeGender(0)}
              >
                Masculino
              </button>
              <button
                type="button"
                className={`py-2 px-3 rounded-full ${
                  selectedGenderValue === "Female" && "bg-primary"
                }`}
                onClick={() => handleChangeGender(1)}
              >
                Feminino
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

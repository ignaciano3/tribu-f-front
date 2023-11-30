interface Option {
  value: string;
  label: string;
}

export default function SelectField({
  name,
  label,
  options,
  ...rest
}: {
  name: string;
  label: string;
  options: Option[];
  rest?: any;
}) {
  return (
    <div className="mb-4 grow">
      <label
        className="block text-gray-700 text-sm font-medium mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <select
        id={name}
        className="grow appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value} className="w-full">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

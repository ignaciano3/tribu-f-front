export default function TextAreaField({
  name,
  label,
  placeholder,
  defaultValue,
  ...props
}: {
  name: string;
  label: string;
  placeholder?: string;
  defaultValue?: string;
}) {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-medium mb-2"
        htmlFor={label}
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...props}
        placeholder={placeholder ?? ""}
        rows={5}
        defaultValue={defaultValue ?? ""}
      />
    </div>
  );
}

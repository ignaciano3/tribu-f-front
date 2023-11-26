export default function Title({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h1 className={`text-3xl font-bold decoration-gray-400" ${className}`}>
      {title}
    </h1>
  );
}

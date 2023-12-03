import Title from "@/components/Title";
import ReturnButton from "@/components/forms/ReturnButton";

const NotFound = () => {
  return (
    <div className="text-center justify-center min-h-screen items-center flex flex-col">
      <Title title="404" />
      <h2 className="text-lg">Página no encotrada</h2>
      <ReturnButton href="/" />
    </div>
  );
};

export default NotFound;

import Spinner from "../_components/Spinner";

export default function loading() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <Spinner />
      <p className="text-xl text-primary-200">Loading cabin data...</p>
    </div>
  );
}

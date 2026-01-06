import { Spinner } from "@material-tailwind/react";

export default function PageLoader() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Spinner color="purple" className="h-20 w-20"/>
    </div>
  );
}

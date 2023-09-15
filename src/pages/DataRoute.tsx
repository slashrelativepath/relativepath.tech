import { useLoaderData } from "react-router-dom";

export function DataRoute() {
  const data = useLoaderData() as { message: string };
  return <div>The data is: "{data.message}"</div>;
}

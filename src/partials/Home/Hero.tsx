import { HR } from "../../components/HorizontalRule";

export function Hero() {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <div className="mx-auto mb-3 flex flex-col gap-2 md:flex-row md:gap-1">
        <h1 className="h1 text-6xl font-semibold md:self-center">
          Welcome to&nbsp;
        </h1>
        <code className="prose mx-auto w-fit rounded-lg bg-stone-950 p-2 text-6xl text-sky-300">
          ./relativePath
        </code>
      </div>
      <p className="text-2xl text-gray-400 md:mb-8">
        Your daily devops class for keeping your skills sharp.
      </p>
      <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"></div>
      <HR />
    </div>
  );
}

import { CardSpotlight } from "@/components/ui/card-spotlight";
import { GTtext } from "./gttext";

export function GTpage() {
  return (
    <>
      <CardSpotlight className="h-auto mx-4 my-12 p-4 sm:p-6 lg:p-8">
        <div className=" md:flex-row items-center relative">
          <div className="flex items-center justify-center h-full w-full pt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5em"
              height="5em"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M176 112h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16m-72-16h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16h8v8a8 8 0 0 0 16 0v-8h8a8 8 0 0 0 0-16m137.48 104.65a36 36 0 0 1-54.94 4.81c-.12-.12-.24-.24-.35-.37L146.48 160h-37l-39.67 45.09l-.35.37A36.08 36.08 0 0 1 44 216a36 36 0 0 1-35.44-42.25a.7.7 0 0 1 0-.14l16.37-84.09A59.88 59.88 0 0 1 83.89 40H172a60.08 60.08 0 0 1 59 49.25v.18l16.37 84.17a.7.7 0 0 1 0 .14a35.74 35.74 0 0 1-5.89 26.91M172 144a44 44 0 0 0 0-88H83.89a43.9 43.9 0 0 0-43.21 36.37v.13L24.3 176.59A20 20 0 0 0 58 194.3l41.92-47.59a8 8 0 0 1 6-2.71Zm59.7 32.59l-8.74-45A60 60 0 0 1 172 160h-4.2l30.2 34.31a20.09 20.09 0 0 0 17.46 5.39a20 20 0 0 0 16.23-23.11Z"
              />
            </svg>
          </div>

          <h1 className="relative font-semibold text-5xl  text-center pt-6 pb-9">
            Game Tech
          </h1>

          <div className="text-neutral-300 mt-4 relative z-20 text-lg text-justify px-4 sm:px-20 pb-6 ">
            <GTtext />
          </div>
        </div>
      </CardSpotlight>
    </>
  );
}
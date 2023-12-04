"use client";
import React from "react";
import "tailwindcss/tailwind.css";

const RandomNumberGenerator = () => {
  const [min, setMin] = React.useState<number>(0);
  const [max, setMax] = React.useState<number>(999);
  const [number, setNumber] = React.useState<number>(1);
  const [result, setResult] = React.useState<string>("");

  const handleClick = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();

    let stringResult = "";
    for (let i = 0; i < number; i++) {
      stringResult +=
        " " + Math.round(Math.random() * (max - min) + min).toString();
    }
    setResult(stringResult);
  };

  return (
    <>
      <div className="container flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[500px] rounded-md bg-primary bg-opacity-5 py-10 px-6 dark:bg-dark sm:p-[60px]">
              <h3 className="mb-6 text-center text-2xl font-bold text-blacksm:text-3xl">
                Random Number Generator 🎲
              </h3>
              <form>
                <div className="flex flex-row	mb-8 gap-4	">
                  <div>
                    <label
                      htmlFor="min"
                      className="mb-3 block text-sm font-medium ">
                      Min
                    </label>
                    <input
                      type="min"
                      name="min"
                      onChange={(e: any) => setMin(e.target.value)}
                      className="w-[100%] rounded-md border border-gray py-3 px-6 text-base text-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="max"
                      className="mb-3 block text-sm font-medium ">
                      Max
                    </label>
                    <input
                      type="max"
                      name="max"
                      onChange={(e: any) => setMax(e.target.value)}
                      className="w-[100%] rounded-md border border-gray py-3 px-6 text-base text-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="max"
                    className="mb-3 block text-sm font-medium ">
                    Generate
                  </label>
                  <div className="flex flex-row	mb-8 gap-4 items-center">
                    <input
                      type="max"
                      name="max"
                      onChange={(e: any) => setNumber(e.target.value)}
                      className="w-[50%] rounded-md border border-gray py-3 px-6 text-base text-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
                    />
                    <label className="mb-3 block text-sm font-medium ">
                      numbers
                    </label>
                  </div>
                </div>
                <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center">
                  <label
                    htmlFor="result"
                    className="mb-3 block text-sm font-medium ">
                    {result}
                  </label>
                </div>
                <div className="mb-6">
                  <button
                    className="flex w-full items-center justify-center rounded-md bg-primary py-4 px-9 text-base font-medium transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp bg-slate-500"
                    onClick={(e: any) => handleClick(e)}>
                    Calculate
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 z-[-1]">
        <svg
          width="1440"
          height="969"
          viewBox="0 0 1440 969"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <mask
            id="mask0_95:1005"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1440"
            height="969">
            <rect width="1440" height="969" fill="#090E34" />
          </mask>
          <g mask="url(#mask0_95:1005)">
            <path
              opacity="0.1"
              d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
              fill="url(#paint0_linear_95:1005)"
            />
            <path
              opacity="0.1"
              d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
              fill="url(#paint1_linear_95:1005)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_95:1005"
              x1="1178.4"
              y1="151.853"
              x2="780.959"
              y2="453.581"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_95:1005"
              x1="160.5"
              y1="220"
              x2="1099.45"
              y2="1192.04"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default RandomNumberGenerator;

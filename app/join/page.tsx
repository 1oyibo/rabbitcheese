/* eslint-disable @next/next/no-img-element */
"use client";
import { ErrorMessage } from "@/components/error";
import Title from "@/components/title";
import { Listbox, Transition } from "@headlessui/react";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";

const networks = [
  {
    id: "airtel",
    image:
      "data:image/png;base64,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",
  },
  {
    id: "glo",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: "mtn",
    image:
      "data:image/png;base64,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",
  },
];

const phoneNumberPrefixes = {
  airtel: ["0802", "0808", "0812", "0708", "0701", "0902", "0901", "0907"],
  glo: ["0805", "0807", "0811", "0815", "0705", "0905"],
  mtn: [
    "0803",
    "0806",
    "0813",
    "0810",
    "0816",
    "0814",
    "0903",
    "0906",
    "0703",
    "0704",
    "0706",
    "07025",
    "07026",
  ],
};

export default function Page() {
  const router = useRouter();
  // const searchParams = useSearchParams();

  const [step, setStep] = useState<number>(1);
  const nextStep = () => setStep(step + 1);
  // const [userId, setUserId] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [networkId, setNetworkId] = useState(networks[1]);
  const [code, setCode] = useState<string>("");
  const [coupon, setCoupon] = useState<string>("");
  const [loading, setLoading] = useState(false);
  // const [selectedUser, setSelectedUser] = useState("");
  const [bunny, setBunny] = useState(undefined);
  // const [GET_USERS, setGET_USERS] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (number.length > 10) {
      const prefix = number.slice(0, 4);
      switch (true) {
        case phoneNumberPrefixes.airtel.includes(prefix):
          setNetworkId(networks[0]);
          break;
        case phoneNumberPrefixes.glo.includes(prefix):
          setNetworkId(networks[1]);
          break;
        case phoneNumberPrefixes.mtn.includes(prefix):
          setNetworkId(networks[2]);
          break;
        default:
          setNetworkId(networks[0]);
      }
    }
  }, [number]);

  useEffect(() => {}, []);

  const NumberSubmit = async () => {
    const phoneRegex = /^0[0-9]{10}$/;

    if (!phoneRegex.test(number)) {
      setError("invalid number");
      return;
    }

    nextStep();
    // ...
  };

  const CodeSubmit = async () => {
    if (!code.trim()) {
      setError("invalid");
      return;
    }

    nextStep();
  };

  const CouponSubmit = async () => {
    if (!coupon.trim()) {
      setError("invalid");
      return;
    }

    router.push("/share");
  };

  const GET_COUPON = async () => {
    setCoupon("0909090");
  };

  return (
    <div className="container mx-auto mt-16 px-8 lg:mt-32">
      <div className="mx-auto max-w-3xl ">
        {error ? <ErrorMessage message={error} /> : null}
        <Title>Join...</Title>

        {step < 2 && bunny && (
          <div className="text-center text-sm text-zinc-600">
            <p className="text-zinc-400">Invited by {bunny}</p>
          </div>
        )}

        {step === 1 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              nextStep();
            }}
          >
            <div className="mt-8 rounded border border-zinc-600 px-4 py-3 focus-within:border-zinc-100/80 focus-within:ring-0 ">
              <label
                htmlFor="name"
                className="block text-xs font-medium text-zinc-100"
              >
                WHAT&apos;S YOUR USERNAME?
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`mt-8 inline-flex h-12 w-full items-center justify-center  rounded  bg-zinc-200 px-4 py-1.5 text-base font-semibold leading-7 text-zinc-800 ring-1   transition-all duration-150  hover:bg-white  hover:text-black hover:drop-shadow-cta   md:py-2 ${
                loading ? "animate-pulse" : ""
              }`}
            >
              <span>
                {loading ? (
                  <Cog6ToothIcon className="h-5 w-5 animate-spin" />
                ) : (
                  "Count Me In! 🤚🔏"
                )}
              </span>
            </button>
          </form>
        )}

        {step === 2 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              NumberSubmit();
            }}
          >
            <div className="font-mono mt-8 rounded border border-zinc-600 bg-transparent px-4 py-3 text-left text-zinc-100 focus:border-zinc-100/80 focus:ring-0 sm:text-sm">
              <label
                htmlFor="number"
                className="block text-xs font-medium text-zinc-100"
              >
                CAN I GRAB YOUR NUMBER?
              </label>
              <div className="flex items-start px-1 text-sm">
                <div
                  aria-hidden="true"
                  className="font-mono select-none border-r border-zinc-300/5 pr-4 text-zinc-700"
                >
                  <Fragment>
                    <Listbox value={networkId} onChange={setNetworkId}>
                      {({ open }) => (
                        <div className="relative mt-1 max-w-[3rem]">
                          <Listbox.Button>
                            <img
                              src={networkId?.image}
                              alt=""
                              className="h-4 w-4 flex-shrink-0 rounded-full"
                            />
                          </Listbox.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-5 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {networks.map((network) => (
                                <Listbox.Option
                                  key={network.id}
                                  className=""
                                  value={network}
                                >
                                  {() => (
                                    <img
                                      src={network.image}
                                      alt=""
                                      className="h-5 w-5 flex-shrink-0 rounded-full"
                                    />
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      )}
                    </Listbox>
                  </Fragment>
                </div>

                <input
                  type="text"
                  name="number"
                  id="number"
                  className="w-full appearance-none border-0 bg-transparent p-0 text-base text-zinc-100 placeholder-zinc-500 focus:ring-0 sm:text-sm"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`mt-8 inline-flex h-12 w-full items-center justify-center  rounded  bg-zinc-200 px-4 py-1.5 text-base font-semibold leading-7 text-zinc-800 ring-1   transition-all duration-150  hover:bg-white  hover:text-black hover:drop-shadow-cta   md:py-2 ${
                loading ? "animate-pulse" : ""
              }`}
            >
              <span>
                {loading ? (
                  <Cog6ToothIcon className="h-5 w-5 animate-spin" />
                ) : (
                  "Continue ➡️"
                )}
              </span>
            </button>
          </form>
        )}

        {step === 3 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              CodeSubmit();
            }}
          >
            <div className="mt-8 rounded border border-zinc-600 px-3 py-2 focus-within:border-zinc-100/80 focus-within:ring-0 ">
              <label
                htmlFor="custom"
                className="block text-xs font-medium text-zinc-100"
              >
                PASS THE VERIFICATION CODE
              </label>
              <input
                type="number"
                name="custom"
                id="custom"
                className="w-full appearance-none border-0 bg-transparent p-0 text-base text-zinc-100 placeholder-zinc-500 focus:ring-0 sm:text-sm"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`mt-8 inline-flex h-12 w-full items-center justify-center  rounded  bg-zinc-200 px-4 py-1.5 text-base font-semibold leading-7 text-zinc-800 ring-1   transition-all duration-150  hover:bg-white  hover:text-black hover:drop-shadow-cta   md:py-2 ${
                loading ? "animate-pulse" : ""
              }`}
            >
              <span>
                {loading ? (
                  <Cog6ToothIcon className="h-5 w-5 animate-spin" />
                ) : (
                  "Continue ➡️"
                )}
              </span>
            </button>
          </form>
        )}

        {step === 4 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              CouponSubmit();
            }}
          >
            <div className="mt-8 rounded border border-zinc-600 px-3 py-2 focus-within:border-zinc-100/80 focus-within:ring-0 ">
              <label
                htmlFor="custom"
                className="block text-xs font-medium text-zinc-100"
              >
                ENTER COUPON{" "}
                <pre
                  className="ml-1 inline cursor-pointer text-blue-600"
                  onClick={GET_COUPON}
                >
                  Get code
                </pre>
              </label>
              <input
                type="number"
                name="custom"
                id="custom"
                className="w-full appearance-none border-0 bg-transparent p-0 text-base text-zinc-100 placeholder-zinc-500 focus:ring-0 sm:text-sm"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`mt-8 inline-flex h-12 w-full items-center justify-center  rounded  bg-zinc-200 px-4 py-1.5 text-base font-semibold leading-7 text-zinc-800 ring-1   transition-all duration-150  hover:bg-white  hover:text-black hover:drop-shadow-cta   md:py-2 ${
                loading ? "animate-pulse" : ""
              }`}
            >
              <span>
                {loading ? (
                  <Cog6ToothIcon className="h-5 w-5 animate-spin" />
                ) : (
                  "Continue ➡️"
                )}
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

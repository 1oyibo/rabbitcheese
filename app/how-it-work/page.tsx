import Title from "@/components/title";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const steps = [
  {
    name: "🌈 Come Play with Us",
    description: (
      <>
        Click here to join RabbitCheese and have loads of fun with cute rabbits
        and cheesy adventures. 🎉
      </>
    ),
    cta: (
      <Link
        href="/join"
        className="flex w-full items-center justify-center gap-2 rounded bg-zinc-200 px-4 py-2 text-center text-sm text-zinc-800 ring-1 ring-zinc-100 transition-all duration-150 hover:bg-transparent hover:text-zinc-100"
      >
        <span>Join now</span>
        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
      </Link>
    ),
  },
  {
    name: "👫 Get Bunny Friends",
    description: (
      <p>
        Invite your pals (we call them &quot;Reads&quot;) to join the game. Each
        friend you bring makes you get cool data treats. 📱💻
      </p>
    ),
  },
  {
    name: "🐰 Meet Fun Characters",
    description: (
      <p>
        Look at the funny bunnies and cheese pictures. They show how well
        you&apos;re doing in collecting Reads and getting awesome rewards
      </p>
    ),
  },
  {
    name: "📊 Easy Data Time",
    description: (
      <p>
        RabbitCheese makes watching your data super easy and funny. It&apos;s
        like playing a game while using your internet.
      </p>
    ),
  },
  {
    name: "🤗 Friends and Prizes",
    description:
      "Make friends, have a great time, and win prizes! RabbitCheese is all about having a blast with your buddies and getting cool stuff.",
    cta: (
      <Link
        href="/share"
        className="flex w-full items-center justify-center gap-2 rounded bg-zinc-200 px-4 py-2 text-center text-sm text-zinc-800 ring-1 ring-zinc-100 transition-all duration-150 hover:bg-transparent hover:text-zinc-100"
      >
        <span>Start Sharing</span>
        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
      </Link>
    ),
  },
];

export default function Page() {
  return (
    <div className="container mx-auto mt-16 px-8 lg:mt-32 ">
      <Title>How it works?</Title>
      <p className="mt-4 text-center text-sm text-zinc-600">
        Look at how our website struts its stuff!
      </p>
      <ol className="mt-8 flex flex-col items-center justify-center md:mt-16 xl:mt-24">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className="group relative flex flex-col items-center gap-4 pb-16 md:gap-8 md:pb-24"
          >
            <span
              className="absolute top-4  h-full w-0.5 bg-gradient-to-b from-blue-500/60  via-blue-500/10 to-transparent"
              aria-hidden="true"
            />
            <span className="flex h-9 items-center" aria-hidden="true">
              <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-blue-400 bg-zinc-900 text-sm text-blue-400 drop-shadow-blue duration-150 group-hover:border-blue-500">
                {stepIdx + 1}
              </span>
            </span>
            <div className="z-10 flex flex-col items-center">
              <h2 className="text-xl font-medium text-zinc-200 duration-150 group-hover:text-white lg:text-2xl">
                {step.name}
              </h2>

              <div className="mt-4 text-center text-sm text-zinc-500 duration-1000 group-hover:text-zinc-400">
                {step.description}
              </div>
              <div className="mt-8 w-full md:w-auto">{step.cta}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

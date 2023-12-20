"use client";
import { account, databases } from "@/appwrite";
import { ErrorMessage } from "@/components/error";
import Title from "@/components/title";
import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";
import { Models } from "appwrite";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const [loggedInUser, setLoggedInUser] = useState<Models.Document>(undefined!);
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const [link, setLink] = useState("");

  useEffect(() => {
    const promise = account.get();

    promise.then(
      function (response) {
        const promise = databases.getDocument(
          process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
          process.env.NEXT_PUBLIC_APPWRITE_USER_COLLECTION_ID as string,
          response.$id,
        );

        promise.then(
          function (response) {
            return setLoggedInUser(response);
          },
          function (error) {
            setError((error as Error).message);
          },
        );
      },
      function (error) {
        setError((error as Error).message);
      },
    );
  }, []);

  useEffect(() => {
    if (!loggedInUser) {
      router.push('/join');
    }
  }, [loggedInUser, router])
  
  return (
    <div className="container mx-auto mt-16 px-8 lg:mt-32 ">
      {error ? <ErrorMessage message={error} /> : null}

      {link ? (
        <div className="mt-8 flex h-full w-full flex-col items-center justify-center md:mt-16 xl:mt-32">
          <Title>Share this link with others</Title>
          <div className="relative mt-16 flex flex-grow items-stretch focus-within:z-10">
            <pre className="font-mono rounded border border-zinc-600 bg-transparent px-4 py-3 text-center text-zinc-100 focus:border-zinc-100/80 focus:ring-0 sm:text-sm">
              {link}
            </pre>
            <button
              type="button"
              className="hover relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700 duration-150 hover:bg-white hover:text-zinc-900 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
              onClick={() => {
                navigator.clipboard.writeText(link);
                setCopied(true);
              }}
            >
              {copied ? (
                <ClipboardDocumentCheckIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              ) : (
                <ClipboardDocumentIcon className="h-5 w-5" aria-hidden="true" />
              )}{" "}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-3xl">
          <Title>Share...</Title>

          <div className="mt-8">
            <ul className="space-y-2 text-xs text-zinc-500">
              <li>
                <p>
                  <span className="font-semibold text-zinc-400">Reads:</span>{" "}
                  The number of reads determines the size of your friend
                  you&apos;ve lured into the burrow. A count of 0 means you need
                  pals.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold text-zinc-400">TTL:</span> Ever
                  wondered how much data you&apos;re munching on? This tracker
                  shows how much internet cheese you&apos;ve nibbled away.
                </p>
              </li>
              <p>
                Clicking Share will get you a link, getting you ready to invite
                your pals, friends, and other folks.
              </p>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import React from "react";

const posts = [
  {
    content: (
      <div>
        <p>
          Coco Bunny is like the boss of all the fun ideas! They think about how
          to make RabbitCheese a super cool and playful place. Coco is the one
          who makes sure everything in the app is as fun as playing with bunnies
          and eating cheese with friends.
        </p>
      </div>
    ),
    link: "#",
    author: {
      name: "Coco Bunny",
      title: "The Fun Ideas Leader",
      image: "/aV3bX8oL1dKs.png",
    },
  },
  {
    content: (
      <div>
        <p>
          Meet Byte Hopper, the magician of all the computer stuff! Byte is like
          a wizard who makes sure all your internet data is counted correctly.
          They&apos;re the one who makes sure you get lots of treats (like
          cheese) when you invite your friends to join RabbitCheese.
        </p>
      </div>
    ),
    link: "#",
    author: {
      name: "Byte Hopper",
      title: "The Data Magician",
      image: "/7hGpZmK5cNqR.png",
    },
  },
  {
    content: (
      <div>
        <p>
          Clover Paws is like your friendly helper and organizer. They make sure
          everyone in RabbitCheese feels happy and included. Clover plans fun
          things for you and your friends to do together in the app. It&apos;s
          like having a friendly bunny guide!
        </p>
      </div>
    ),
    link: "#",
    author: {
      name: "Clover Paws",
      title: "The Friendly Helper",
      image: "/qRt9WfP2xYsL.png",
    },
  },
];

function Testimonials() {
  return (
    <section className="container mx-auto">
      <ul
        role="list"
        className="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-8 lg:max-w-none lg:grid-cols-3"
      >
        {posts.map((post, i) => (
          <div
            key={i}
            className="group flex flex-col justify-between rounded border border-zinc-500/30 duration-150 hover:border-zinc-300/30 hover:bg-zinc-900/30"
          >
            <Link
              href={post.link}
              className="text whitespace-pre-line p-6 text-zinc-500"
            >
              {post.content}
            </Link>
            <div className="relative flex items-start justify-between border-t border-zinc-500/30 bg-zinc-900/40 p-6 duration-150 group-hover:border-zinc-300/30">
              <div>
                <div className="font-display text-base text-zinc-200">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href=""
                    className="text-zinc-200 duration-150 hover:text-zinc-50"
                  >
                    {post.author.name}
                  </Link>
                </div>
                <div className="mt-1 text-sm text-zinc-500">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href=""
                    className="text-sm text-zinc-500 duration-150 hover:text-zinc-300"
                  >
                    {post.author.title}
                  </Link>
                </div>
              </div>
              <div className="overflow-hidden rounded-full bg-zinc-50">
                <Image
                  className="h-14 w-14 object-cover"
                  src={post.author.image}
                  alt=""
                  width={56}
                  height={56}
                />
              </div>
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
}

export default Testimonials;

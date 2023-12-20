import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

export const contentType = "image/png";

// Image generation
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const title = searchParams.get("title") ?? "Make Friends and Get Rewards";

    const subtitle = searchParams.get("subtitle") ?? "#rabbitcheese";

    // Font
    const interSemiBold = fetch(
      new URL("./Inter-SemiBold.ttf", import.meta.url),
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        // ImageResponse JSX element
        <div tw="w-[1200px] h-[630px] flex flex-col items-center justify-center text-center">
          <div
            tw="bg-black w-full h-full flex"
            style={{
              backgroundImage:
                "linear-gradient(to top right, rgba(24,24,27,.5), rgba(63,63,70,.3))",
            }}
          >
            <div tw="flex flex-col text-3xl tracking-tight text-gray-300 w-full items-center h-full justify-center text-center">
              <h1
                tw="text-white text-7xl"
                style={{
                  color: "transparent",
                  paddingLeft: "12rem",
                  paddingRight: "12rem",
                  backgroundImage:
                    "linear-gradient(to top, rgba(244, 244,  245, .5), rgba(255,255,255,1))",
                  backgroundClip: "text",
                }}
              >
                {title}
              </h1>
              <p tw="mt-4 font-bold">{subtitle}</p>
            </div>
          </div>
        </div>
      ),
      // ImageResponse options
      {
        // For convenience, we can re-use the exported opengraph-image
        // size config to also set the ImageResponse's width and height.
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: await interSemiBold,
            style: "normal",
            weight: 400,
          },
        ],
      },
    );
  } catch (e) {
    if (!(e instanceof Error)) throw e;

    // eslint-disable-next-line no-console
    console.log(e.message);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

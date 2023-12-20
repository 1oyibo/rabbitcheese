import fs from "fs";

export async function GET() {
  const data = fs.readFileSync("./_name.txt", {
    encoding: "utf8",
    flag: "r",
  });

  return Response.json(
    data.split("\r\n").map((str) => str.toLowerCase().trim()),
  );
}

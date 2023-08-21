import { axiosAuth } from "@/libs/axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { googleToken } = body;
    const response = await axiosAuth.post(
      "/auth/sign-in/google",
      {},
      {
        headers: {
          "X-Google-Id-Token": googleToken,
        },
      },
    );
    console.debug("RES", response);
    return NextResponse.json(response.data, { status: 200 });
  } catch (err) {
    console.debug(err);
    return new NextResponse(`err: ${err}`, { status: 500 });
  }
}

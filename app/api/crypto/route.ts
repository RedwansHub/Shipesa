import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: any // You can remove this parameter if you don't need it
) {
  try {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1";

    const response = await fetch(url);

    // Check if the data is not empty before returning
    if (!response) {
      return NextResponse.error();
    }

    // Return the data directly, no need for NextResponse.json()
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.error();
  }
}
interface RouteContext {
  params: {
    steamId: string;
  };
}

export async function GET(request: Request, context: RouteContext) {
  const steamId = context.params.steamId; // STEAM_USER_ID
  const urlParams = new URLSearchParams({
    steamid: steamId,
    key: `${process.env.STEAM_API_KEY}`,
    include_appinfo: "true",
    include_extended_appinfo: "true",
    format: "json",
  });
  const url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?${urlParams}`;

  // Further error handling could be useful here, such as when invalid IDs are passed into the dynamic route segment.
  // This would also be a good opportunity to write automated tests to match the correct response types and actions to errors.
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return new Response(JSON.stringify({ steamId, data: data.response }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 500,
    });
  }
}

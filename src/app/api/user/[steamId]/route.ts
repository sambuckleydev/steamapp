interface RouteContext {
  params: {
    steamId: string;
  };
}

export async function GET(request: Request, context: RouteContext) {
  const steamId = context.params.steamId; // STEAM_USER_ID
  const urlParamsOwnedGames = new URLSearchParams({
    steamid: steamId,
    key: `${process.env.STEAM_API_KEY}`,
    include_appinfo: "true",
    include_extended_appinfo: "true",
    format: "json",
  });
  const urlOwnedGames = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?${urlParamsOwnedGames}`;

  const urlParamsPlayerSummaries = new URLSearchParams({
    steamids: steamId,
    key: `${process.env.STEAM_API_KEY}`,
    format: "json",
  });
  const urlPlayerSummaries = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?${urlParamsPlayerSummaries}`;

  // Further error handling could be useful here, such as when invalid IDs are passed into the dynamic route segment.
  // This would also be a good opportunity to write automated tests to match the correct response types and actions to errors.
  try {
    const [responseOwnedGames, responsePlayerSummaries] = await Promise.all([
      fetch(urlOwnedGames),
      fetch(urlPlayerSummaries),
    ]);

    if (!responseOwnedGames.ok || !responsePlayerSummaries.ok) {
      throw new Error(
        `HTTP error! Status: ${responseOwnedGames.status} | ${responsePlayerSummaries.status}`
      );
    }

    const dataOwnedGames = await responseOwnedGames.json();
    const dataPlayerSummaries = await responsePlayerSummaries.json();

    // console.log(dataOwnedGames.response);
    // console.log(dataOwnedGames.response);

    return new Response(
      JSON.stringify({
        steamId,
        gamesOwned: {
          game_count: dataOwnedGames.response.game_count,
          // TODO - This sucks, write better mutations with error conditionals
          games: dataOwnedGames.response.games.sort(
            (a: any, b: any) => b.playtime_forever - a.playtime_forever
          ),
          total_playtime: dataOwnedGames.response.games.reduce(
            (a: any, b: any) => {
              return a + b.playtime_forever;
            },
            0
          ),
        },
        playerSummary: dataPlayerSummaries.response.players[0],
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 200,
      }
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 500,
    });
  }
}

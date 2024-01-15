interface RouteContext {
    params: {
        steamId: string;
    };
}

export async function GET(request: Request, context: RouteContext) {
    const { params } = context;
    const steamId = params.steamId; // STEAM_USER_ID_TEST="76561198000549698"
    const apiKey = process.env.STEAM_API_KEY;
    const url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${steamId}&format=json`;

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
            "Content-Type": "application/json"
          },
          status: 200
        });
      } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), {
          headers: {
            "Content-Type": "application/json"
          },
          status: 500
        });
      }
}
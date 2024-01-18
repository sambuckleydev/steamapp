interface RouteContext {
  params: {
    appId: string;
  };
}

export async function GET(request: Request, context: RouteContext) {
  const { params } = context;
  const appId = params.appId;
  const url = `https://store.steampowered.com/api/appdetails?appids=${appId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return new Response(JSON.stringify(data[appId].data), {
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

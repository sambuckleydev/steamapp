export interface SearchProps {
    onSearch: (query: string) => any; // In production a more robust return interface would be preferred, omitting this for time.
}

export interface SearchResultData {
    steamId: string;
    player: {
        avatar: string;
        avatarfull: string;
        avatarhash: string;
        avatarmedium: string;
        commentpermission: number;
        communityvisibilitystate: number;
        lastlogoff: number;
        personaname: string;
        personastate: number;
        personastateflags: number;
        primaryclanid: string;
        profilestate: number;
        profileurl: string;
        steamid: string;
        timecreated: number;
    };
    games: any;
}

export interface SearchResultsProps {
    results: SearchResultData | null;
}
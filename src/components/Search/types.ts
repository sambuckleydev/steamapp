import { Game } from "../Game/types";

export interface SearchProps {
    onSearch: (query: string) => any; // In production a more robust return interface would be preferred, omitting this for time.
}

export interface SearchResultData {
    steamId: string;
    playerSummary: {
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
    gamesOwned: {
        game_count: number;
        games: [Game];
        total_playtime: number;
    }
}

export interface SearchResultsProps {
    results: SearchResultData | null;
}
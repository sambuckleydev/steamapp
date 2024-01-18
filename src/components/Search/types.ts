export interface SearchProps {
    onSearch: (query: string) => any; // In production a more robust return interface would be preferred, omitting this for time.
}

export interface SearchResultData {
    steamId: string;
    data: any
}

export interface SearchResultsProps {
    results: SearchResultData | null;
}
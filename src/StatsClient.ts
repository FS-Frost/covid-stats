const URL_STATS = "https://coronavirus.m.pipedream.net";

export async function getStats(): Promise<ClientResponse> {
    const apiResponse = await fetch(URL_STATS);
    const body = await apiResponse.text();

    let clientResponse: ClientResponse = {
        status: apiResponse.status,
        json: null,
    };

    if (!apiResponse.ok) {
        console.error(body);
        return clientResponse;
    }

    clientResponse.json = JSON.parse(body) as ApiResponse;
    return clientResponse;
}

export interface ApiResponse {
    summaryStats: SummaryStats;
    cache: Cache;
    dataSource: DataSource;
    apiSourceCode: string;
}

export interface SummaryStats {
    global: Stats;
    china: Stats;
    nonChina: Stats;
}

export interface Stats {
    confirmed: number | null;
    recovered: number | null;
    deaths: number | null;
}

export interface Cache {
    lastUpdated: string;
    expires: string;
    lastUpdatedTimestamp: number;
    expiresTimestamp: number;
}

export interface DataSource {
    url: string;
    lastGithubCommit: string;
    publishedBy: string;
    ref: string;
}

export interface ClientResponse {
    status: number;
    json: ApiResponse | null;
}

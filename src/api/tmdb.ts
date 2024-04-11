import conf from "../configuration";
import {IMovie} from "../reducers/listOfMovie";
import Configuration from "../configuration";

async function get<TBody>(relativeUrl: string): Promise<TBody> {
    const options = {
        method: 'GET',
        url: `${conf.apiUrl}/3${relativeUrl}`,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${conf.apiToken}`
        }
    };
    try {
        const res = await fetch(options.url, options);
        const json: TBody = await res.json();
        return json;
    } catch (e: any) {
        return e.message;
    }
}

interface PageResponse<TResult> {
    page: number;
    results: TResult[]
}

interface Configuration {
    images: {
        base_url: string;
    }
}

export const client = {
    async getConfiguration() {
        return get<Configuration>("/configuration")
    },
    async getNowPlaying () {
        const res = await get<PageResponse<IMovie>>("/movie/now_playing?page=1");
        return res.results;
    }
}

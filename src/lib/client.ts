const API_PATH = import.meta.env.API_PATH || 'https://api.tayy.dev';

export interface Results {
    playing: boolean,
    title: string,
    artist: string,
    length: string
}

class ApiClient {
    private path: string;

    constructor(path: string) {
        this.path = path;
    }

    private failedResults: Results = {
        playing: false,
        title: "err",
        artist: "",
        length: ""
    }

    public async getServerStatus(): Promise<Results> {
        try {
            const response = await fetch(`${this.path}/currently-listening`);

            if (!response.ok) {
                return this.failedResults;
            }

            const data = await response.json();
            return data as Results;
        } catch (error) {
            return this.failedResults;
        }
    }

}



export const apiClient = new ApiClient(API_PATH);

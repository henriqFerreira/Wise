export default class DataService {
    public static async reqGet<TResponse>( url: string, config: RequestInit = {}): Promise<TResponse> {
        const response = await fetch(url, config);
        return await response.json();
    }
}
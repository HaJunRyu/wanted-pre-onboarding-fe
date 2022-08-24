import axios, { AxiosInstance, AxiosResponse } from 'axios';

const BASE_URL = 'https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/';

abstract class BaseApiService {
  protected readonly http: AxiosInstance;

  protected constructor(protected readonly path?: string) {
    this.http = axios.create({
      baseURL: `${BASE_URL}/${path ?? ''}`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  protected static handleResponse<T>(response: AxiosResponse<T>) {
    return response.data;
  }

  protected static handleError(error: unknown): never {
    if (error instanceof Error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          throw error;
        } else if (error.request) {
          throw new Error(error as any);
        }
      } else {
        throw new Error(error.message);
      }
    }
    throw new Error(error as any);
  }
}

export default BaseApiService;

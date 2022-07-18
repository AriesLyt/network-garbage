import * as axios from 'axios'

declare module 'axios' {
    interface AxiosInstance {
        (config: AxiosRequestConfig): {
            code: number,
            data: Any
        }
    }
}
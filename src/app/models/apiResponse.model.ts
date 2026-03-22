export interface Api<T>{
    success: boolean,
    data: T,
    message: string
}
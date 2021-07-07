export interface APIResponseError {
    message: string;
}

export interface APIRequestState {
    isLoading?: boolean;
    errors?: APIResponseError[] | null;
}

export interface APIRequestStateAndHandler extends APIRequestState {
    clearState: () => void;
}

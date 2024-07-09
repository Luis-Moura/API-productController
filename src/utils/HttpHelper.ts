import { HttpResponse } from '../models/HttpResponse.interface';

export const ok = async (data: any): Promise<HttpResponse> => {
    return {
        status: 200,
        body: data,
    };
};

export const noContent = async (): Promise<HttpResponse> => {
    return {
        status: 204,
        body: null,
    };
};

export const badRequest = async (): Promise<HttpResponse> => {
    return {
        status: 400,
        body: null,
    };
};

export const created = async (): Promise<HttpResponse> => {
    return {
        status: 201,
        body: {
            message: 'created successful'
        }
    };
};

export const internalServerError = async (): Promise<HttpResponse> => {
    return {
        status: 500,
        body: null,
    };
};

export const unauthorized = async (): Promise<HttpResponse> => {
    return {
        status: 401,
        body: null,
    };
};

export const forbidden = async (): Promise<HttpResponse> => {
    return {
        status: 403,
        body: null,
    };
};

export const notFound = async (): Promise<HttpResponse> => {
    return {
        status: 404,
        body: null,
    };
};

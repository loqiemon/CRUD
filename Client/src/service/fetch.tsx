type methods = 'DELETE' | 'POST' | 'GET' | 'POST';

type RequestObj = {
    method: methods;
    body: object;
    headers: HeadersInit;
}

export async function request<T>(url: string) : Promise<T>;
export async function request<T>(url: string, requestObj: RequestObj) : Promise<T>;

export async function request<T>(url: string, requestObj?:RequestObj) : Promise<T>{
    if (requestObj!==undefined) {
        const response = await fetch(url, {
            method: requestObj.method,
            headers: requestObj.headers,
            body: JSON.stringify(requestObj.body),
            credentials: 'include' 
        });
        const body = await response.json();
        return body
    }else {
        const response = await fetch(url, {credentials: 'include' });
        const body = await response.json();
        return body
    }
}



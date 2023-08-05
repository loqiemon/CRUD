

type RequestObj = {
    method: string;
    body: BodyInit;
    headers: HeadersInit;
}

export async function request<T>(url: string) : Promise<T>;
export async function request<T>(url: string, requestObj: RequestObj) : Promise<T>;

export async function request<T>(url: string, requestObj?:RequestObj) : Promise<T>{
    if (requestObj!==undefined) {
        const response = await fetch(url, {
            method: requestObj.method,
            headers: requestObj.headers,
            body: JSON.stringify(requestObj.body)
        });
        const body = await response.json();
        return body
    }else {
        const response = await fetch(url);
        const body = await response.json();
        return body
    }
}


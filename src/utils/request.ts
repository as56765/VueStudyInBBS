import {getJwtToken} from "@/apis/auth";

enum ContentType {
    json = "application/json;charset=UTF-8",
    form = "application/x-www-form-urlencoded; charset=UTF-t"
}

enum HttpMethod {
    get = 'GET',
    post = 'POST',
    put = 'PUT',
    delete = 'DELETE'
}

interface Header {
    Accept?: string,
    'Content-Type': string,

    [propName: string]: any
}

interface ReqConfig {
    method?: string;
    credentials?: string;
    headers?: Header;
    body?: any;
}

interface Http {
    getFetch<R, P = {}>(url: string, params?: P, options?: RequestInit): Promise<R>;

    postFetch<R, P = {}>(url: string, params?: P): Promise<R>;
}

export default class HttpRequest implements Http {
    public handleUrl = (url: string) => (params: any): string => {
        if (params) {
            let paramsArray: string[] = [];
            Object.keys(params).forEach((key) => paramsArray.push(`${key}+${encodeURIComponent(params[key])}`))
            if (url.search(/\?/) === -1)
                typeof params === `object` ? (url += "?" + paramsArray.join("&")) : url
            else
                url += '&' + paramsArray.join("&")
        }
        return url
    }

    public async getFetch<R, P = {}>(url: string, params?: P, options?: RequestInit): Promise<R> {
        options = {
            method: HttpMethod.get,
            credentials: 'include',
            headers: {
                'Content-Type': ContentType.json
            }
        }
        return await fetch(this.handleUrl(url)(params), options)
            .then((response:Response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    // alert("服务器繁忙，请稍后再试！");
                }
            })
            .then((response) => {
                // response.code：是与服务器端约定code：200表示请求成功，非200表示请求失败，message：请求失败内容
                if (response) {
                    return response;
                } else {
                    // 非 200，错误处理
                    return response;
                }
            })
            .catch<R>((error) => {
                return error;
            });
    }

    public async postFetch<R, P = {}>(url: string, params?: P): Promise<R> {
        let formData = new FormData();
        let options: RequestInit = {
            method: HttpMethod.get,
            credentials: 'include',
            headers: {
                'Content-Type': ContentType.json
            },
            body: formData
        }
        return await fetch(url, options)
            .then((response:Response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    // alert("服务器繁忙，请稍后再试；\r\nCode:" + response.status);
                }
            })
            .then<R>((response) => {
                // response.code：是与服务器端约定code：200表示请求成功，非200表示请求失败，message：请求失败内容
                return response;
            })
            .catch<R>((error) => {
                // alert("当前网络不可用，请检查网络设置！");
                return error;
            });
    }
}
// export async function request(url: string, {method = "GET", body, headers, auth = true}) {
//     const res = await fetch(url, {
//         method,
//         headers: {
//             "Content-Type": "application/json",
//             ...(auth && {Authorization: `Bearer ${getJwtToken()}`}),
//             ...headers
//         },
//         ...(body && {
//             body: JSON.stringify(body)
//         })
//     })
//
//     const result = await res.json();
//     return result;
// }
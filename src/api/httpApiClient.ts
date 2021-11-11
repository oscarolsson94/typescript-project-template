import axios, { AxiosResponse, Method } from "axios";

export const apiRequestId = async <TResult, TBody>(
  url: string,
  token: string,
  method: Method,
  id: string,
  reqData?: TBody
): Promise<TResult> => {
  const response: AxiosResponse = await axios(
    `${process.env.REACT_APP_API_URL}${url}/${id}`,
    {
      method: method,
      headers: getHeaders(token),
      data: reqData ?? null,
    }
  );
  return response.data;
};

export const apiRequest = async <TResult, TBody>(
  url: string,
  token: string,
  method: Method,
  reqData?: TBody
): Promise<TResult> => {
  const response: AxiosResponse = await axios(
    `${process.env.REACT_APP_API_URL}${url}`,
    {
      method: method,
      headers: getHeaders(token),
      data: reqData ?? null,
    }
  );
  return response.data;
};

//helper
const getHeaders = (token?: string) => {
  if (token) {
    const headersWithAuth = {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return headersWithAuth;
  } else {
    const headersNoAuth = {
      "content-type": "application/json",
    };
    return headersNoAuth;
  }
};

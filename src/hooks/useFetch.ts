import { HOUR } from "@/constants/constants";

interface FetchProps {
  url: string;
  soporte: boolean;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  data?: object;
  tags?: string[];
  revalidate?: boolean;
  cache?: RequestCache;
}

export default async function useFetch(props: FetchProps) {
  const { tags, revalidate, url, soporte, cache, method, data } = props;

  const init: RequestInit = {
    ...(cache && { cache: cache }),
    ...(method && method != "GET" && {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }),
  };

  init.next = {
    ...(revalidate && { revalidate: 3*HOUR }),
    ...(tags && { tags: tags }),
  };

  const api_url = soporte
    ? process.env.soporteApiUrl
    : process.env.proyectosApiUrl;

  const response = await fetch(api_url + url, init);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else if (response.status == 500) {
    throw new Error("Hubo un error en el back");
  } else if (response.status == 404) {
    throw new Error("No existe el endpoint");
  } else {
    throw new Error("Hubo un error desconocido");
  }
}

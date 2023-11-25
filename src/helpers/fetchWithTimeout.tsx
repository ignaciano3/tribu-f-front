const BASE_URL = process.env.API_URL;

// Lo que hace este helper es que si la petición tarda más de 30 segundos, se aborta
export default async function fetchWithTimeOut(resource, options) {
  const { timeout = 30000 } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(BASE_URL + resource, {
    ...options,
    signal: controller.signal,
  });

  clearTimeout(id);

  return response;
}

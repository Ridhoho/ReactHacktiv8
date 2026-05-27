import type { CafeType, CafeWithDetail } from "../types/cafe";

const getApiUrl = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  if (!apiUrl) {
    throw new Error("VITE_API_URL is missing");
  }

  return apiUrl;
};

const fetchJson = async <T>(url: string, signal?: AbortSignal): Promise<T> => {
  const res = await fetch(url, { signal });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<T>;
};

export const getCafes = (search: string, signal?: AbortSignal) => {
  const query = search.trim().toLowerCase();
  const apiUrl = getApiUrl();
  const url = query
    ? `${apiUrl}/cafes?search=${encodeURIComponent(query)}`
    : `${apiUrl}/cafes`;

  return fetchJson<CafeType[]>(url, signal);
};

export const getCafeById = (cafeId: string, signal?: AbortSignal) => {
  const apiUrl = getApiUrl();

  return fetchJson<CafeWithDetail>(
    `${apiUrl}/cafes/${encodeURIComponent(cafeId)}`,
    signal,
  );
};

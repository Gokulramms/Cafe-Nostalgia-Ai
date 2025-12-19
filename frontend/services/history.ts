import { apiFetch } from "./api";

export function fetchHistory(shopId: number) {
  return apiFetch<any[]>(`/history?shop_id=${shopId}`);
}

import { apiFetch } from "./api";

export function fetchOverview(shopId: number) {
  return apiFetch(`/analytics/overview?shop_id=${shopId}`);
}

export function fetchSales(shopId: number) {
  return apiFetch(`/analytics/sales?shop_id=${shopId}`);
}

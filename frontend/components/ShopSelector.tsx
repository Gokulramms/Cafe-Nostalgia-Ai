"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/services/api";

type Shop = {
  id: number;
  shopify_domain: string;
};

export default function ShopSelector({
  onChange,
}: {
  onChange: (shopId: number) => void;
}) {
  const [shops, setShops] = useState<Shop[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    apiFetch<Shop[]>("/shops").then((data) => {
      setShops(data);
      if (data.length) {
        setSelected(data[0].id);
        onChange(data[0].id);
      }
    });
  }, []);

  return (
    <select
      className="bg-neutral-800 p-2 rounded"
      value={selected ?? ""}
      onChange={(e) => {
        const id = Number(e.target.value);
        setSelected(id);
        onChange(id);
      }}
    >
      {shops.map((shop) => (
        <option key={shop.id} value={shop.id}>
          {shop.shopify_domain}
        </option>
      ))}
    </select>
  );
}

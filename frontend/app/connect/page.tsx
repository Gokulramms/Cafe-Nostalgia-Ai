"use client";

export default function ConnectShopifyPage() {
  const handleConnect = () => {
    const shop = prompt(
      "Enter your Shopify store domain (example: my-store.myshopify.com)"
    );

    if (!shop) return;

    // 🔥 HARD REDIRECT TO RAILS (NOT FETCH)
    window.location.href = `http://localhost:3001/api/v1/shopify/connect?shop=${shop}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-2xl font-bold mb-2">Connect Shopify Store</h1>
      <p className="text-neutral-400 mb-6">
        Securely connect your Shopify store to unlock AI analytics
      </p>

      <button
        onClick={handleConnect}
        className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold"
      >
        Connect Shopify
      </button>
    </div>
  );
}

import http from "@/api";

const basket = {
  get: () => http.get(`/user-baskets`),
  basketPost: (product: any) => http.post(`/basket`, product),
  basketDel: (productId: number) => http.delete(`/basket/${productId}`),
};

export default basket;

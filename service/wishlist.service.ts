import http from "@/api";

export const postLike = async (id: any) => {
  try {
    const res = await http.post(`/like/${id}`);
    if (res.status === 201) {
      return res.data;
    } else {
      console.error("Unexpected status code:", res.status);
      return null;
    }
  } catch (err) {
    console.error("Error posting like:", err);
    return null;
  }
};

export const getLike = async (limit: number, page: number) => {
  try {
    const res = await http.get(`/wishlist?page=${page}&limit=${limit}`);
    if (res.status === 200) {
      return res.data;
    } else {
      console.error("Unexpected status code:", res.status);
      return null;
    }
  } catch (err) {
    console.error("Error fetching liked products:", err);
    return null;
  }
};

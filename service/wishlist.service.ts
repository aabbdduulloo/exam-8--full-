import http from "@/api";

// Mahsulotning like holatini localStorage da yangilash
const updateLocalStorageLikes = (id: number, add: boolean) => {
  // LocalStorage-dan oldingi liked mahsulotlarni oling
  const savedLikes = JSON.parse(localStorage.getItem("likedProducts") || "[]");

  let updatedLikes;
  if (add) {
    // Agar mahsulot allaqachon liked bo'lsa, uni ro'yxatdan olib tashlash
    updatedLikes = savedLikes.includes(id) ? savedLikes : [...savedLikes, id];
  } else {
    // Agar mahsulot liked bo'lsa, uni ro'yxatdan olib tashlash
    updatedLikes = savedLikes.filter((pid: number) => pid !== id);
  }

  // Yangilangan liked mahsulotlarni localStorage ga saqlash
  localStorage.setItem("likedProducts", JSON.stringify(updatedLikes));
};

export const postLike = async (id: number) => {
  try {
    const res = await http.post(`/like/${id}`);
    if (res.status === 201) {
      // LocalStorage ni yangilash
      updateLocalStorageLikes(id, true); // Like qo'shish
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

import http from "@/api";

interface Product {
  id: number;
  product_id: string;
  product_name: string;
  image_url: string | string[];
  cost: string;
  liked: boolean;
}

interface Comment {
  id: number;
  message: string;
  ownerID: string;
  productID: string;
}

interface ProductResponse {
  data: any;
  status: number;
  products: Product[];
}

interface CommentResponse {
  data: any;
  status: number;
  comments: Comment[];
}

export const getComment = async (
  page: number,
  limit: number,
  product_id: string
): Promise<CommentResponse> => {
  try {
    const response = await http.get(
      `/product-comments?page=${page}&limit=${limit}&id=${product_id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addComment = async (values: {
  message: string;
  productID: string;
  ownerID: string;
}) => {
  try {
    const response = await http.post("/comment", values);
    return response.data;
  } catch (error) {
    console.error("Error adding comment:", error);
    throw error;
  }
};

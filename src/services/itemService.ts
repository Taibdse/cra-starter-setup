import axiosClient from "config/axios";

const baseUrl = "/item";

class ItemService {
  static async getAll() {
    const url = `${baseUrl}`;
    return axiosClient.get(url);
  }

  static async getById(id) {
    const url = `${baseUrl}/${id}`;
    return axiosClient.get(url);
  }

  static async create(data) {
    const url = `${baseUrl}`;
    return axiosClient.post(url, data);
  }

  static async update(data) {
    const url = `${baseUrl}/${data?.item?.id}`;
    return axiosClient.put(url, data);
  }

  static async delete(id) {
    const url = `${baseUrl}/${id}`;
    return axiosClient.delete(url);
  }
}

export default ItemService;

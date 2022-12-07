import axios from "axios";

export default class ItemService {
  async buscarItem(id) {
    const { data } = await axios.get("api/itens/");
    return data.filter(item => item.classe === id);
  }
  async buscarItemPorId(id) {
    const { data } = await axios.get(`api/itens/${id}`);
    return data;
  }
}
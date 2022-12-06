import axios from "axios";

export default class ClasseService {
  async buscarClasses() {
    const { data } = await axios.get("api/class/");
    return data;
  }
  async buscarClassePorId(id) {
    const { data } = await axios.get(`api/class/${id}`);
    return data;
  }
}
import axios from "axios";
import { apiEndPoint } from "../config.json";
function getEmails() {
  const resu = axios.get(apiEndPoint + "/emails/getEmails");
  return resu;
}

export default getEmails;

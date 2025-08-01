import axios from "axios";
const url = "https://api.siputzx.my.id/api/s/pinterest?query=ronaldo&type=image";

async function api() {
  try {
    const res = await axios.get(url);
    console.log(res.data.data);
  } catch (err) {
    console.error(err);
  }
}
api();

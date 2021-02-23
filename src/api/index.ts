import axios from "axios";
import { Template } from "../pages/TemplatePicker/TemplatePicker";

export const fetchAll = async () => {
  const url = "https://api.imgflip.com/get_memes";
  const response = await axios.get(url);

  return response.data.data.memes.map((meme: { [key: string]: any }) => ({
    ...meme,
    boxCount: meme["box_count"],
  })) as Template[];
};

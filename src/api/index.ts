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

export const addCaption = async (templateId: number, captions: string[]) => {
  const url = `https://cors-anywhere.herokuapp.com/https://api.imgflip.com/caption_image`;
  let queryParams = `?template_id=${templateId}&username=JanMajchrzak&password=racecarera`;
  captions.forEach((caption, idx) => {
    queryParams = queryParams + `&boxes[${idx}][text]=${caption}`;
  });

  const response = await axios.post(url + queryParams);
  console.log(response);

  if (!response.data.success) {
    throw new Error();
  }
  return response.data.data.url;
};

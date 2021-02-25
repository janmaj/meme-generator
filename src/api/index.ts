import axios from "axios";
import { Template } from "../pages/TemplatePicker/TemplatePicker";
import firebase from "firebase";
import "firebase/firestore";
import { Meme } from "../pages/UserMemes/UserMemes";

firebase.initializeApp({
  apiKey: "AIzaSyC18GRU8ovgGJpPO_KxnnkRfqrw-5SztY8",
  authDomain: "meme-generator-6e7b8.firebaseapp.com",
  projectId: "meme-generator-6e7b8",
});

const db = firebase.firestore();

export const fetchAllTemplates = async () => {
  const url = "https://api.imgflip.com/get_memes";
  try {
    const response = await axios.get(url);

    return response.data.data.memes.map((meme: { [key: string]: any }) => ({
      ...meme,
      boxCount: meme["box_count"],
    })) as Template[];
  } catch (error) {
    throw error;
  }
};

export const addCaption = async (templateId: number, captions: string[]) => {
  const url = `https://api.imgflip.com/caption_image`;
  let queryParams = `?template_id=${templateId}&username=JanMajchrzak&password=racecarera&origin=*`;
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

export const saveMeme = async (url: string) => {
  try {
    await db.collection("memes").add({ url });
    console.log("saved");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchAllMemes = async () => {
  try {
    const { docs } = await db.collection("memes").get();
    return docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Meme[];
  } catch (error) {
    throw error;
  }
};

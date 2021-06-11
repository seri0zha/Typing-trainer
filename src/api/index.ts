import axios from "axios";

export const fetchTextRu = async (sentencesCount: number) => {
  try {
    const response = await axios.get(`https://fish-text.ru/get?format=html&number=${sentencesCount}`);
    const text = response.data.substring(
      response.data.lastIndexOf('<p>') + 3,
      response.data.lastIndexOf('</p>'));
    return text;
  } catch (error) {
    alert(error);
  }
};

export const fetchTextEn = async (sentencesCount: number) => {
  try {
    const response = await axios.get(`https://baconipsum.com/api/?type=all-meat&sentences=${sentencesCount}`);
    return response.data[0];
  } catch (error) {
    alert(error);
  }
};

export const fetchText = async (sentencesCount: number, language: "ru" | "en") => {
  if (language === "ru")
    return await fetchTextRu(sentencesCount);
  else if (language === "en")
    return await fetchTextEn(sentencesCount);
  return "";
}
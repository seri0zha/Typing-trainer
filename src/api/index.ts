import axios from "axios";

export const fetchText = async (sentencesCount: number) => {
  try {
    const response = await axios.get(`https://fish-text.ru/get?format=html&number=${sentencesCount}`);
    console.log(response);
    return response;
  } catch (error) {
    alert(error);
  }
};
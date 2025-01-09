import axios from "axios";

const mainProdCenter_URL =
  "http://localhost:8000/webMgt/mainProdCenter/mainList";

export interface mainProdCenterDataRes {
  code: number;
  msg: string;
  data: mainProdCenterDataResD;
}

export interface mainProdCenterDataResD {
  id: number;
  prodTitle: string;
  text: string;
  prodImgAddress: string;
  prodCommon1: string;
  prodCommon2: string;
  prodCommon3: string;
  prodCommon4: string;
}

export const mainProdCenterData = async (): Promise<
  mainProdCenterDataResD[]
> => {
  try {
    const response = await axios.post(`${mainProdCenter_URL}`);
    return response.data.data; // 这里的类型是 DataResponse[]
  } catch (error) {
    console.error("调用接口失败:", error);
    throw error;
  }
};

export const mainProdPostersData = async (): Promise<
  mainProdCenterDataResD[]
> => {
  try {
    const response = await axios.post(`${mainProdCenter_URL}`);
    return response.data.data; // 这里的类型是 DataResponse[]
  } catch (error) {
    console.error("调用接口失败:", error);
    throw error;
  }
};

const mainAboutUs_URL = "http://localhost:8000/webMgt/mainAboutUs/mainList";
export interface mainAboutUsRes {
  code: number;
  msg: string;
  data: mainAboutUsResD;
}

export interface mainAboutUsResD {
  id: number;
  title: string;
  descbsion: string;
  image: string;
}

export const mainAboutUsData = async (): Promise<mainAboutUsResD> => {
  try {
    const response = await axios.post(`${mainAboutUs_URL}`);
    return response.data.data; // 这里的类型是 DataResponse[]
  } catch (error) {
    console.error("调用接口失败:", error);
    throw error;
  }
};

const mainCarousel_URL = "http://localhost:8000/webMgt/carousel/mainList";
export interface mainCarouselRes {
  code: number;
  msg: string;
  data: mainCarouselResD;
}

export interface mainCarouselResD {
  id: number;
  title: string;
  descbsion: string;
  image: string;
}

export const mainCarouselData = async (): Promise<mainCarouselResD[]> => {
  try {
    const response = await axios.post(`${mainCarousel_URL}`);
    return response.data.data; // 这里的类型是 DataResponse[]
  } catch (error) {
    console.error("调用接口失败:", error);
    throw error;
  }
};

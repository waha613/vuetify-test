import axios from "axios";

// ================= 首页-产品中心，产品海报========================
const mainProdCenter_URL =
  "http://101.200.63.144:8000/webMgt/mainProdCenter/mainList";

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

// ================= 首页-关于我们========================

const mainAboutUs_URL = "http://101.200.63.144:8000/webMgt/mainAboutUs/mainList";
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

// ================= 首页-轮播图========================

const mainCarousel_URL = "http://101.200.63.144:8000/webMgt/carousel/mainList";
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

// =================关于我们-公司简介========================
const companyInfo_URL = "http://101.200.63.144:8000/webMgt/companyInfo/mainList";
export interface companyInfoRes {
  code: number;
  msg: string;
  data: companyInfoResD;
}

export interface companyInfoResD {
  id: number;
  content: string;
}

export const companyInfoData = async (): Promise<companyInfoResD> => {
  try {
    const response = await axios.post(`${companyInfo_URL}`);
    return response.data.data; // 这里的类型是 DataResponse[]
  } catch (error) {
    console.error("调用接口失败:", error);
    throw error;
  }
};

// ================= 关于我们-资质证书========================

const certificate_URL = "http://101.200.63.144:8000/webMgt/certificate/mainList";
export interface certificateRes {
  code: number;
  msg: string;
  data: certificateResD;
}

export interface certificateResD {
  id: number;
  title: string;
  image: string;
}

export const certificateData = async (): Promise<certificateResD[]> => {
  try {
    const response = await axios.post(`${certificate_URL}`);
    return response.data.data; // 这里的类型是 DataResponse[]
  } catch (error) {
    console.error("调用接口失败:", error);
    throw error;
  }
};


// ================= 产品中心========================
const prodCenter_URL =
  "http://101.200.63.144:8000/webMgt/mainProdCenter/prodCenterList";

export interface prodCenterDataRes {
  code: number;
  msg: string;
  data: prodCenterDataResD;
}

export interface prodCenterDataResD {
  prodType: string;
  details: prodCenterDataResDdetals[];
}

export interface prodCenterDataResDdetals {
  id: number;
  prodTitle: string;
  text: string;
  prodType:string;
  prodImgAddress: string;
  prodCommon1: string;
  prodCommon2: string;
  prodCommon3: string;
  prodCommon4: string;
}

export const prodCenterData = async (): Promise<
prodCenterDataResD[]
> => {
  try {
    const response = await axios.post(`${prodCenter_URL}`);
    return response.data.data; // 这里的类型是 DataResponse[]
  } catch (error) {
    console.error("调用接口失败:", error);
    throw error;
  }
};

// =================缴费服务========================
const feeService_URL = "http://101.200.63.144:8000/webMgt/feeService/mainList";
export interface feeServiceRes {
  code: number;
  msg: string;
  data: feeServiceResD;
}

export interface feeServiceResD {
  id: number;
  content: string;
}

export const feeServiceData = async (): Promise<feeServiceResD> => {
  try {
    const response = await axios.post(`${feeService_URL}`);
    return response.data.data; // 这里的类型是 DataResponse[]
  } catch (error) {
    console.error("调用接口失败:", error);
    throw error;
  }
};

// =================联系我们========================
const contactUs_URL = "http://101.200.63.144:8000/webMgt/contactUs/mainList";
export interface contactUsRes {
  code: number;
  msg: string;
  data: contactUsResD;
}

export interface contactUsResD {
  id: number;
  title:string;
  content: string;
  phoneNumber: string;
  email: string;
  address: string;
}

export const contactUsData = async (): Promise<contactUsResD> => {
  try {
    const response = await axios.post(`${contactUs_URL}`);
    return response.data.data; // 这里的类型是 DataResponse[]
  } catch (error) {
    console.error("调用接口失败:", error);
    throw error;
  }
};
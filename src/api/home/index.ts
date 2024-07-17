//管理首页模块
import request from "@/utils/request.ts";

//通过枚举管理首页模块接口地址
enum API {
    //获取首页数据
    HOSPITAL_URL = "/hosp/hospital/",
}

export const reqHospital = (page: number, limit: number) => request.get(API.HOSPITAL_URL + `${page}/${limit}`);
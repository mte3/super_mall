import {request} from "./request";

export function getImage() {
  return request({
    url:'/home/multidata'
  })
}

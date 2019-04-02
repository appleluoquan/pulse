
import request from '@/util/request';


export const a = (data) => {
  return request({
    url: '/api/a',
    method: 'get',
    params: data
  })
};

export const b = (data) => {
  return request({
    url: '/api/b',
    method: 'post',
    data: data
  })
};

export const  c = (data) => {
  return request({
    url: '/api/c',
    method: 'get',
    params: data
  })
};

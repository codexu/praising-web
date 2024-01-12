import request, { Response, ListResult } from '@/libs/request';

export interface KeywordResult {
  id: number;
  word: string;
  weight: number;
  hot: number;
  count: number;
  comment: number;
  like: number;
  pinIds: string[];
  authorIds: string[];
  isBlock: boolean;
  value: number;
}

export function getKeywords(size: number = 10) {
  return request<Response<KeywordResult[]>>({
    method: 'get',
    url: '/pin/list',
    params: {
      size,
    },
  });
}

export interface Pin {
  id: number;
  pinId: string;
  authorId: string;
  content: string;
  club?: any;
  comment: number;
  like: number;
}

// 根据 pinIds 获取 pin 列表信息
export function getPinsByPinIds(ids: string[]) {
  return request<Response<Pin[]>>({
    method: 'post',
    url: '/pin/detailList',
    data: {
      ids,
    },
  });
}

// 屏蔽关键词
export function blockKeyword(id: number, isBlock: boolean) {
  return request<Response<boolean>>({
    method: 'get',
    url: '/pin/block',
    params: {
      id,
      isBlock,
    },
  });
}

export interface PagePin {
  id: number;
  content: string;
  isTemplate: boolean;
}

// 分页获取沸点列表
export function getPinPage(
  page: number = 1,
  pageSize: number = 20,
  isTemplate: boolean,
) {
  return request<Response<ListResult<PagePin>>>({
    method: 'get',
    url: '/pin/listPage',
    params: {
      page,
      pageSize,
      isTemplate,
    },
  });
}

// 设置模板状态
export function setTemplate(id: number, isTemplate: boolean) {
  return request<Response<boolean>>({
    method: 'get',
    url: '/pin/setTemplate',
    params: {
      id,
      isTemplate,
    },
  });
}

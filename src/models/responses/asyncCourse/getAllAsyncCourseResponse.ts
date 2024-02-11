export interface AsyncCourse {
  id:string;
  categoryId: string;
  name: string;
  createdDate:string;
}

export interface getAllAsyncCourseResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: AsyncCourse[];
  hasPrevious: boolean;
  hasNext: boolean;
}

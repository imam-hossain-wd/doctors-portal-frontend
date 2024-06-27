export interface IMeta {
    limit: number;
    page: number;
    size: number;
  }
  
  export type ResponseSuccessType = {
    data: any;
    meta?: IMeta;
  };
  
  export type IGenericErrorResponse = {
    statusCode: number;
    message: string;
    errorMessages: IGenericErrorMessage[];
  };
  
  export type IGenericErrorMessage = {
    path: string | number;
    message: string;
  };
  

  
  export type SignupProps = {
    name?: string;
    email?: string;
    phone?: string;
    password?: string;
  };
  export type LoginProps = {
    email?: string;
    password?: string;
  };
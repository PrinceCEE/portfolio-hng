import { Req, Res, Next, IResponse } from './interfaces';

export const asyncHandler = (fn: (req: Req, res: Res, next?: Next) => Promise<any>) => {
  return (req: Req, res: Res, next?: Next) => {
    fn(req, res, next).catch(err => {
      console.log(`Error caught: ${err.message}`);
      
      const response: IResponse = {
        success: false,
        data: "Internal server error"
      };
      
      res.status(500).json(response);
    });
  };
};
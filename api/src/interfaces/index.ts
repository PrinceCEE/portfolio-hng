import { Request, Response, NextFunction } from "express";
import { Document } from "mongoose";

// type aliases for the express interfaces
export type Req = Request;
export type Res = Response;
export type Next = NextFunction;

export interface IResponse {
  success: boolean
  data: any
}

export interface IContact extends Document {
  name: string
  email: string
  subject: string
  message: string
}
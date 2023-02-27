import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { withException } from "./withException";

type Method = 'GET' | 'POST' | 'PUT'

export function withMethodsGuard (handler: NextApiHandler, methods: Array<Method>) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (!req?.method || !methods.includes(req?.method as any)) return res.status(404).send('Not Found')

    await handler(req, res)
  }
}

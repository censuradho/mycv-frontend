import { getExceptionMessage, getExceptionStack, getExceptionStatus } from "@/lib/api-error";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"

export function withException (handler: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {

      return await handler(req, res)
    } catch (exception) {
      const { url, headers } = req;

      const statusCode = getExceptionStatus(exception);
      const message = getExceptionMessage(exception);
      const stack = getExceptionStack(exception);

      // NB: tweak this according to how you retrieve your user in your requests
      const referer = headers['referer'];
      const userAgent = headers['user-agent'];

      const responseBody = {
        statusCode,
        path: req.url,
      };

      return res.status(responseBody.statusCode).json(exception)
    }
  }
}
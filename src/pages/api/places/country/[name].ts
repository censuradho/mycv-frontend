import { appSettings } from '@/config/appSettings'
import { withMethodsGuard } from '@/hoc'
import { placeServices } from '@/services/ninja/places'
import { NextApiRequest, NextApiResponse } from 'next'

async function handler (req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') return res.status(404).send('Not found')

    const { name } = req.query
  
    const { data } = await placeServices.findCountryByName(name as string)
  
    return res.json(data)
  } catch (err) {
    return res.status(500).send(err)
  }
}

export default withMethodsGuard(handler, ['GET'])
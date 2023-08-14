import cors from 'cors'
const corsWhitelist: string[] = []

const checkAllowedOrigin = (origin: string | undefined): boolean => {
  console.log(origin)
  if (origin == null) return false
  if (origin.startsWith('http://localhost')) return true

  return corsWhitelist.includes(origin)
}

const corsOptions = {
  origin: function (origin: string, callback: any) {
    if (checkAllowedOrigin(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  exposedHeaders: ['x-total-count', 'X-RateLimit-Limit', 'X-RateLimit-Remaining', 'X-RateLimit-Reset']
}

export default cors(corsOptions as any)

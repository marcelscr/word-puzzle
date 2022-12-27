import { createCookieSessionStorage } from '@remix-run/node'

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: '__session',
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
      secrets: ['s3cret1']
    }
  })

export { getSession, commitSession, destroySession }

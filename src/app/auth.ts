import { createClient } from "@openauthjs/openauth/client"
import { cookies as getCookies } from "next/headers"

export const client = createClient({
  clientID: "test_client_nextjs",
  issuer: "https://test-openauth.dahekar30sahil.workers.dev",
})

import { createSubjects } from "@openauthjs/openauth/subject";
import { email, object, pipe, string, url } from "valibot";


export const subjects = createSubjects({
  user: object({
    id: string(),
    name: string(),
    email: pipe(string(), email()),
    picture: pipe(string(), url())
  }),
});

export async function setTokens(access: string, refresh: string) {
  const cookies = await getCookies()

  cookies.set({
    name: "access_token",
    value: access,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 34560000,
  })
  cookies.set({
    name: "refresh_token",
    value: refresh,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 34560000,
  })
}
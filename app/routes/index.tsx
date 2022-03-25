import { LoaderFunction, useLoaderData } from 'remix'

import Header from '~/components/header'

type Data = {
  word: string
}

export const loader: LoaderFunction = async () => {
  const data: Data = {
    word: 'Illidan'
  }

  return data
}

export default function Index() {
  const data = useLoaderData<Data>()

  return (
    <>
      <Header />
      <main className="flex flex-col items-center p-8">
        <h1>Welcome to Wordle of Warcraft</h1>
        <p>Word of the day: {data.word}</p>
      </main>
    </>
  )
}

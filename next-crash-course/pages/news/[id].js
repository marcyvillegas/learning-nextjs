import { useRouter } from 'next/router';

export default function DetailedNews() {

  const router = useRouter();

  const id = router.query.id

  // send a request to the api using an endpoint
  // to fetch data

    return (
      <div>
        this is the detailed about
      </div>
    )
  }
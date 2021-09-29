import Error from 'next/error';

export default function NotFound(): JSX.Element {
  //  do not record an exception in Sentry for 404
  return <Error statusCode={404} />
}

import MainLayout from "../layouts/mainLayout";

function Error({ statusCode }) {

  return (
    <MainLayout errorPage={true}>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    </MainLayout>
  )
}
 
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode }
}
 
export default Error
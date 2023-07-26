import MainLayout from "../layouts/mainLayout";

export default function Custom404() {
  return (
    <MainLayout errorPage={true}>
      <p>
        An error 404 occurred on server
      </p>
    </MainLayout>
  )
}

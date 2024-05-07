import Layout from "../components/layout"

export default function Custom404() {
  return (
    <Layout>
      <div className={`flex flex-col`}>
        <span>404: Could not find the requested page</span>
      </div>
    </Layout>
  )
}

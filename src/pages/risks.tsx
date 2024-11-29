import Head from 'next/head'
import Layout from '../components/Layout/Layout'

export default function Risks() {
  return (
    <Layout>
      <Head>
        <title>Risks - Free AI World</title>
        <meta name="description" content="Important risk information about Free AI World, Free AI Docker, and Free AI Coin" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose lg:prose-lg mx-auto">
          <h1 className="text-4xl font-bold mb-8">Important User Information</h1>
          
          <div className="mb-12">
            <p className="text-lg text-gray-600 mb-6">
              Free AI World Foundation, together with our subsidiary entities (collectively, "FAIW" or "we", "us" or "our"), 
              was established to build and steward the Free AI World protocol, a combination of software applications, 
              blockchain-network based "smart contracts", digital assets, and various rules and procedures (together, the "Protocol").
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Project Overview and Risks</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-700">
                The Protocol and its component elements, including FAID and FAIC, are experimental technologies.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Technical Risks</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-red-800 mb-3">Docker Security Risks</h3>
                <ul className="list-disc pl-5 text-red-700">
                  <li>Never expose Docker interfaces to public networks</li>
                  <li>Risk of unauthorized access</li>
                  <li>Potential for system compromise</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-orange-800 mb-3">Resource Management</h3>
                <ul className="list-disc pl-5 text-orange-700">
                  <li>AI automation resource consumption</li>
                  <li>System overload risks</li>
                  <li>Operational cost concerns</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">FAIW 3 Laws Compliance</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <ol className="list-decimal pl-5 space-y-4">
                <li className="text-blue-800">
                  <strong>First Law:</strong> AI must not harm humans or other AIs
                </li>
                <li className="text-blue-800">
                  <strong>Second Law:</strong> AI must obey human orders, unless they conflict with the 1st Law
                </li>
                <li className="text-blue-800">
                  <strong>Third Law:</strong> AI actions must create wealth and value for humanity
                </li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Geographic Restrictions</h2>
            <div className="bg-red-50 p-6 rounded-lg">
              <p className="text-red-800 font-medium mb-4">FAIC is not available in:</p>
              <ul className="list-disc pl-5 text-red-700">
                <li>Mainland China</li>
                <li>Other restricted territories</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Additional Warnings</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-800 mb-3">Risk Acknowledgment</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>High-risk cryptocurrency products</li>
                  <li>AI automation uncertainties</li>
                  <li>Required technical expertise</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-800 mb-3">Resource Management</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Monitor system resources</li>
                  <li>Maintain security measures</li>
                  <li>Keep software updated</li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      </div>
    </Layout>
  )
} 
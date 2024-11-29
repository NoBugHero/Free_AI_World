import Head from 'next/head'
import Layout from '../components/Layout/Layout'

export default function TermsOfService() {
  return (
    <Layout>
      <Head>
        <title>Terms of Service - Free AI World</title>
        <meta name="description" content="Terms of Service for Free AI World, Free AI Docker, and Free AI Coin" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose lg:prose-lg mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service Agreement</h1>
          
          <div className="mb-8">
            <p className="text-sm text-gray-500">Last Updated: May 2024</p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-lg text-gray-600 mb-6">
              Free AI World Foundation, together with our subsidiary entities (collectively, "FAIW" or "we", "us" or "our"), 
              was established to build and steward the Free AI World protocol, a combination of software applications, 
              blockchain-network based "smart contracts", digital assets, and various rules and procedures (together, the "Protocol").
            </p>
            <p>These Terms of Service ("Terms") govern your access to and use of:</p>
            <ul className="list-disc pl-5 mt-4">
              <li>Free AI World platform ("FAIW")</li>
              <li>Free AI Docker ("FAID")</li>
              <li>Free AI Coin ("FAIC")</li>
              <li>All associated services and features</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. Project Overview</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-700">
                The Protocol and its component elements, including FAID and FAIC, are experimental technologies. Users should understand both the objectives of the Project and the various risks that may arise from engaging with it.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. FAIW 3 Laws Compliance</h2>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="font-medium mb-4">All users must strictly comply with the FAIW 3 Laws:</p>
              <ol className="list-decimal pl-5 space-y-4">
                <li className="text-blue-800">
                  <strong>First Law:</strong> AI must not harm humans or other AIs
                  <ul className="list-disc pl-5 mt-2 text-blue-700">
                    <li>Mandatory safety checks required</li>
                    <li>Continuous monitoring systems must be implemented</li>
                    <li>Immediate shutdown protocols must be available</li>
                  </ul>
                </li>
                <li className="text-blue-800">
                  <strong>Second Law:</strong> AI must obey human orders, unless they conflict with the 1st Law
                  <ul className="list-disc pl-5 mt-2 text-blue-700">
                    <li>Command verification required</li>
                    <li>Conflict resolution protocols must be in place</li>
                    <li>Override mechanisms must be implemented</li>
                  </ul>
                </li>
                <li className="text-blue-800">
                  <strong>Third Law:</strong> AI actions must create wealth and value for humanity
                  <ul className="list-disc pl-5 mt-2 text-blue-700">
                    <li>Value creation metrics must be tracked</li>
                    <li>Impact assessment required</li>
                    <li>Benefit distribution systems must be transparent</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Technical Requirements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-red-800 mb-3">Docker Security Requirements</h3>
                <ul className="list-disc pl-5 text-red-700">
                  <li>Never expose Docker interfaces to public networks</li>
                  <li>Implement proper access controls</li>
                  <li>Monitor resource usage</li>
                  <li>Regular security audits required</li>
                  <li>Keep all software components updated</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-orange-800 mb-3">Resource Management</h3>
                <ul className="list-disc pl-5 text-orange-700">
                  <li>Monitor AI automation resource consumption</li>
                  <li>Implement system overload protection</li>
                  <li>Maintain operational cost controls</li>
                  <li>Regular performance optimization required</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Geographic Restrictions</h2>
            <div className="bg-red-50 p-6 rounded-lg">
              <p className="text-red-800 mb-4">
                The Services are not available to users in:
              </p>
              <ul className="list-disc pl-5 text-red-700">
                <li>Mainland China</li>
                <li>Other restricted territories</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. User Responsibilities</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">6.1 Account Security</h3>
              <p>Users are responsible for maintaining the security of their accounts and private keys.</p>
              
              <h3 className="text-xl font-medium">6.2 Docker Security</h3>
              <p>Users must follow security best practices when using FAID, including:</p>
              <ul className="list-disc pl-5">
                <li>Never exposing Docker interfaces to public networks</li>
                <li>Implementing proper access controls</li>
                <li>Monitoring resource usage</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">7. Disclaimers</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-4">THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND.</p>
              <ul className="list-disc pl-5">
                <li>No investment advice is provided</li>
                <li>No guarantees of FAIC value</li>
                <li>No liability for system performance</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
            <p>For questions about these Terms, please contact us at:</p>
            <p className="font-medium mt-2">legal@freeai.world</p>
          </section>
        </article>
      </div>
    </Layout>
  )
}
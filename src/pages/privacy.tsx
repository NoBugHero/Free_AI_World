import Head from 'next/head'
import Layout from '../components/Layout/Layout'

export default function PrivacyNotice() {
  return (
    <Layout>
      <Head>
        <title>Privacy Notice - Free AI World</title>
        <meta name="description" content="Privacy Notice for Free AI World, Free AI Docker, and Free AI Coin" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose lg:prose-lg mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Notice</h1>
          
          <div className="mb-8">
            <p className="text-sm text-gray-500">Last Updated: May 2024</p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-lg text-gray-600 mb-6">
              This Privacy Notice explains how Free AI World Foundation and our subsidiaries collect, use, and protect your personal information across our services:
            </p>
            <ul className="list-disc pl-5 mt-4">
              <li>Free AI World platform ("FAIW")</li>
              <li>Free AI Docker ("FAID")</li>
              <li>Free AI Coin ("FAIC")</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-blue-800 mb-3">Technical Information</h3>
                <ul className="list-disc pl-5 text-blue-700">
                  <li>Docker configuration data</li>
                  <li>System resource usage</li>
                  <li>Performance metrics</li>
                  <li>Network information</li>
                  <li>Security logs</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-blue-800 mb-3">Account Information</h3>
                <ul className="list-disc pl-5 text-blue-700">
                  <li>Wallet addresses</li>
                  <li>Transaction history</li>
                  <li>Usage statistics</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. Data Protection</h2>
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <p className="font-medium mb-4">We implement strict security measures aligned with FAIW 3 Laws:</p>
              <ul className="list-disc pl-5 text-green-700">
                <li>End-to-end encryption for sensitive data</li>
                <li>Regular security audits and updates</li>
                <li>Access control and authentication</li>
                <li>Data minimization practices</li>
                <li>Secure data storage and transmission</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Geographic Data Processing</h2>
            <div className="bg-red-50 p-6 rounded-lg">
              <p className="text-red-800 mb-4">Important Notice:</p>
              <ul className="list-disc pl-5 text-red-700">
                <li>No data processing in mainland China</li>
                <li>Compliance with regional data protection laws</li>
                <li>Data localization requirements</li>
                <li>Cross-border data transfer restrictions</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <div className="space-y-4">
              <p>You have the right to:</p>
              <ul className="list-disc pl-5">
                <li>Access your personal data</li>
                <li>Request data correction</li>
                <li>Delete your account</li>
                <li>Export your data</li>
                <li>Opt-out of data collection</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
            <p>For privacy-related inquiries:</p>
            <p className="font-medium mt-2">privacy@freeai.world</p>
          </section>
        </article>
      </div>
    </Layout>
  )
}

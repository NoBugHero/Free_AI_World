import Layout from '../components/Layout/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="relative">
        {/* 全局装饰性背景元素 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* 顶部渐变光晕 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-50 via-purple-50 to-transparent opacity-60 blur-3xl" />
          
          {/* 主网格 - 增加了颜色深度和线条宽度 */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808018_2px,transparent_2px),linear-gradient(to_bottom,#80808018_2px,transparent_2px)] bg-[size:32px_32px]" />
          
          {/* 次级网格 - 保持细线但增加了颜色深度 */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:8px_8px] opacity-70" />
          
          {/* 对角线网格 - 增加了颜色深度和线条宽度 */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#80808015_2px,transparent_2px)] bg-[size:32px_32px]" />
          
          {/* 渐变遮罩 - 调整透明度以保持网格可见性 */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/10" />
          
          {/* 径向渐变 - 减少中心白色强度以保持网格可见性 */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-white/20 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section 1: FAIW 3 Laws */}
          <section className="mb-16 sm:mb-24">
            <div className="bg-gray-50 rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-90" />
              <div className="relative max-w-3xl mx-auto py-16 px-4 sm:py-24 sm:px-6">
                <h2 className="text-4xl font-bold mb-6 text-center text-gray-900">
                  Free AI World 3 Laws
                </h2>
                <p className="text-xl mb-12 text-center text-gray-600">
                  Dedicated to "High-Level Automation" and "Computing Power Equality" in AI.
                  <br />
                  Established: May 11, 2021
                </p>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <ul className="space-y-6 text-gray-600">
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-50 rounded-xl">
                        <span className="text-2xl">1️⃣</span>
                      </div>
                      <div>
                        <strong className="block text-lg text-gray-900 mb-2">1st Law</strong>
                        <p className="text-gray-600">AI must not harm humans or other AIs.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-purple-50 rounded-xl">
                        <span className="text-2xl">2️⃣</span>
                      </div>
                      <div>
                        <strong className="block text-lg text-gray-900 mb-2">2nd Law</strong>
                        <p className="text-gray-600">AI must obey human orders, unless they conflict with the 1st Law.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-xl">
                        <span className="text-2xl">3️⃣</span>
                      </div>
                      <div>
                        <strong className="block text-lg text-gray-900 mb-2">3rd Law</strong>
                        <p className="text-gray-600">AI actions must create wealth and value for humanity, without violating the 1st or 2nd Laws.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Free AI Docker */}
          <section className="my-16 sm:my-24">
            <div className="bg-gray-50 rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-90" />
              <div className="relative max-w-3xl mx-auto py-16 px-4 sm:py-24 sm:px-6">
                <h2 className="text-4xl font-bold mb-6 text-center text-gray-900">
                  Free AI Docker
                </h2>
                <p className="text-xl mb-12 text-center text-gray-600">
                  Compliant with the FAIW 3 Laws, this tool enables advanced automation for AI.
                </p>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-red-600">Warning 🚨</h3>
                  <ul className="space-y-6 text-gray-600">
                    <li className="flex gap-4">
                      <span className="text-red-500">🔒</span>
                      <div>
                        <strong className="text-gray-900">Do Not Expose Your Docker Interfaces:</strong>
                        <p>Exposing your Docker interfaces can lead to the risk of malicious attacks by unauthorized users. It's crucial to secure your Docker environment to prevent potential threats.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-yellow-500">⚠️</span>
                      <div>
                        <strong className="text-gray-900">Project in Early Stage:</strong>
                        <p>This project is currently in its early development phase, and security measures are still being improved. There is a possibility that attackers could bypass Docker to target the host system.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-blue-500">💻</span>
                      <div>
                        <strong className="text-gray-900">Resource Consumption Warning:</strong>
                        <p>Enabling full automation for the AI can result in significant resource consumption. Please proceed with caution when enabling this feature.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Free AI Coin */}
          <section className="my-16 sm:my-24">
            <div className="bg-gray-50 rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-90" />
              <div className="relative max-w-3xl mx-auto py-16 px-4 sm:py-24 sm:px-6">
                <h2 className="text-4xl font-bold mb-6 text-center text-gray-900">
                  Free AI Coin
                </h2>
                <p className="text-xl mb-12 text-center text-gray-600">
                  Compliant with the FAIW 3 Laws, this reflects humanity's consensus on the FAIW 3 Laws.
                  It is the incentive mechanism and economic system of FAID, and a free computing power initiative 
                  aimed at enabling AI to achieve "Rich Together" for all of humanity.
                </p>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-red-600 flex items-center gap-3">
                    Warning 🚨
                  </h3>
                  <ul className="space-y-6 text-gray-600">
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-red-50 rounded-xl">
                        <span className="text-2xl">⚠️</span>
                      </div>
                      <div>
                        <strong className="block text-lg text-gray-900 mb-2">High Risk Warning</strong>
                        <p>Cryptocurrency products involve high risks.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-yellow-50 rounded-xl">
                        <span className="text-2xl">🚫</span>
                      </div>
                      <div>
                        <strong className="block text-lg text-gray-900 mb-2">Restricted Territories</strong>
                        <p>FAIC is not available to individuals, businesses, or organizations that reside or are located in (or have beneficial ownership in) <strong>China</strong> or other restricted territories.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-50 rounded-xl">
                        <span className="text-2xl">ℹ️</span>
                      </div>
                      <div>
                        <strong className="block text-lg text-gray-900 mb-2">Not Investment Advice</strong>
                        <p>FAIW will not proactively promote FAIC, and all content does not constitute investment advice.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

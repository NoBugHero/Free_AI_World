import Link from 'next/link';

export default function Footer() {
  const footerLinks = [
    { name: 'Risks', href: '/risks' },
    { name: 'Privacy Notice', href: '/privacy' },
    { name: 'Terms of Service', href: '/tos' },
  ];

  return (
    <footer className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-gray-400 mb-8 text-sm">
          *Free AI Coin (FAIC) token eligibility is restricted by geography, age, and other factors. 
          FAIC is not available to individuals, businesses, or organizations that reside or are located in 
          (or have beneficial ownership in) China or other restricted territories. 
          Visit https://freeai.world/tos for details. Cryptocurrency products involve high risks. 
          Important user information can be found at https://freeai.world/risks.
          All services are not provided to mainland China, and mainland China IP access is rejected.
          FAIW's promotional work is not directed to mainland China or carried out in mainland China.
        </div>
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white font-bold">
            Free AI World
          </Link>
          <div className="flex space-x-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 
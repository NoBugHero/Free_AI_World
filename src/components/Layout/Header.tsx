import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Free AI World', href: '/' },
    { name: 'Free AI Docker', href: '/docker' },
    { name: 'Free AI Chain', href: '/chain' },
    { name: 'Whitepaper', href: '/whitepaper' },
    { name: 'Terms of Service', href: '/tos' },
    { name: 'Risks', href: '/risks' },
  ];

  return (
    <header className="fixed w-full top-0 bg-white border-b border-gray-100 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 justify-between items-center">
          <div className="flex items-center gap-12">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Free AI World
            </Link>
            <div className="hidden md:flex md:gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-base font-medium text-gray-600 hover:text-gray-900 transition-colors group py-2
                    ${router.pathname === item.href ? 'text-gray-900' : ''}
                  `}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100
                    ${router.pathname === item.href ? 'scale-x-100' : ''}
                  `} />
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            <span className="sr-only">Open menu</span>
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium px-4 py-2 rounded-md transition-colors
                    ${router.pathname === item.href 
                      ? 'text-gray-900 bg-gray-100' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 
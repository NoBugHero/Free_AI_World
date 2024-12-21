import { useRouter } from 'next/router'

interface NavItem {
  path: string
  label: string
}

const navItems: NavItem[] = [
  { path: '/', label: 'Free AI World' },
  { path: '/docker', label: 'Free AI Docker' },
  { path: '/chain', label: 'Free AI Chain' },
  { path: '/whitepaper', label: 'Whitepaper' },
  { path: '/tos', label: 'Terms of Service' },
  { path: '/risks', label: 'Risks' }
]

export default function Navigation() {
  const router = useRouter()
  
  const getHref = (path: string) => {
    return `${router.basePath}${path}`
  }

  return (
    <nav>
      <div className="hidden md:flex md:gap-8">
        {navItems.map(({ path, label }) => (
          <a
            key={path}
            href={getHref(path)}
            className={`relative text-base font-medium text-gray-600 hover:text-gray-900 transition-colors group py-2
              ${router.pathname === path ? 'text-gray-900' : ''}
            `}
          >
            {label}
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100
              ${router.pathname === path ? 'scale-x-100' : ''}
            `}></span>
          </a>
        ))}
      </div>
    </nav>
  )
} 
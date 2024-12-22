import { Link } from "react-router-dom"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import ShimmerButton from "@/components/ui/shimmer-button"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/icon.png"
                alt="Quotify Logo"
                className="size-8"
              />
              <span className="text-xl font-bold">Quotify</span>
            </Link>
            <NavigationMenu>
              <NavigationMenuList className="hidden gap-6 md:flex">
                {[
                  { href: "/#features", label: "Features" },
                  { href: "/#pricing", label: "Pricing" },
                  { href: "/#faq", label: "FAQ" }
                ].map(item => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      href={item.href}
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary md:flex">
              <svg viewBox="0 0 24 24" className="size-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.539 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
              </svg>
              macOS Native
            </div>
            <ShimmerButton>
              <span className="text-primary">Download Now</span>
            </ShimmerButton>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-background/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img
                  src="/icon.png"
                  alt="Quotify Logo"
                  className="size-8"
                />
                <span className="text-xl font-bold">Quotify</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Craft Perfect Quotes Instantly
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link to="/#features" className="hover:text-primary">Features</Link>
                </li>
                <li>
                  <Link to="/#pricing" className="hover:text-primary">Pricing</Link>
                </li>
                <li>
                  <Link to="/#faq" className="hover:text-primary">FAQ</Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="mb-4 text-sm font-semibold">Resources</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-4 text-sm font-semibold">Contact</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 border-t pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Quotify. All rights reserved.
              </p>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
                <Link to="/terms-of-service" className="hover:text-primary">Terms of Service</Link>
                <Link to="/refund-policy" className="hover:text-primary">Refund Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-semibold mb-4">Thamani Crew</h3>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              {
                "Strategic consulting and innovative solutions to help businesses achieve sustainable growth and operational excellence."
              }
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link href="#approach" className="hover:text-primary-foreground transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>info@thamanicrew.com</li>
              <li>(254) 794-535-947</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} Thamani Crew. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

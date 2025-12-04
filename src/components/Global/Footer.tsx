import FullLogoWhite from "@/icons/Logo/FullLogoWhite";
import { Text } from "@/base/text";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-base py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Left Column - Logo and Location */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <FullLogoWhite width={200} />
            </div>
            <Text className="text-white" variant="small">
              New York, NY
            </Text>
          </div>

          {/* Resources Column */}
          <div>
            <Text className="text-white mb-4" variant="h4">
              Resources
            </Text>
            <ul className="space-y-2">
              {/* <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  About
                </a>
              </li> */}
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <Text className="text-white mb-4" variant="h4">
              Social
            </Text>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/company/marlo-bay-partners"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Empty column for spacing */}
          <div></div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <Text className="text-gray-400" variant="small">
            Copyright &copy; {new Date().getFullYear()} Marlo Bay. All Rights
            Reserved
          </Text>
          <div className="flex gap-6">
            <span
              // href="/terms"
              className="text-gray-400 hover:text-white text-xs transition-colors"
            >
              Terms of Service
            </span>
            <span
              // href="/privacy"
              className="text-gray-400 hover:text-white text-xs transition-colors"
            >
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

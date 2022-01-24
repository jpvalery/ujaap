import GitHub from "../icons/Github";
import LinkedIn from "../icons/Linkedin";
import Twitter from "../icons/Twitter";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl py-12 md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
          <a
            href="https://linkedin.com/in/jpvalery"
            className="h-6 w-6 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedIn />
          </a>

          <a
            href="https://github.com/jpvalery"
            className="h-6 w-6 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">GitHub</span>
            <GitHub />
          </a>

          <a
            href="https://twitter.com/jpvalery"
            className="h-6 w-6 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Twitter</span>
            <Twitter />
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm text-gray-500">
            &copy; 2019-2021 UJaaP - User Journey as a Product. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

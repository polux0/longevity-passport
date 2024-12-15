import { FaTwitter, FaYoutube, FaTiktok, FaMedium } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        {/* Footer Content */}
        <h2 className="text-2xl font-bold mb-4">Connect with the Longevity Community</h2>
        <p className="mb-8 text-gray-200">
          Collaborate with visionaries, share your insights, and help advance the field.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-2">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <FaTwitter className="w-8 h-8" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <FaYoutube className="w-8 h-8" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <FaTiktok className="w-8 h-8" />
          </a>
          <a
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <FaMedium className="w-8 h-8" />
          </a>
        </div>

        {/* Subscribe Section */}
        {/* <form className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow max-w-sm px-4 py-3 rounded-md text-gray-800"
          />
          <button
            type="submit"
            className="bg-white text-teal-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </form> */}
      </div>
    </footer>
  );
}
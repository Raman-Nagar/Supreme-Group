import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-white text-black px-6 lg:px-40 py-16 border-t border-gray-100 overflow-hidden">
      <div className="grid grid-cols-1 gap-8 lg:gap-16">
        <div>
          <Image
            src="/assets/logo.svg"
            alt="Supreme Group Logo"
            width={140}
            height={40}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-32">
          <div>
            <h4 className="font-bold mb-5">APPLICATIONS</h4>
            <ul className="space-y-1 text-sm font-medium text-gray-700">
              <li>Apparel</li>
              <li>Automotive</li>
              <li>Filtration</li>
              <li>Customised Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-5">COMPANY</h4>
            <ul className="space-y-1 text-sm font-medium text-gray-700">
              <li>Innovation</li>
              <li>Global Competency</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-5">MORE</h4>
            <ul className="space-y-1 text-sm font-medium text-gray-700">
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-5">FOLLOW US</h4>
            <ul className="space-y-1 text-sm font-medium text-gray-700">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
              <li>Medium</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-medium text-gray-600">
          <p>©2023. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0 text-center">
            Supreme house: 110, 16th Road, Chembur, Mumbai – 400071.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 z-10 w-56">
        <Image
          src="/assets/Group.png"
          alt="Decorative background"
          width={300}
          height={300}
        />
      </div>
    </footer>
  );
}

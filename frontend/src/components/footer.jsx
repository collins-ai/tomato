import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <footer id="contact" className="bg-neutral-700 text-neutral-300 p-4 sm:px-20">
      <div className="border-b border-b-neutral-300 flex flex-col gap-10 py-10 sm:flex-row">
        <div className="flex flex-col gap-5 basis-[60%]">
          <img src={assets.logo} alt="app logo" className="w-35" />
          <p className="leading-tight">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta explicabo neque deleniti libero nobis veritatis officiis est! Facere asperiores, fugit veniam incidunt totam necessitatibus eligendi voluptates saepe impedit sequi. Nostrum.</p>
          <div className="flex gap-3">
            <img src={assets.facebook_icon} alt="facebook" className="w-9" />
            <img src={assets.twitter_icon} alt="twitter" className="w-9" />
            <img src={assets.linkedin_icon} alt="linkedin" className="w-9" />
          </div>
        </div>
        <div className="basis-[20%]">
          <p className="text-white text-lg font-bold mb-2">COMPANY</p>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="basis-[20%]">
          <p className="text-white text-lg font-bold mb-2">GET IN TOUCH</p>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-10">Copyright {new Date().getFullYear()} © Tomato - All Right Reserved</p>
    </footer>
  )
}

export default Footer
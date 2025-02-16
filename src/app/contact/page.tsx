export default function Contact() {
  return (
      <div className="text-center p-5 sm:p-10 bg-black min-h-screen">
          <h1 className="text-[40px] sm:text-[60px] font-extrabold text-white mb-4">Contact Info</h1>
          <p className="text-base sm:text-[24px] font-medium text-gray-300 mb-8">
              Feel free to contact me for web-related services.
          </p>
          <div className="mb-8">
              <p className="text-base sm:text-[20px] font-semibold text-white">Email: <a href="mailto:rehanhuzaifa035@gmail.com" className="text-blue-400">rehanhuzaifa035@gmail.com</a></p>
              <p className="text-base sm:text-[20px] font-semibold text-white mt-2">OR</p>
          </div>
          <form className="bg-gray-800 shadow-lg rounded-lg p-5 sm:p-8 w-full max-w-2xl mx-auto text-left">
              <h2 className="text-[24px] sm:text-[30px] font-bold text-white mb-6 text-center">Contact Form</h2>
              <div className="mb-4">
                  <label className="block text-[16px] sm:text-[18px] font-medium text-gray-300 mb-2" htmlFor="name">
                      Name
                  </label>
                  <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="border border-gray-600 py-2 px-4 text-white bg-black w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
              </div>
              <div className="mb-4">
                  <label className="block text-[16px] sm:text-[18px] font-medium text-gray-300 mb-2" htmlFor="phone">
                      Phone Number
                  </label>
                  <input
                      type="number"
                      id="phone"
                      placeholder="Enter your phone number"
                      className="border border-gray-600 py-2 px-4 text-white bg-black w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
              </div>
              <div className="mb-4">
                  <label className="block text-[16px] sm:text-[18px] font-medium text-gray-300 mb-2" htmlFor="email">
                      Email
                  </label>
                  <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="border border-gray-600 py-2 px-4 text-white bg-black w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
              </div>
              <div className="mb-6">
                  <label className="block text-[16px] sm:text-[18px] font-medium text-gray-300 mb-2" htmlFor="message">
                      Message
                  </label>
                  <textarea
                      id="message"
                      placeholder="Write your message"
                      className="border border-gray-600 py-2 px-4 text-white bg-black w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-32 resize-none"
                  ></textarea>
              </div>
              <button
                  type="submit"
                  className="bg-blue-600 text-white font-bold text-[16px] sm:text-[18px] py-3 px-8 rounded-full hover:bg-blue-700 transition-colors w-full"
              >
                  Submit
              </button>
          </form>
          <footer className="bg-black text-white py-5 mt-10 text-center">
            <p>&copy; 2023 Huzaifa Rehan. All rights reserved.</p>
          </footer>
      </div>
  );
}

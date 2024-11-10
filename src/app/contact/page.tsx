export default function contact() {
    return (
      <div className="text-center">
        <h1 className="text-[100px] font-extrabold ">CONTACT INFO</h1>
        <div className="text-[50px] font-bold">Feel free to contact me for web-related services</div>
        <h1 className="font-bold text-center text-[30px]">Email:rehanhuzaifa035@gmail.com</h1>
        <h1 className="font-bold text-center text-[30px] ">OR</h1>
        <form className=" flex gap-10  justify-center items-center flex-col font-bold text-center text-[30px]">
          <h1 className="text-[50px] font-bold">Contact Form</h1>
          <input type="text" placeholder="Enter Your Name: "className="border-red-800 py-2 text-black w-2/6 rounded-2xl" />
          <input type="number" placeholder="Enter Your Phone no: " className="border-red-800 py-2 text-black w-2/6 rounded-2xl"/>
          <input type="email" placeholder="Enter Your Email: " className="border-red-800 py-2 text-black w-2/6 rounded-2xl"/>
          <input type="text" placeholder="Message: " className="border-red-800 py-2 text-black w-2/6 rounded-2xl"/>
          <div className="bg-blue-600 text-[30px] rounded-full">
            <button className="text-white font-bold" >SUBMIT</button>

          </div>
        </form>
      </div>
    );
}
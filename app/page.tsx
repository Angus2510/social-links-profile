import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-900 flex justify-center align-center min-h-screen ">
      <div className="container bg-gray-800 w-80 lg:w-96 rounded-xl flex justify-center mt-16 mb-10 ">
        <div className="flex flex-col items-center justify-center pt-10 mb-10 ">
          <Image
            src="/images/avatar-jessica.jpeg"
            alt="profile pic"
            width={100}
            height={100}
            className="rounded-full mb-4"
          />
          <h1 className="text-white text-3xl">Jessica Randall</h1>
          <h3 className="text-lime-400 text-md">London, United Kingdom</h3>
          <h5 className="text-white mt-8">
            "Front-end developer and avid reader"
          </h5>
          <button className="bg-gray-700 text-white rounded-md w-[80%] mt-4 h-8 hover:bg-lime-400  hover:text-black">
            GitHub
          </button>
          <button className="bg-gray-700 text-white rounded-md w-[80%] mt-4 h-8 hover:bg-lime-400 hover:text-black">
            Frontend Mentor
          </button>
          <button className="bg-gray-700 text-white rounded-md w-[80%] mt-4 h-8 hover:bg-lime-400 hover:text-black">
            LinkedIn
          </button>
          <button className="bg-gray-700 text-white rounded-md w-[80%] mt-4 h-8 hover:bg-lime-400 hover:text-black">
            Twitter
          </button>
          <button className="bg-gray-700 text-white rounded-md w-[80%] mt-4 h-8  hover:bg-lime-400  hover:text-black">
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
}

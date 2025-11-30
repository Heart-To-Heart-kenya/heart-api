import { FaHeart } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#14261A]">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-20 h-20 md:w-24 md:h-24">
          <div className="heart absolute inset-0 bg-gradient-to-r from-[#284E36] to-[#14261A] animate-pulse rounded-full"></div>
          <FaHeart className="text-[#F4F7FA] text-5xl md:text-6xl absolute inset-0 w-full h-full animate-bounce" />
        </div>

        <div className="mt-4 md:mt-6 text-center text-lg md:text-2xl font-semibold text-[#F4F7FA] px-4">
          <p>Bringing hope, one donation at a time...</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;

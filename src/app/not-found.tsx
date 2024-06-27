import Image from "next/image";
import Link from "next/link";
import notFound from '../assets/images/not found page.png';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image className="w-[700px] h-[500px]" src={notFound} width={800} height={500} alt="not found page"/>
      <Link className="bg-green-500 text-white px-4 py-2 rounded " href="/">Return Home</Link>
    </div>
  );
};

export default NotFoundPage;

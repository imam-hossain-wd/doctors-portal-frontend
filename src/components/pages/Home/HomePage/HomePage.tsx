
'use server'

import Image from 'next/image';
import homebanner from '../../../../assets/images/Forensic medicine-amico.png'

const HomePage =async () => {

  return (
    <div className='flex justify-between items-center w-[90%] mx-auto'>
       
      
      <div className='flex flex-col -mt-20'>
      <h1 className='text-xl font-bold'>Health Hub BD: Connecting Patients with Care</h1>
      <p className='mt-5'>Discover trusted doctors, hospitals, and blood banks across <br /> Bangladesh for reliable healthcare solutions.</p>
      </div>
      <Image className="w-[700px] h-[500px]" src={homebanner} width={800} height={500} alt="not found page"/>
    </div>
  );
};

export default HomePage;

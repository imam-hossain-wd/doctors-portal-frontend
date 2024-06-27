import { Spinner } from '@nextui-org/react';

const Loader = () => {
    return (
        <div className='flex justify-center items-center h-screen -mt-20'>
             <Spinner size="lg" />
        </div>
    );
};

export default Loader;
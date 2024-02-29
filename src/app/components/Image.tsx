import carPic from '../../../public/mini_coper_min.png';
import Image from 'next/image';
import Indicator from '../../../public/Indicators.png';

const CarPicture = () => {
  return (
    <div className="flex items-center relative">
      <Image
        className="absolute top-1 left-3 md:hidden"
        src={ Indicator }
        alt="Indicator"
        width={ 24 }
      />
      <Image
        className="w-20 h-20 object-cover mx-2"
        src={ carPic }
        alt="Picture of the Mini Cooper 2020"
      />
      <span className="hidden md:inline">Mini Cooper 2020</span>
    </div>
  );
}

export default CarPicture;

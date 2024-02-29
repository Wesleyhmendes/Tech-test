import Image from 'next/image';
import actionsBtn from '../../../public/dots-vertical.svg';
import { IoEllipsisVertical } from 'react-icons/io5';

const Actions = () => {
  return (
    <div className="flex justify-center">
    <button className="p-2 hover:bg-gray-300 hover:rounded-full">
      <IoEllipsisVertical size={20} />
    </button>
  </div>
  );
}

export default Actions;

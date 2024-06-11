'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({ className, img, title, description, handleClick }: HomeCardProps) => {
  return (
    <section
      className={cn(
        'px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[160px] rounded-[14px] cursor-pointer',
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={img} alt="meeting" width={27} height={27} />
      </div>

      <div className="flex flex-col">
        <h2 className="mt-4 text-xl font-semibold">{title}</h2>
        <p className="font-normal">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;

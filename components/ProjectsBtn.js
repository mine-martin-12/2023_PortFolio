import Image from "next/image"
import Link from 'next/link'
import { HiArrowRight } from "react-icons/hi2"

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">

      <Link className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-center bg-cover bg-no-repeat group" href={'/work'} >
        <Image
          src={'/rounded-text.png'}
          width={141}
          height={148}
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
          alt=""
        />
        <HiArrowRight className="absolute text-4xl" />
      </Link>
    </div>
  )
};

export default ProjectsBtn;
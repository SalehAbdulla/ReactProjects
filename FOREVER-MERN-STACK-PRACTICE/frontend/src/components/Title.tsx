

type TitleType = {
    text1: string;
    text2: string;
}

const Title = ({text1, text2}:TitleType) => {
  return (
    <div className="flex items-center justify-center mt-10 mb-4 gap-4 w-full text-3xl">
      <p className=" text-[#f3bb01]">{text1} <span className="font-medium text-[#000000]">{text2}</span> </p>
      <p className="w-8 sm:w-12 h-[2px] bg-black"></p>
    </div>
  )
}

export default Title

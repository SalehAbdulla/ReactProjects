
type TitleType = {
  text1: string;
  text2: string;
}


const Title = ({text1, text2}: TitleType) => {
  return (
    <div className="flex gap-2 items-center justify-center mb-3">
      <p className="text-gray-500">{text1} <span className="text-gray-700 font-medium">{text2}</span> </p>
      <p className="w-8 sm:w-12 sm:h-[2px] bg-gray-700"></p>
    </div>
  )
}

export default Title

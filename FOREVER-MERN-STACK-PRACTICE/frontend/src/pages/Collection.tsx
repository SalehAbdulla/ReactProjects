import { UseAppContext } from "../context/UseAppContext"

const Collection = () => {

	const { products } = UseAppContext();

	return (

		<div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
				
		</div>
	)
}

export default Collection 


{/* 
	<div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
	className="my-2 text-xl flex items-center cursor-pointer gap-2"
*/}


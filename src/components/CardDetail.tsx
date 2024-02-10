import { StarIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"


export const CardDetail = ({ detail }: {detail: any}) => {

    return (
        <div>
            <div className="w-full h-[300px] mb-3">
                <img src={detail?.attributes?.book?.image_url} alt={detail?.attributes?.book?.title} className="object-cover w-full h-full" />
            </div>
            <div>
                <h3 className="truncate text-white text-xl">{detail?.attributes?.book?.title}</h3>
                <div className="flex gap-1 my-3">
                    <StarIcon className="w-5 h-5 text-green-500" />
                    <StarIcon className="ww-5 h-5 text-green-500" />
                    <StarIcon className="w-5 h-5 text-green-500" />
                    <StarIcon className="w-5 h-5 text-green-500" />
                </div>
                <span className="text-white text-2xl">{detail?.attributes?.currency} {detail?.attributes?.compare_at_price}</span>

                <Link to={`/${detail?.id}`} className='flex-grow flex justify-center items-center bg-green-500 p-5'>
                    View Details
                </Link>
            </div>
        </div>
    )
}
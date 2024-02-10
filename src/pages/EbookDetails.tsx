import { useParams } from "react-router-dom";
import { useGetEbookDetailsQuery } from "../services/EbookApi";


export const EbookDetails = () => {
    const { id } = useParams();

    const { data: ebook, error, isLoading, isSuccess } = useGetEbookDetailsQuery(id);

    return (
        <div className="container mx-auto">
            {error && <p>Something went wrong</p>}
            {isLoading && <p>... Loading</p>}
            {isSuccess &&
                <h1 className="text-3xl text-center text-white">{ebook?.data?.attributes?.book?.title}</h1>
            }


            <div className="flex flex-row gap-3">
                <div className="basis-2/5">

                </div>
                <div className="">
                    <div className="w-full h-[300px] mb-3">
                        <img src={ebook?.data?.attributes?.book?.image_url} alt={ebook?.data?.attributes?.book?.title} className="object-cover w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}
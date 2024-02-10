import { CardDetail } from "../components/CardDetail"
import { useGetEbooksListQuery } from "../services/EbookApi"

export const HomePage = () =>{
    const { data, error, isLoading, isSuccess } = useGetEbooksListQuery()
    return(
        <div>
        <div className="container mx-auto">
          <h2 className="font-bold text-white text-3xl text-center mb-7">EXPLORE OUR E-BOOKS</h2>
          <div className="flex flex-row gap-5 text-center text-white">
            {isLoading && <p>...Loading</p>}
            {error && <p>Something went wrong</p>}
            {isSuccess &&
              <div>
                {data?.data?.map((item: any, index: number) => (
                  <div key={index} className="basis-1/4 shadow-lg">
                    <CardDetail detail={item} />
                  </div>
                ))}
              </div>
            }
          </div>
        </div>
      </div>
    )
}
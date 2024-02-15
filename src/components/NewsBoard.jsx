import thumblg from "../assets/thumb_lg.png";
import thumb from "../assets/thumb.png";
import { useNewsQuery } from "../hooks";
import NotFound from "./NotFound";
import { Fragment } from "react";
export default function NewsBoard() {
  const { newsData, error, loading } = useNewsQuery();
  if (loading?.state) {
    return <h1>{loading?.message}</h1>
  }
  // if (error) {
  //   return <NotFound />
  // }
  console.log("error", error)

  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        {/* <!-- left --> */}
        <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
          {newsData?.map((item) => (
            <Fragment key={item?.publishedAt}>
              <div className="col-span-12 grid grid-cols-12 gap-4">
                {/* <!-- info --> */}
                <div className="col-span-12 lg:col-span-4">
                  <a href="#">
                    <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                      {item?.title}
                    </h3>
                  </a>
                  <p className="text-base text-[#5C5955]">
                    {item?.description}
                  </p>
                  <p className="mt-5 text-base text-[#5C5955]">{item?.publishedAt}</p>
                  {/* 1 hour ago */}
                </div>
                {/* <!-- thumb --> */}
                <div className="col-span-12 lg:col-span-8">
                  <img className="w-full" src={item?.urlToImage} alt="thumb" />
                  <p className="mt-5 text-base text-[#5C5955]">{item?.author}</p>
                </div>
              </div>
            </Fragment>
          ))}

          {/* <!-- news item ends --> */}
        </div>

        {/* <!-- right --> */}

        <div className="col-span-12 self-start xl:col-span-4">
          <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
            {/* {newsData.map((item, index) => (
              <>
                <div className="col-span-12 mb-6 md:col-span-8">
                  <img className="w-full" src={thumb} alt="thumb" />
                  
                  <div className="col-span-12 mt-6 md:col-span-4">
                    <a href="#">
                      <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">Why is Uber selling its autonomous-vehicle division?</h3>
                    </a>
                    <p className="text-base text-[#292219]">Self-driving cars were meant to be its future</p>
                    <p className="mt-5 text-base text-[#94908C]">25 Feb 2021</p>
                  </div>
                </div>
              </>
            ))} */}

            {/* <!-- news item ends -->
                <!-- news item --> */}
            {/* <div className="col-span-12 md:col-span-8">
             
              <div className="col-span-12 md:col-span-4">
                <a href="#">
                  <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">Why is Uber selling its autonomous-vehicle division?</h3>
                </a>
                <p className="text-base text-[#292219]">Self-driving cars were meant to be its future</p>
                <p className="mt-5 text-base text-[#94908C]">25 Feb 2021</p>
              </div>
            </div> */}

            {/* <!-- news item ends --> */}
          </div>
        </div>
      </div>
    </main>
  );
}

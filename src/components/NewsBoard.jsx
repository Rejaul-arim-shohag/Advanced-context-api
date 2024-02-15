import { useNewsQuery } from "../hooks";
import NotFound from "./NotFound";
import { Fragment } from "react";
import { Thumb } from "./Thumb";
import { formatTime } from "../utils/formatTime";
import Loading from "./Loading";

const bigItem = "col-span-12 grid grid-cols-12 gap-4";
const secondItem = "col-span-12 grid grid-cols-12 gap-4 lg:col-span-8";
const anotherItem = "col-span-12 md:col-span-6 lg:col-span-4";

export default function NewsBoard() {
  const { newsData, error, loading } = useNewsQuery();
  if (loading?.state) {
    return <Loading message={loading?.message} />;
  }
  if (!newsData.length && !loading.state) {
    return <NotFound />;
  }

  const getSectionWidthClassName = (index) => {
    if (index === 0) {
      return bigItem;
    } else if (index === 1) {
      return secondItem;
    } else {
      return anotherItem;
    }
  };

  let leftSideData = [];
  let rightSideData = [];
  if (newsData) {
    const splitPoint = Math.ceil(newsData.length * 0.7);
    leftSideData = newsData.slice(0, splitPoint).reverse();
    rightSideData = newsData.slice(splitPoint);
  }

  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        {/* <!-- left --> */}
        <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
          {leftSideData?.map((item, index) => (
            <Fragment key={item?.publishedAt}>
              <div className={getSectionWidthClassName(index)}>
                {/* <!-- info --> */}
                {/*  */}
                <div className={index === 1 ? "col-span-12 md:col-span-6" : "col-span-12 lg:col-span-4"}>
                  <a href="#">
                    <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">{item?.title}</h3>
                  </a>
                  <p className="text-base text-[#5C5955]">{item?.description}</p>
                  <p className="mt-5 text-base text-[#5C5955]">{formatTime(item?.publishedAt)}</p>
                </div>
                {index < 2 && <Thumb urlToImage={item?.urlToImage} author={item?.author} index={index} />}
              </div>
            </Fragment>
          ))}
        </div>

        {/* <!-- right --> */}
        <div className="col-span-12 self-start xl:col-span-4">
          <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
            {rightSideData.map((item, index) => (
              <Fragment key={item?.publishedAt}>
                <div className="col-span-12 mb-6 md:col-span-8">
                  {index === 0 && <img className="w-full" src={item?.urlToImage} alt="thumb" />}
                  <div className="col-span-12 mt-6 md:col-span-4">
                    <a href="#">
                      <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]"> {item?.title}</h3>
                    </a>
                    <p className="text-base text-[#292219]">{item?.description}</p>
                    <p className="mt-5 text-base text-[#94908C]">{formatTime(item?.publishedAt)}</p>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

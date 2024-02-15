export const Thumb = ({ urlToImage, author, index }) => {
    return (

        <div className={index === 0 ? "col-span-12 lg:col-span-8" : "col-span-12 md:col-span-6"}>
            <img className="w-full" src={urlToImage} alt="thumb" />
            <p className="mt-5 text-base text-[#5C5955]">{author}</p>
        </div>
    )
}
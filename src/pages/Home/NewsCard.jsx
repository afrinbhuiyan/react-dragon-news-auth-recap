import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { title, image_url, details, _id, author } = news;
    return (
        <div>
            <div className="mb-3">
                <div className="flex bg-[#1111] p-5 rounded-t-xl">
                    <img className="rounded-full w-10 h-10 mr-4" src={author.img} alt="" />
                   <div>
                   <h1 className="font-bold text-sm" > {author.name} </h1>
                   <p className="text-sm" > {author.published_date} </p>
                   </div>
                </div>
                <div className="p-5 border-b border-x rounded-b-xl">
                <h2 className="font-bold">{title}</h2>
                <figure>
                    <img
                        src={image_url}
                        alt="Shoes" />
                </figure>
                <div className="mt-3">
                     {
                        details.length > 200
                        ? <p className="text-sm text-[#111111b3] "> {details.slice(0, 200)} 
                        <Link news={news} to={`/news/${_id}`} className="text-[#FF8C47] font-bold hover:text-[#F75B5F] " > Read more... </Link> </p>
                        : <p className="text-sm" >{details}</p>
                     }

                    <div className="card-actions justify-end">
                        <button className="">Buy Now</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
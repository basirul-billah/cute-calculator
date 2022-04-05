import { Link } from "react-router-dom";
import useReview from "../../hooks/useReview"
import ReviewPost from "../ReviewPost/ReviewPost";

const Home = () => {

    const [reviews] = useReview();

    return (
        <div>

            {/* banner section */}
            <div className='flex justify-evenly'>
                <div className='p-10 text-left'>
                    <h1 className='text-5xl font-bold my-5 text-purple-800'>HXP-2000</h1>
                    <p className='text-xl text-slate-800'>Made for the professionals with an eye for all the cute things in the world!</p>
                    <ul className='ml-7 list-disc'>
                        <li>Large display</li>
                        <li>Function command signs</li>
                        <li>3-digit comma markers</li>
                        <li>12 digits</li>
                        <li>Key rollover</li>
                        <li>Shift key (▶)</li>
                        <li>Sign Change (＋/－)</li>
                    </ul>
                </div>
                <img className='h-3/4' src="https://media.istockphoto.com/photos/yellow-calculator-picture-id1320223302?b=1&k=20&m=1320223302&s=170667a&w=0&h=k7wjCs4uEgr_SLN1mADslczDoQolMf0D-1T8V04TBOU=" alt="" />
            </div>
            
            {/* review section */}
            <div>
                <h1 className='text-3xl'>Customer Reviews</h1>
                <div className="grid grid-cols-3 gap-5 mx-10 mt-5">
                    {
                        reviews.map(review => <ReviewPost
                            key={review.id}
                            review={review}
                        ></ReviewPost>)
                    }
                </div>
                <Link to="/reviews">
                    <button className="px-5 py-3 text-white m-4 bg-green-700 rounded-lg	">See all reviews</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
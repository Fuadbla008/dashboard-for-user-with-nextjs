import fetchDishData from '../component/fetchDishData';
import { Image } from 'next/image';


const HomePage = async () => {
    const foods = await fetchDishData();
    console.log(foods);
    return (
        <div className="grid grid-cols-2 gap-5">
            {foods.map((food) => (
                <div key={food.id} >
                    <div className="card bg-base-100 shadow-sm">
                        <figure>
                            <img src={food.image_link} alt="" width={300} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {food.dish_name}
                                <div className="badge badge-secondary">{food.rating}</div>
                            </h2>
                            <p>{food.origin_and_popularity}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HomePage;
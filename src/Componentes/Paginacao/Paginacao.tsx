
import './Paginacao.css';
import Slider from "react-slick";


function Paginacao() {
    return (
        <div className='w-3/4 m-auto'>
            <div className='mt-20'>
            <Slider {...settings}>    
                {data.map((d) => (
                    <div>
                        <div>
                            <img src={d.img} alt=""/>
                        </div>

                        <div>
                            <p>{d.name}</p>
                            <p>{d.review}</p>
                            <button>Read More</button>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>

        </div>
    );
}

const data = [
{
    name: `Monkey D. Luffy`,
    img: `/src/assets/luffy.png`,
    review: `Brabo, muito brabo`
},
{
    name: `Monkey D. Luffy`,
    img: `src/assets/luffy.png`,
    review: `Brabo, muito brabo`
},
{
    name: `Monkey D. Luffy`,
    img: `src/assets/luffy.png`,
    review: `Brabo, muito brabo`
},
{
    name: `Monkey D. Luffy`,
    img: `src/assets/luffy.png`,
    review: `Brabo, muito brabo`
},
{
    name: `Monkey D. Luffy`,
    img: `src/assets/luffy.png`,
    review: `Brabo, muito brabo`
},
{
    name: `Monkey D. Luffy`,
    img: `src/assets/luffy.png`,
    review: `Brabo, muito brabo`
}

]

export default Paginacao;
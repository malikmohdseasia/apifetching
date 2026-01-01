import { useEffect, useState } from "react";

const Dashboard = () => {

    const [items, setItems] = useState([]);

    const getData = async()=>{
       try {
         let data:any =  await fetch("https://fakestoreapi.com/products");

        data = await data.json();
        setItems(data);
        console.log(data)
       } catch (error) {
        console.log(error)
       }
        
    }


   useEffect(()=>{
    getData();
        setTimeout(()=>(
            alert('success')
        ),1000)

   },[])

  return (
    <div className="flex flex-wrap justify-between mx-20">

        {
            items && items?.map((item:any, index)=>(
                <div key={index} className="flex flex-col items-center rounded-2xl my-3 shadow-[0px_14px_42px_0px_rgba(8,15,52,0.06)] p-4">
                    <div className="w-50 h-60 flex flex-col items-center justify-center gap-5 ">
                        <div className=" flex items-center p-2 rounded-xl  justify-center bg-gray-200 w-[80%]">

                        <img src={item.image} alt="" className="w-20 h-20 object-contain" />
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <p className="text-sm text-center px-4">{item.title.substring(0,20)}</p>
                        <p>${item.price}</p>
                        </div>
                    </div>

                        <button className="w-full bg-[#63B967] text-center p-1 font-bold font-roboto text-white rounded-lg">Add to cart</button>
                </div>
            ))
        }
        
    </div>
  )
}

export default Dashboard
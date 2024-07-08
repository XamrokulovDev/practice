import { useContext } from "react"
import { userContext } from "../../Context"

const Category = () => {
  const { Categorys } = useContext(userContext);
  return (
    <div className="container my-10">
      <h1 className="text-3xl w-80 font-medium my-10 mb-16">Основные категории</h1>
      <div className="grid grid-cols-5 gap-16">
        {
          Categorys?.map((item, index) => (
            <div 
              key={index} 
              className={`card flex flex-col items-center ${index >= 5 ? 'ml-24' : ''} ${index <= 5 ? 'mr-24' : ''}`}
            >
              <div className="w-[75px] h-[75px] bg-[#F2F2F2] p-3 rounded-2xl">
                <img src={item.img} alt="" className="w-full h-full"/>
              </div>
              <div className="">
                <h1 className="text-sm font-semibold">{item.title}</h1>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Category

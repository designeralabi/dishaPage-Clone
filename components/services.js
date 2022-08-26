import Image from "next/image";
import data from "./data";

const services = () => {
  return (
    <div className="flex justify-between m-16">
      {data.map((items) => (
        <div key={items.title}>
          <Image src={items.src} width={50} height={50} alt={items.title} />
          <h2 className="font-extrabold my-3">{items.title}</h2>
          <p className="text-sm w-4/5 mt-5 mx-auto leading-relaxed">
            {items.description}
          </p>
        </div>
      ))}
    </div>
  );
};
export default services;

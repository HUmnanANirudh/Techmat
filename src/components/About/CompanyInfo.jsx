const CompanyInfo = () => {
  return (
    <div className="bg-gray-50 flex flex-col md:flex-row justify-center gap-4 py-8 md:py-16 px-4 md:px-8">
      <div className="flex flex-col items-start justify-center gap-8 w-full md:max-w-screen-xl py-1">
        <h1 className="text-black text-2xl md:text-3xl font-bold mb-4">About Us</h1>
        <p className="text-sm md:text-base lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, cumque nihil id quia doloribus tempora provident. Corporis saepe quaerat consequatur voluptatum tenetur placeat, laborum error et fugit voluptates reiciendis, reprehenderit obcaecati voluptas asperiores quod quo. Nisi iste beatae hic exercitationem veniam velit corporis et sit alias quis, ab consequuntur veritatis recusandae, id numquam qui saepe inventore doloribus aut, itaque aperiam. Ex odit inventore ipsa animi impedit sequi voluptates, iure quia ut sed corporis alias vero eum libero cupiditate perferendis obcaecati, saepe unde! Odio deserunt est, hic dolorum beatae adipisci aperiam vel natus fugit consectetur sed nam quae ipsam iusto tempora.
        </p>
      </div>  
      <div className="relative w-full flex justify-center items-start">
        <div className="w-full sm:w-64 md:w-80 lg:w-96 h-full mb-10">
          <img
            src="https://www.unithermfurnaces.com/frontend/assets/images/about3.webp"
            alt="Heat treatment equipment"
            className="rounded-md shadow-2xl z-0 w-full h-auto"
          />
        </div>
        <div className="absolute bottom-0 left-5 sm:left-10 md:left-20 w-24 sm:w-32 md:w-40">
          <img
            src="https://www.unithermfurnaces.com/frontend/assets/images/about4.webp"
            alt="Engineers at work"
            className="shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;

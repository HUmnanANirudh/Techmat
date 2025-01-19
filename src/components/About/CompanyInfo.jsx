import React from 'react';

const CompanyInfo = () => {
  return (
    <div className="bg-gray-50 flex justify-center gap-4 py-16 px-8">
  <div className="flex flex-col items-start justify-center gap-8 w-full max-w-screen-xl py-1">
    <h1 className='text-black text-3xl font-bold mb-4'>About us</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, cumque nihil id quia doloribus tempora provident. Corporis saepe quaerat consequatur voluptatum tenetur placeat, laborum error et fugit voluptates reiciendis, reprehenderit obcaecati voluptas asperiores quod quo. Nisi iste beatae hic exercitationem veniam velit corporis et sit alias quis, ab consequuntur veritatis recusandae, id numquam qui saepe inventore doloribus aut, itaque aperiam. Ex odit inventore ipsa animi impedit sequi voluptates, iure quia ut sed corporis alias vero eum libero cupiditate perferendis obcaecati, saepe unde! Odio deserunt est, hic dolorum beatae adipisci aperiam vel natus fugit consectetur sed nam quae ipsam iusto tempora.</p>
  </div>

  <div className="relative w-full flex justify-center items-start">
    <div className="w-96 h-full mb-10">
      <img
        src="https://www.unithermfurnaces.com/frontend/assets/images/about3.webp"
        alt="Heat treatment equipment"
        className="rounded-md shadow-2xl z-0 w-full"
      />
    </div>
    <div className="absolute bottom-0 left-20 w-40">
      <img
        src="https://www.unithermfurnaces.com/frontend/assets/images/about4.webp"
        alt="Engineers at work"
        className="shadow-lg w-full"
      />
    </div>
  </div>
</div>

  );
};

export default CompanyInfo;

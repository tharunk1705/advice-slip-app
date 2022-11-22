const Card = ({ slip, getSlip }) => {
  return (
    <div className="bg-[#323a49] w-full h-full rounded-xl p-8 font-manrope grid grid-rows-6 gap-2 shadow-lg ">
      <div className="text-[#52ffa8] text-[0.7rem] text-center font-bold tracking-widest row-span-1">
        ADVICE #{slip.id}
      </div>
      <div className="text-[#c9dee5] font-semibold tracking-wider row-span-3 flex text-center items-center justify-center">
        "{slip.advice}"
      </div>
      <div className="row-span-2">
        <div className="relative flex py-5 items-center justify-center">
          <div className="flex-grow border-t border-[#4e5d73]"></div>
          <span className="flex-shrink  text-[#c9dee5] text-2xl">
            <ion-icon name="star"></ion-icon>
          </span>
          <div className="flex-grow border-t border-[#4e5d73]"></div>
        </div>
      </div>
      <div className="absolute bottom-[-20px] left-1/2 translate-x-[-50%]">
        <button
          className="bg-[#52ffa8] drop-shadow-xl rounded-full font-extrabold w-12 h-12 text-2xl flex justify-center items-center active:scale-90 hover:bg-[#43e393] "
          onClick={() => getSlip()}
        >
          <ion-icon name="shuffle-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default Card;

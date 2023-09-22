const Sample = () => {
  return (
    <div className="self-stretch flex flex-col pt-[50px] px-0 pb-0 items-start justify-start">
      <div className="self-stretch flex-1 relative min-w-[980px] min-h-[1030px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white overflow-hidden">
          <img
            className="absolute top-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/wowimage2@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Sample;

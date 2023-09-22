const Banner = () => {
  return (
    <div className="relative w-[1920px] h-[1134px] text-left text-71xl text-white font-poppins">
      <div className="absolute w-[calc(100%_-_1350px)] top-[303px] right-[886px] left-[464px] flex flex-col pt-px px-0 pb-0 box-border items-start justify-start gap-[1px]">
        <b className="relative leading-[81px] inline-block max-w-[573px]">
          Elevate your
        </b>
        <div className="relative leading-[81px] text-darkorange inline-block max-w-[570px]">
          Business
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_1047px)] top-[373px] right-[159px] left-[888px] h-[761px] flex flex-col items-start justify-start">
        <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start">
          <div className="relative w-[873px] h-[761px] max-w-[873px]">
            <img
              className="absolute top-[0px] left-[0px] w-[873px] h-[761px] object-cover"
              alt=""
              src="/fastsign20logo2016png@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_1314px)] top-[492px] right-[850px] left-[464px] flex flex-col py-0 pr-[13px] pl-0 box-border items-start justify-start text-lg font-raleway">
        <div className="relative leading-[25.2px] inline-block max-w-[606px]">
          FastSign is your premier advertising and digital marketing agency
        </div>
        <div className="relative leading-[25.2px] inline-block max-w-[606px] mt-[-0.8px]">
          located in Malappuram, Kerala. With a rich history of serving over
          100+
        </div>
        <div className="relative leading-[25.2px] inline-block max-w-[606px] mt-[-0.8px]">
          clients and delivering more than 1000+ unique designs, we've
        </div>
        <div className="relative leading-[25.2px] inline-block max-w-[606px] mt-[-0.8px]">
          established ourselves as a trusted partner in the world of creative
        </div>
        <div className="relative leading-[25.2px] inline-block max-w-[606px] mt-[-0.8px]">
          marketing solutions. Our team is dedicated to transforming your
          brand's
        </div>
        <div className="relative leading-[25.2px] inline-block max-w-[606px] mt-[-0.8px]">
          visibility and impact, ensuring that your message resonates with your
        </div>
        <div className="relative leading-[25.2px] inline-block max-w-[606px] mt-[-0.8px]">
          audience. Partner with Fastsign and watch your brand soar to new
        </div>
        <div className="relative leading-[25.2px] inline-block max-w-[606px] mt-[-0.8px]">
          heights in the digital landscape.
        </div>
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute w-[calc(100%_-_1721px)] top-[849px] right-[1190px] left-[531px] h-[45px] flex flex-col items-start justify-start"
        autoFocus={true}
      >
        <button className="cursor-pointer p-1 bg-[transparent] self-stretch flex-1 rounded-31xl box-border flex flex-col items-start justify-start min-w-[10px] min-h-[10px] border-[1px] border-solid border-white">
          <div className="self-stretch flex-1 overflow-hidden flex flex-row py-0 pr-[22.669998168945312px] pl-[22.595001220703125px] items-center justify-center gap-[9.74px]">
            <div className="overflow-hidden flex flex-col items-center justify-start min-w-[27px] max-w-[191px]">
              <div className="relative text-[14.53px] tracking-[2.25px] font-inter text-white text-center">
                Learn More
              </div>
            </div>
            <div className="w-[37px] h-[37px] flex flex-col items-start justify-start min-w-[1px]">
              <div className="w-[37px] h-[37px] flex flex-row items-start justify-start">
                <img
                  className="relative w-[37px] h-[37px] overflow-hidden shrink-0"
                  alt=""
                  src="/svg1.svg"
                />
              </div>
            </div>
          </div>
        </button>
      </button>
    </div>
  );
};

export default Banner;

import { useEffect } from "react";

const Clients = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="relative w-[1920px] h-[1283.78px] z-[1] text-left text-61xl text-gray-100 font-poppins">
      <div className="absolute w-[calc(100%_-_1869px)] top-[81px] right-[1378px] left-[491px] box-border h-3 border-t-[12px] border-solid border-darkorange" />
      <div className="absolute w-[calc(100%_-_1008px)] top-[110px] right-[517px] left-[491px] flex flex-col py-0 pr-[455px] pl-0 box-border items-start justify-start">
        <b className="relative leading-[72px] inline-block max-w-[912px]">
          Our Clients
        </b>
      </div>
      <div className="absolute w-[calc(100%_-_1344px)] top-[219px] right-[853px] left-[491px] flex flex-col py-0 pr-0.5 pl-0 box-border items-start justify-start text-lg text-gray-200 font-raleway">
        <div className="relative leading-[28.8px] inline-block max-w-[576px]">
          Our clients are the heart of our business, and we treat each and every
        </div>
        <div className="relative leading-[28.8px] inline-block max-w-[576px] mt-[-0.2px]">
          one of them with the same level of care and attention. We work
        </div>
        <div className="relative leading-[28.8px] inline-block max-w-[576px] mt-[-0.2px]">
          closely with our clients to understand their unique needs and goals,
        </div>
        <div className="relative leading-[28.8px] inline-block max-w-[576px] mt-[-0.2px]">
          and develop customized solutions that deliver real results. We are
        </div>
        <div className="relative leading-[28.8px] inline-block max-w-[576px] mt-[-0.2px]">
          honored to have so many amazing clients, and we will continue to
        </div>
        <div className="relative leading-[28.8px] inline-block max-w-[576px] mt-[-0.2px]">
          work hard to earn their trust and loyalty.
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_1689px)] top-[425.78px] right-[1219px] left-[470px] h-[161px] flex flex-col items-start justify-start">
        <img
          className="self-stretch flex-1 max-w-full overflow-hidden max-h-full object-cover lg:pl-[1200px] lg:pr-[1200px] lg:box-border md:pl-[75%] md:pr-[750%] md:box-border sm:pl-[75%] sm:box-border [&.animate]:sm:animate-[1s_ease_0s_1_normal_forwards_scale-down-center] sm:opacity-[1]"
          alt=""
          src="/wowimage4@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="absolute w-[calc(100%_-_1772px)] top-[438.78px] right-[1030px] left-[742px] h-[148px] flex flex-col items-start justify-start">
        <img
          className="self-stretch flex-1 max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/wowimage5@2x.png"
        />
      </div>
      <div className="absolute w-[calc(100%_-_1771px)] top-[438.78px] right-[798px] left-[973px] h-[148px] flex flex-col items-start justify-start">
        <img
          className="self-stretch flex-1 max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/wowimage6@2x.png"
        />
      </div>
      <div className="absolute w-[calc(100%_-_1689px)] top-[425.78px] right-[529px] left-[1160px] h-[161px] flex flex-col items-start justify-start">
        <img
          className="self-stretch flex-1 max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/wowimage7@2x.png"
        />
      </div>
      <div className="absolute w-[calc(100%_-_1741px)] top-[652.78px] right-[1245px] left-[496px] h-[179px] flex flex-col items-start justify-start">
        <img
          className="self-stretch flex-1 max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/wowimage8@2x.png"
        />
      </div>
      <div className="absolute w-[calc(100%_-_1741px)] top-[862.78px] right-[1245px] left-[496px] h-[179px] flex flex-col items-start justify-start">
        <img
          className="self-stretch flex-1 max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/wowimage9@2x.png"
        />
      </div>
      <div className="absolute w-[calc(100%_-_1741px)] top-[1062.78px] right-[1248px] left-[493px] h-[179px] flex flex-col items-start justify-start">
        <img
          className="self-stretch flex-1 max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/wowimage10@2x.png"
        />
      </div>
      <div className="absolute w-[calc(100%_-_1689px)] top-[662.78px] right-[988px] left-[701px] h-[159px] flex flex-col items-start justify-start">
        <img
          className="self-stretch flex-1 max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/wowimage11@2x.png"
        />
      </div>
      <div className="absolute w-[calc(100%_-_1768px)] top-[872.78px] right-[1028px] left-[740px] h-[152px] flex flex-col items-start justify-start">
        <img
          className="self-stretch flex-1 max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/wowimage12@2x.png"
        />
      </div>
      <div className="absolute w-[calc(100%_-_1768px)] top-[1072.78px] right-[1031px] left-[737px] h-[152px] flex flex-col items-start justify-start">
        <img
          className="self-stretch flex-1 max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/wowimage13@2x.png"
        />
      </div>
      <div className="absolute w-[calc(100%_-_1713px)] top-[639.78px] right-[760px] left-[953px] h-[206px] flex flex-col items-start justify-start">
        <img
          className="self-stretch flex-1 max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/wowimage14@2x.png"
        />
      </div>
      <div className="absolute w-[calc(100%_-_1689px)] top-[662.78px] right-[529px] left-[1160px] h-[159px] flex flex-col items-start justify-start">
        <img
          className="self-stretch flex-1 max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/wowimage15@2x.png"
        />
      </div>
      <div className="absolute w-[calc(100%_-_1741px)] top-[852.78px] right-[775px] left-[966px] h-[179px] flex flex-col items-start justify-start">
        <img
          className="self-stretch flex-1 max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/wowimage16@2x.png"
        />
      </div>
      <div className="absolute w-[calc(100%_-_1762px)] top-[872.78px] right-[566px] left-[1196px] h-[159px] flex flex-col items-start justify-start">
        <img
          className="self-stretch flex-1 max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/wowimage17@2x.png"
        />
      </div>
      <div className="absolute w-[calc(100%_-_1741px)] top-[1052.78px] right-[777px] left-[964px] h-[179px] flex flex-col items-start justify-start">
        <img
          className="self-stretch flex-1 max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/wowimage18@2x.png"
        />
      </div>
      <div className="absolute w-[calc(100%_-_1762px)] top-[1072.78px] right-[569px] left-[1193px] h-[159px] flex flex-col items-start justify-start">
        <img
          className="self-stretch flex-1 max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/wowimage19@2x.png"
        />
      </div>
    </div>
  );
};

export default Clients;

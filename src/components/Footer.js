const Footer = () => {
  return (
    <div className="relative w-[1920px] h-[193px] z-[1] text-left text-sm text-white font-raleway">
      <div className="absolute w-[calc(100%_-_1518px)] top-[67px] right-[1027px] left-[491px] flex flex-col py-0 pr-[152px] pl-0 box-border items-start justify-start">
        <div className="relative leading-[19.6px] inline-block max-w-[402px] max-h-[19.600000381469727px]">
          © 2023 FASTSIGN. All Rights Reserved.
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_1509px)] top-[60px] right-[517px] left-[992px] flex flex-col py-0 pr-[286px] pl-0 box-border items-start justify-start text-base">
        <div className="relative inline-block max-w-[411px]">
          Connect With Us
        </div>
      </div>
      <div className="absolute h-[17.62%] w-[10.31%] top-[51.3%] right-[38.65%] bottom-[31.09%] left-[51.04%] flex flex-row items-start justify-start gap-[7px]">
        <a className="[text-decoration:none] flex flex-row items-start justify-start">
          <a
            className="[text-decoration:none] bg-[url('/public/link@3x.png')] bg-cover bg-no-repeat bg-[top]"
            href="/text the url here"
          />
        </a>
        <a className="[text-decoration:none] flex flex-row items-start justify-start">
          <a
            className="[text-decoration:none] bg-[url('/public/link1@3x.png')] bg-cover bg-no-repeat bg-[top]"
            href="/text the url here"
          />
        </a>
        <a className="[text-decoration:none] flex flex-row items-start justify-start">
          <a
            className="[text-decoration:none] bg-[url('/public/link2@3x.png')] bg-cover bg-no-repeat bg-[top]"
            href="/text the url here"
          />
        </a>
        <a className="[text-decoration:none] flex flex-row items-start justify-start">
          <a
            className="[text-decoration:none] bg-[url('/public/link3@3x.png')] bg-cover bg-no-repeat bg-[top]"
            href="/text the url here"
          />
        </a>
        <a className="[text-decoration:none] flex flex-row items-start justify-start">
          <a className="[text-decoration:none] bg-[url('/public/link4@2x.png')] bg-cover bg-no-repeat bg-[top]" />
        </a>
      </div>
    </div>
  );
};

export default Footer;

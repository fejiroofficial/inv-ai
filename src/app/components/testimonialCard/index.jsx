import Image from "next/image";

export default function TestimonialCard({ item }) {
    return (
      <div className="rounded-3xl p-6 bg-[#E3E3E3] w-[335px] md:w-[419px] h-[346px] flex flex-col justify-between">
        <h3 className="text-[20px] lg:text-[24px] font-semibold text-[#212121] mb-2">
          {item.title}
        </h3>
        <p className="text-[#212121] mb-4">{item.description}</p>
        <div className="flex items-center gap-3 mt-auto pt-6">
          <Image
            src={item.avatar}
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="space-y-1">
            <h4 className="font-semibold text-[18px] text-black">
              {item.avaterName}
            </h4>
            <p className="text-[16px] text-[#626262]">{item.position}</p>
          </div>
        </div>
      </div>
    );
  }
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-gray-600 grid grid-cols-12 py-3 px-4">
        <div className="col-span-6 ">
          <div className="text-xs font-bold text-white">Primary school</div>
          <div className="text-xs text-white">International accredited</div>
        </div>
      </div>
    </div>
  );
}

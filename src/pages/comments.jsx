/* eslint-disable @next/next/no-img-element */

export default function Hero() {
  return (
    <div className="bg-[url('/background1.webp')] bg-cover w-[100%] min-h-[100vh] z-10 flex flex-col gap-10 px-16 py-20 pt-40">
      <h1 className="font-inter font-extrabold text-white text-center text-5xl">
        Отзывы
      </h1>
      <div className="flex lg:flex-row lg:flex-wrap flex-col gap-10">
        {[
          "/video1.mp4",
          "/video2.mp4",
          "/video3.mp4",
          "/video4.mp4",
          "/video5.mp4",
          "/video6.mp4",
          "/video7.mp4",
        ].map((item, index) => (
          <video
            key={index}
            className="lg:w-[30%] w-[100%] mx-auto h-auto"
            controls
          >
            <source src={item} type="video/mp4" />{" "}
          </video>
        ))}
      </div>
    </div>
  );
}

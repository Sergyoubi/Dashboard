import PhotoItems from "./PhotoItems";

const PhotoComponent = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-[20%] flex justify-start items-center">
        <p className="text-slate-700 text-2xl font-bold ml-[5%]">
          List of photos
        </p>
      </div>
      <div className="w-full h-[80%] flex justify-start items-start gap-3">
        <PhotoItems />
        <PhotoItems />
        <PhotoItems />
      </div>
    </div>
  );
};

export default PhotoComponent;

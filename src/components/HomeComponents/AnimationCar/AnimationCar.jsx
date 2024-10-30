const AnimationCar = () => {
  return (
    <div>
      <div className="max-h-[1080px] mb-[73px]">
        <video
          className="w-full  h-full rounded-lg shadow-lg"
          autoPlay
          loop
          muted
          playsInline
          controls
        >
          <source
            src="../../../../public/assets/video/animationcar.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default AnimationCar;

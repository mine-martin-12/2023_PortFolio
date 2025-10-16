const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-hue animate-pulse duration-75 z-10">
      <img 
        src="/circles.png" 
        width={260} 
        height={200}
        className="w-full h-full"
        alt="Decorative circles"
      />
    </div>
  );
};

export default Circles;

const Avatar = () => {
  return (
    <div className="hidden md:flex xl:max-w-none w-full max-w-sm md:max-w-md">
      <img
        src="/portfolioavatar.png"
        className="translate-z-0 w-full h-full object-contain"
        alt="Portfolio Avatar"
      />
    </div>
  );
};

export default Avatar;

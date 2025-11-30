export const HeroSection = ({ title, description }) => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-20 lg:px-32 py-28 bg-gradient-to-br from-primary/15 via-primary/10 to-primary/5 dark:from-primary/25 dark:via-primary/20 dark:to-primary/15">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">

          <h1 className="text-4xl lg:text-6xl font-extrabold text-primary dark:text-white leading-tight bg-gradient-to-r from-primary to-primary/80 bg-clip-text">
            {title}
          </h1>

          <p className="mt-6 text-md md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">{description}</p>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mt-8 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

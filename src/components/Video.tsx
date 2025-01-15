export const Video = () => {
  return (
    <section id="video" className="py-20 bg-romantic-gold/10">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl text-center mb-12">
          Discover Our Experience
        </h2>
        <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
          <iframe
            className="w-full h-[500px] rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/your-video-id"
            title="Évasion Éternelle Presentation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};
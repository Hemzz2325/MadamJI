import LoveCard from './LoveCard';

const Gallery = () => {
  const memories = [
    {
      title: "Our First Meeting",
      message: "The day my life changed forever, Krutika. Your smile lit up my whole world, and I knew I had found my home.",
      image: "https://media.tenor.com/images/3d7d8122cdae8623ff27e2bced7ec0b2/tenor.gif",
    },
    {
      title: "Endless Laughter",
      message: "With you, every moment becomes a joy. You are my safe place, my best friend, and my greatest love, Krutika.",
      image: "https://media.tenor.com/images/7ce086b97ac471dc228ddfbc5aa63fe1/tenor.gif",
    },
    {
      title: "Forever Yours",
      message: "No matter the distance, my heart beats only for you. Happy Birthday, my beautiful Krutika. I love you.",
      image: "https://media.tenor.com/images/73bcca577db744a5e0b7fc80e340db38/tenor.gif",
    },
    {
      title: "You Are My World",
      message: "March 23rd is not just a date — it's the day the universe gifted me you. Thank you for being born, Krutika.",
      image: "https://media.tenor.com/images/a7b77e8c57be8f24f6eca15da8a08e80/tenor.gif",
    },
    {
      title: "Dudu & Bubu 🐻🐷",
      message: "Just like Dudu and Bubu, we are a perfect pair. Different but made for each other, always together.",
      image: "https://media.tenor.com/images/6e9f4b56e94073fa1bb3b8e83c0a26db/tenor.gif",
    },
    {
      title: "Happy Birthday Krutika 🎂",
      message: "Today I celebrate YOU — your laugh, your heart, your kindness, your strength. You're my everything.",
      image: "https://media.tenor.com/images/9e6af8ab5a89e3f2fdb3cdde3aef8faf/tenor.gif",
    },
  ];

  return (
    <section id="gallery" className="relative z-10 py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-4 inline-block"
          style={{
            background: 'linear-gradient(135deg, #c084d8 0%, #bdb2ff 70%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          A Journey of Our Love 💕
        </h2>
        <p className="text-lg font-medium" style={{ color: '#8a60b0' }}>
          Some of the reasons why I love you, Krutika.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {memories.map((memory, index) => (
          <LoveCard
            key={index}
            title={memory.title}
            message={memory.message}
            image={memory.image}
            delay={index * 0.15}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;

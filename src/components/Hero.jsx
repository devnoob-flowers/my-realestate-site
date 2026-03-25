export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600')`,
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p className="text-red-400 font-semibold uppercase tracking-widest mb-4 text-sm">
          Keller Williams Realty | The Woodlands & Magnolia
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Your Partner in <br />
          <span className="text-red-500">Real Estate</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto">
          Helping first-time buyers find their perfect home in The Woodlands and
          Surrounding Areas.
        </p>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}

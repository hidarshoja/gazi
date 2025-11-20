import { useState, useEffect } from 'react';

const CouncilMeetingsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // عکس‌های جلسات (شروع با j, s, m)
  const images = [
    { src: '/j1.jpg', title: 'جلسه شورای اسلامی و دهیاری' },
    { src: '/j2.jpg', title: 'جلسه با ادارات' },
    { src: '/j3.jpg', title: 'جلسه با اهالی روستا' },
    { src: '/j4.jpg', title: 'جلسه هماهنگی' },
    { src: '/j5.jpg', title: 'جلسه بررسی پروژه‌ها' },
    { src: '/j6.jpg', title: 'جلسه برنامه‌ریزی' },
    { src: '/j7.jpg', title: 'جلسه با مسئولان' },
    { src: '/j8.jpg', title: 'جلسه شورای اسلامی' },
    { src: '/j10.jpg', title: 'جلسه دهیاری' },
    { src: '/j11.jpg', title: 'جلسه هماهنگی' },
    { src: '/sal.jpg', title: 'جلسه شورا' },
    { src: '/mas.jpg', title: 'جلسه با مسئولان' },
    { src: '/mas2.jpg', title: 'جلسه هماهنگی' },
    { src: '/sang.jpg', title: 'جلسه شورای اسلامی' },
    { src: '/sang2.jpg', title: 'جلسه دهیاری' },
  ];

  // مدیریت ریسپانسیو
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth >= 768 ? 3 : 1);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, images.length - itemsPerView);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4000); // تغییر هر 4 ثانیه

    return () => clearInterval(interval);
  }, [images.length, itemsPerView]);

  const visibleImages = images.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            جلسات اعضای شورا و دهیاری با ادارات و اهالی
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            شورای اسلامی و دهیاری روستای قاضی با برگزاری جلسات منظم با ادارات و اهالی، در راستای حل مشکلات و توسعه روستا تلاش می‌کنند
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {visibleImages.map((image, index) => (
              <div
                key={currentIndex + index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/vite.svg';
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    جلسات منظم شورای اسلامی و دهیاری با ادارات و اهالی برای بررسی مسائل و مشکلات روستا و یافتن راه‌حل‌های مناسب
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2 rtl:space-x-reverse">
            {Array.from({ length: Math.ceil(images.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerView)}
                className={`w-3 h-3 rounded-full transition-all ${
                  Math.floor(currentIndex / itemsPerView) === index
                    ? 'bg-green-600 w-8'
                    : 'bg-gray-300'
                }`}
                aria-label={`اسلاید ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => {
              const maxIndex = Math.max(0, images.length - itemsPerView);
              setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - itemsPerView));
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="اسلاید قبلی"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            onClick={() => {
              const maxIndex = Math.max(0, images.length - itemsPerView);
              setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + itemsPerView));
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="اسلاید بعدی"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CouncilMeetingsSlider;


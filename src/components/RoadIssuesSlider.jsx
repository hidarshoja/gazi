import { useState, useEffect } from 'react';

const RoadIssuesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // عکس‌های مشکلات راه (شروع با r)
  const images = [
    { src: '/r.jpg', title: 'مشکلات راه و اقدامات انجام شده' },
    { src: '/ra2.jpg', title: 'بهبود راه‌های روستا' },
    { src: '/ra3.jpg', title: 'تعمیر و نگهداری راه' },
    { src: '/rah4.jpg', title: 'آسفالت راه‌های روستا' },
    { src: '/rah5.jpg', title: 'بهبود دسترسی' },
    { src: '/rah6.jpg', title: 'تعمیرات راه' },
    { src: '/rah7.jpg', title: 'بهبود زیرساخت راه' },
    { src: '/rah9.jpg', title: 'اقدامات راهسازی' },
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
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, itemsPerView]);

  const visibleImages = images.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            مشکلات راه و اقدامات شورا و دهیاری
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            شورای اسلامی و دهیاری با پیگیری و اقدامات مستمر، در راستای بهبود و تعمیر راه‌های روستا تلاش می‌کنند
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
                    پیگیری و اقدامات شورای اسلامی و دهیاری برای بهبود راه‌های روستا، آسفالت، تعمیر و نگهداری که باعث سهولت دسترسی و بهبود کیفیت زندگی اهالی شده است
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

export default RoadIssuesSlider;


import { Link } from 'react-router-dom';

const ScenicAreas = () => {
  const areas = [
    {
      id: 1,
      title: 'کوهستان و دامنه‌های سرسبز',
      description: 'مناظر کوهستانی بکر با پوشش گیاهی متنوع که در فصل بهار و تابستان چشم‌اندازهای خیره‌کننده‌ای را ایجاد می‌کند.',
      image: '🏔️',
      features: ['مناظر طبیعی', 'هوای پاک', 'پیاده‌روی']
    },
    {
      id: 2,
      title: 'باغ‌های میوه',
      description: 'باغ‌های وسیع میوه با درختان سیب، گیلاس، آلو و گردو که در فصل برداشت، فضای دلنشینی را ایجاد می‌کنند.',
      image: '🍎',
      features: ['باغ‌های میوه', 'فصل برداشت', 'محصولات تازه']
    },
    {
      id: 3,
      title: 'چشمه‌های طبیعی',
      description: 'چشمه‌های زلال و خنک که از دل کوه جاری می‌شوند و آب گوارایی را برای روستا و کشاورزی فراهم می‌کنند.',
      image: '💧',
      features: ['آب زلال', 'هوای خنک', 'مناظر زیبا']
    },
    {
      id: 4,
      title: 'مراتع و دشت‌ها',
      description: 'مراتع سرسبز که در فصل بهار با گل‌های رنگارنگ پوشیده می‌شوند و محل چرای دام‌ها هستند.',
      image: '🌾',
      features: ['مراتع سرسبز', 'گل‌های وحشی', 'دامداری']
    },
    {
      id: 5,
      title: 'آثار تاریخی',
      description: 'بناهای تاریخی و قدیمی روستا که نشان‌دهنده قدمت و تاریخ غنی این منطقه است.',
      image: '🏛️',
      features: ['بناهای تاریخی', 'معماری سنتی', 'فرهنگ محلی']
    },
    {
      id: 6,
      title: 'مناظر غروب آفتاب',
      description: 'مناظر بی‌نظیر غروب آفتاب از بالای تپه‌های روستا که هر بیننده‌ای را مجذوب خود می‌کند.',
      image: '🌅',
      features: ['غروب زیبا', 'مناظر پانوراما', 'عکاسی']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            مناطق دیدنی روستای قاضی
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            کشف زیبایی‌های طبیعی و تاریخی روستای قاضی در قلب خراسان شمالی
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {areas.map((area) => (
            <div
              key={area.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 text-center">
                <div className="text-6xl mb-4">{area.image}</div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {area.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            آماده بازدید از این مناطق زیبا هستید؟
          </h2>
          <p className="text-lg mb-6 text-green-100">
            برای هماهنگی بازدید و راهنمایی بیشتر با ما تماس بگیرید
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            تماس با ما
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScenicAreas;


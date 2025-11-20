import { Link } from 'react-router-dom';

const Jobs = () => {
  const jobCategories = [
    {
      id: 1,
      title: 'کشاورزی و باغداری',
      icon: '🌾',
      description: 'فرصت‌های شغلی در زمینه کشاورزی و باغداری با محصولات متنوع',
      opportunities: [
        'کشت محصولات زراعی',
        'باغداری و پرورش میوه',
        'کشت گیاهان دارویی',
        'استفاده از روش‌های نوین کشاورزی'
      ]
    },
    {
      id: 2,
      title: 'دامداری و دامپروری',
      icon: '🐄',
      description: 'زمینه‌های مختلف در پرورش دام و تولید محصولات دامی',
      opportunities: [
        'پرورش گاو و گوسفند',
        'تولید شیر و فرآورده‌های لبنی',
        'پرورش طیور',
        'تولید عسل'
      ]
    },
    {
      id: 3,
      title: 'گردشگری و اقامتگاه',
      icon: '🏨',
      description: 'فرصت‌های سرمایه‌گذاری در بخش گردشگری و خدمات اقامتی',
      opportunities: [
        'احداث اقامتگاه بوم‌گردی',
        'رستوران و کافه',
        'راهنمای تور',
        'فروش صنایع دستی'
      ]
    },
    {
      id: 4,
      title: 'صنایع دستی',
      icon: '🎨',
      description: 'تولید و فروش صنایع دستی محلی و سنتی',
      opportunities: [
        'بافت فرش و گلیم',
        'سفالگری',
        'نقاشی و تزئینات',
        'فروش آنلاین'
      ]
    },
    {
      id: 5,
      title: 'خدمات محلی',
      icon: '🛠️',
      description: 'ارائه خدمات مختلف به اهالی و گردشگران',
      opportunities: [
        'فروشگاه محلی',
        'تعمیرات و خدمات',
        'حمل و نقل',
        'خدمات رفاهی'
      ]
    },
    {
      id: 6,
      title: 'فناوری و دیجیتال',
      icon: '💻',
      description: 'فرصت‌های کار از راه دور و کسب و کارهای آنلاین',
      opportunities: [
        'برنامه‌نویسی و طراحی',
        'بازاریابی دیجیتال',
        'فروش آنلاین',
        'مشاوره و آموزش'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            فرصت‌های شغلی و سرمایه‌گذاری
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            کشف فرصت‌های شغلی و زمینه‌های سرمایه‌گذاری در روستای قاضی
          </p>
        </div>

        {/* Job Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {jobCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4 text-center">{category.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 text-center">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                {category.description}
              </p>
              <ul className="space-y-2">
                {category.opportunities.map((opportunity, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-600 ml-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{opportunity}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-lg p-8 md:p-12 text-white mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
              مزایای کار و سرمایه‌گذاری در روستای قاضی
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <svg className="w-6 h-6 text-green-200 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="font-semibold mb-2">هزینه‌های پایین</h4>
                <p className="text-green-100">هزینه‌های زندگی و کسب و کار در روستا به مراتب کمتر از شهر است</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <svg className="w-6 h-6 text-green-200 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="font-semibold mb-2">طبیعت سالم</h4>
                <p className="text-green-100">زندگی در محیطی پاک و سالم با هوای تازه و آب گوارا</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <svg className="w-6 h-6 text-green-200 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="font-semibold mb-2">حمایت محلی</h4>
                <p className="text-green-100">همکاری و پشتیبانی اهالی روستا از کسب و کارهای جدید</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <svg className="w-6 h-6 text-green-200 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="font-semibold mb-2">فرصت رشد</h4>
                <p className="text-green-100">زمینه‌های مختلف برای رشد و توسعه کسب و کار</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            علاقه‌مند به کار یا سرمایه‌گذاری هستید؟
          </h2>
          <p className="text-gray-600 mb-6">
            برای اطلاعات بیشتر و مشاوره با ما تماس بگیرید
          </p>
          <Link
            to="/contact"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            تماس با ما
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Jobs;


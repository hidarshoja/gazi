const VillageIntro = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            معرفی روستای قاضی
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              موقعیت جغرافیایی
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              روستای قاضی از توابع دهستان گیفان، بخش گرمخان و در شهرستان بجنورد در استان خراسان شمالی واقع شده است. 
              این روستا در ارتفاع ۹۸۰ متری از سطح دریا قرار دارد و دارای موقعیت جغرافیایی منحصر به فردی است.
            </p>
            <p className="text-gray-600 leading-relaxed">
              روستای قاضی در ۷۹ کیلومتری شمال بجنورد قرار دارد و یکی از سه آبادی همنام در منطقه بجنورد است 
              که به قاضی موسوم هستند. موقعیت جغرافیایی خاص این روستا، آن را به مکانی مناسب برای کشاورزی و دامداری 
              تبدیل کرده است.
            </p>
          </div>

          {/* Historical Background */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              تاریخچه و وجه تسمیه
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              بر اساس تحقیقات تاریخی، نام این روستا در اصل «غازی» بوده که به معنای جنگجو و شرکت‌کننده در غزوات است. 
              این نام بعدها به دلیل تشابه لفظی به «قاضی» تغییر یافته است.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              طبق شواهد تاریخی، بنیان روستای قاضی در اوایل دهه ۱۲۷۰ هجری شمسی با کوچ چند خانواده از طایفه غازی 
              در گیفان و اسکان دائم آنها در این محل گذارده شد. این طایفه از جنگجویانی بودند که همواره در دهانه 
              دربند قاضی استقرار داشتند تا مراقب آمد و شد راهزنان و یاغیان باشند.
            </p>
            <p className="text-gray-600 leading-relaxed">
              همچنین در دوره غازان خان، هفتمین ایلخان مغول، قراولخانه‌هایی در این منطقه ساخته شد که غازیان 
              (جنگجویان) در آن‌ها مستقر بودند و به مراقبت از منطقه می‌پرداختند. به همین دلیل نام آبادی‌های 
              این منطقه را غازی نهاده‌اند.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center">
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                موقعیت جغرافیایی
              </h3>
              <p className="text-gray-600 mb-2">
                <strong>استان:</strong> خراسان شمالی
              </p>
              <p className="text-gray-600 mb-2">
                <strong>شهرستان:</strong> بجنورد
              </p>
              <p className="text-gray-600 mb-2">
                <strong>بخش:</strong> گرمخان
              </p>
              <p className="text-gray-600 mb-2">
                <strong>دهستان:</strong> گیفان
              </p>
              <p className="text-gray-600">
                <strong>ارتفاع:</strong> ۹۸۰ متر از سطح دریا
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center">
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                جمعیت و فرهنگ
              </h3>
              <p className="text-gray-600 mb-2">
                بر اساس سرشماری مرکز آمار ایران در سال ۱۳۸۵، جمعیت روستای قاضی ۲۵۰ نفر (۵۶ خانوار) بوده است.
              </p>
              <p className="text-gray-600">
                مردم روستای قاضی با حفظ آداب و رسوم محلی، مهمان‌نوازی و صمیمیت را در روابط خود حفظ کرده‌اند. 
                فرهنگ غنی این روستا در مراسم و جشن‌های محلی نمود پیدا می‌کند.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center">
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                امکانات و زیرساخت‌ها
              </h3>
              <p className="text-gray-600 mb-2">
                روستا دارای امکانات اولیه از جمله مدرسه، مسجد، مرکز بهداشت و راه‌های دسترسی مناسب است.
              </p>
              <p className="text-gray-600">
                در سال‌های اخیر، پروژه‌های عمرانی مهمی در روستا انجام شده است از جمله کانال آب روستا که 
                با حضور مسئولان قرارگاه پیشرفت و آبادانی سپاه پاسداران به بهره‌برداری رسیده است.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center">
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                اقتصاد و معیشت
              </h3>
              <p className="text-gray-600">
                اقتصاد روستا بر پایه کشاورزی، دامداری و در سال‌های اخیر گردشگری استوار است. 
                محصولات کشاورزی و دامی این روستا از کیفیت بالایی برخوردار است. همچنین طرح‌های 
                دامداری اصلاح نژاد در منطقه در حال اجرا است.
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-lg p-6 md:p-8 text-white mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
              آمار و اطلاعات
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">250</div>
                <div className="text-green-100">نفر جمعیت</div>
                <div className="text-sm text-green-200 mt-1">(سال ۱۳۸۵)</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">56</div>
                <div className="text-green-100">خانوار</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">980</div>
                <div className="text-green-100">متر ارتفاع</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">79</div>
                <div className="text-green-100">کیلومتر</div>
                <div className="text-sm text-green-200 mt-1">فاصله از بجنورد</div>
              </div>
            </div>
          </div>

          {/* Recent Developments */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              اقدامات و پروژه‌های انجام شده
            </h2>
            <div className="space-y-4">
              <div className="border-r-4 border-green-600 pr-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  کانال آب روستای قاضی
                </h3>
                <p className="text-gray-600">
                  کانال آب روستای قاضی از توابع دهستان گیفان بجنورد با حضور مسئول قرارگاه پیشرفت و آبادانی 
                  سپاه پاسداران به بهره‌برداری رسید. این پروژه نقش مهمی در تأمین آب کشاورزی و بهبود شرایط 
                  زندگی مردم روستا دارد.
                </p>
              </div>
              <div className="border-r-4 border-green-600 pr-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  طرح دامداری اصلاح نژاد
                </h3>
                <p className="text-gray-600">
                  طرح دامداری اصلاح نژاد در دهستان گیفان از جمله پروژه‌های محرومیت‌زدایی است که در حال اجرا می‌باشد.
                </p>
              </div>
              <div className="border-r-4 border-green-600 pr-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  پروژه‌های محرومیت‌زدایی
                </h3>
                <p className="text-gray-600">
                  قرارگاه پیشرفت و آبادانی سپاه پاسداران در حوزه‌های تربیتی، عمرانی و فرهنگی اقدامات تحولی 
                  مهمی در منطقه انجام داده است.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillageIntro;

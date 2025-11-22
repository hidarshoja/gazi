import { Link } from "react-router-dom";
import { useState } from "react";
import CouncilMeetingsSlider from "../components/CouncilMeetingsSlider";
import ResidentParticipationSlider from "../components/ResidentParticipationSlider";
import RoadIssuesSlider from "../components/RoadIssuesSlider";
import Blessings from "../components/Blessings";

const Home = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const achievements = [
    {
      id: 1,
      title: "ساخت اتاق دیجیتال برای تلویزیون",
      description:
        "احداث و تجهیز اتاق دیجیتال برای پخش برنامه‌های تلویزیونی و دسترسی اهالی روستا به رسانه‌های دیجیتال. این اقدام باعث بهبود دسترسی به اطلاعات و سرگرمی برای خانواده‌ها شده است.",
      icon: "📺",
    },
    {
      id: 2,
      title: "بازگشایی راه سمت نانوایی",
      description:
        "احداث و بازگشایی مسیر دسترسی به نانوایی روستا که باعث سهولت دسترسی اهالی به نان تازه و بهبود کیفیت زندگی شده است. این پروژه نقش مهمی در رفاه عمومی روستا دارد.",
      icon: "🛣️",
    },
    {
      id: 3,
      title: "جدول کشی و ایجاد پیاده رو در روستا",
      description:
        "احداث پیاده‌رو و جدول‌کشی در معابر اصلی روستا که باعث بهبود ایمنی عابرین پیاده، زیباسازی محیط و سازماندهی بهتر فضای شهری شده است. این اقدام در راستای توسعه زیرساخت‌های روستایی انجام شده است.",
      icon: "🚶",
    },
    {
      id: 4,
      title: "کانال کشی جهت جمع آوری آب‌های سطحی",
      description:
        "احداث شبکه کانال‌کشی برای جمع‌آوری و هدایت آب‌های سطحی که باعث جلوگیری از آبگرفتگی معابر، حفظ بهداشت محیط و استفاده بهینه از منابع آبی شده است. این پروژه نقش مهمی در مدیریت آب در روستا دارد.",
      icon: "💧",
    },
    {
      id: 5,
      title: "لوله گذاری دو جوی آب به طول 4 کیلومتر با مشارکت جهاد کشاورزی",
      description:
        "احداث سیستم لوله‌گذاری برای دو جوی آب به طول 4 کیلومتر با همکاری جهاد کشاورزی که باعث بهبود آبیاری مزارع، کاهش هدررفت آب و افزایش بهره‌وری کشاورزی شده است. این پروژه در راستای توسعه پایدار کشاورزی انجام شده است.",
      icon: "🌾",
    },
    {
      id: 6,
      title:
        "سیمان کردن یک جوی آب به طول 2 کیلومتر با مشارکت قرارگاه پیشرفت و آبادانی",
      description:
        "سیمان‌کاری و مقاوم‌سازی جوی آب به طول 2 کیلومتر با همکاری قرارگاه پیشرفت و آبادانی که باعث افزایش دوام و کارایی سیستم آبیاری، کاهش نشت آب و بهبود مدیریت منابع آبی شده است.",
      icon: "🏗️",
    },
    {
      id: 7,
      title: "ایجاد و خرید وسایل پارک",
      description:
        "احداث پارک و خرید تجهیزات تفریحی و ورزشی برای کودکان و نوجوانان که باعث ایجاد فضای تفریحی سالم، افزایش نشاط اجتماعی و بهبود کیفیت زندگی خانواده‌ها شده است.",
      icon: "🎠",
    },
    {
      id: 8,
      title: "احداث زمین والیبال",
      description:
        "ساخت زمین والیبال استاندارد برای جوانان و نوجوانان روستا که باعث ایجاد فرصت برای ورزش و تفریح، تقویت روحیه تیمی و بهبود سلامت جسمی و روانی جوانان شده است.",
      icon: "🏐",
    },
    {
      id: 9,
      title: "پیگیری سمت توسعه روستا",
      description:
        "تلاش مستمر شورای اسلامی و دهیاری برای پیگیری و اجرای پروژه‌های توسعه روستا، جلب مشارکت نهادهای دولتی و غیردولتی و برنامه‌ریزی برای آینده روستا در راستای بهبود زیرساخت‌ها و کیفیت زندگی اهالی.",
      icon: "📈",
    },
    {
      id: 10,
      title: "پرورش و ایجاد اشتغال بوقلمون برای جوانان",
      description:
        "راه‌اندازی طرح پرورش بوقلمون و ایجاد فرصت‌های شغلی برای جوانان روستا که باعث افزایش درآمد، کاهش بیکاری و ایجاد زمینه برای کارآفرینی شده است. این پروژه با آموزش و پشتیبانی از جوانان همراه است.",
      icon: "🦃",
    },
    {
      id: 11,
      title: "ایجاد اتاق کرم ابریشم و ایجاد اشتغال",
      description:
        "احداث واحد پرورش کرم ابریشم و ایجاد فرصت‌های شغلی جدید که باعث تنوع بخشی به اقتصاد روستا، ایجاد درآمد برای خانواده‌ها و احیای صنایع دستی محلی شده است. این پروژه در راستای توسعه پایدار روستا انجام شده است.",
      icon: "🪱",
    },
    {
      id: 12,
      title: "معرفی 30 نفر از اهالی به عنوان مددجوی کمیته امداد",
      description:
        "پیگیری و معرفی 30 نفر از خانواده‌های نیازمند روستا به کمیته امداد امام خمینی (ره) که باعث دریافت کمک‌های معیشتی، بهبود شرایط زندگی خانواده‌های محروم و کاهش فقر در روستا شده است.",
      icon: "🤝",
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              به روستای قاضی خوش آمدید
            </h1>
            <p className="text-lg md:text-xl mb-8 text-green-100">
              طبیعت بکر، فرهنگ غنی و مهمان‌نوازی بی‌نظیر در قلب خراسان شمالی
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/village-intro"
                className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                بیشتر بدانید
              </Link>
              <Link
                to="/scenic-areas"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors"
              >
                مناطق دیدنی
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Council Meetings Section */}
      <CouncilMeetingsSlider />
      <Blessings />

      {/* Resident Participation Section */}
      <ResidentParticipationSlider />

      {/* Road Issues Section */}
      <RoadIssuesSlider />

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            چرا روستای قاضی؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">
                طبیعت بکر
              </h3>
              <p className="text-gray-600 text-center">
                مناظر طبیعی خیره‌کننده و هوای پاک برای تجربه‌ای فراموش‌نشدنی
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">
                فرهنگ غنی
              </h3>
              <p className="text-gray-600 text-center">
                آداب و رسوم محلی و مهمان‌نوازی مردم خونگرم روستا
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">
                فرصت‌های شغلی
              </h3>
              <p className="text-gray-600 text-center">
                زمینه‌های مختلف برای کار و سرمایه‌گذاری در روستا
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              اقدامات شورای اسلامی و دهیاری
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              شورای اسلامی و دهیاری روستای قاضی با تلاش و پیگیری مستمر، اقدامات
              مهمی در راستای توسعه و آبادانی روستا انجام داده‌اند
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-right hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-4 rtl:space-x-reverse flex-1">
                    <span className="text-3xl">{achievement.icon}</span>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 flex-1">
                      {achievement.title}
                    </h3>
                  </div>
                  <svg
                    className={`w-6 h-6 text-green-600 transition-transform flex-shrink-0 ${
                      openAccordion === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openAccordion === index && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mosque Board Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              اقدامات هیئت امنای مسجد صاحب الزمان (عج)
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              هیئت امنای مسجد صاحب الزمان (عج) روستای قاضی با تلاش و همت خیرین و
              اهالی، اقدامات ارزشمندی در راستای توسعه فرهنگی و مذهبی روستا انجام
              داده‌اند
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-r-4 border-green-600">
              <div className="flex items-start space-x-4 rtl:space-x-reverse mb-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <span className="text-3xl">🕌</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                    برگزاری مراسمات محرم و مناسبت‌های مذهبی
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                هیئت امنای مسجد هر ساله با برنامه‌ریزی و هماهنگی، مراسمات باشکوه
                محرم و سایر مناسبت‌های مذهبی را در روستا برگزار می‌کند. این
                مراسمات که با حضور پرشور اهالی روستا همراه است، باعث تقویت روحیه
                معنوی، ایجاد وحدت و همبستگی بیشتر در بین مردم و حفظ فرهنگ و آداب
                مذهبی در روستا شده است.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-r-4 border-green-600">
              <div className="flex items-start space-x-4 rtl:space-x-reverse mb-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <span className="text-3xl">🏗️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                    ساخت مسجد جدید دو طبقه
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                با وجود کلنگی بودن مسجد قدیمی، هیئت امنای مسجد با همت و تلاش
                بی‌وقفه و با کمک و مشارکت خیرین و اهالی محترم روستا، موفق به
                ساخت مسجد جدید و دو طبقه شدند. این مسجد که با معماری زیبا و
                امکانات مناسب ساخته شده است، فضای مناسبی را برای برگزاری نمازهای
                جماعت، مراسمات مذهبی و فعالیت‌های فرهنگی فراهم کرده و به عنوان
                یکی از نمادهای مهم مذهبی و فرهنگی روستا محسوب می‌شود.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-r-4 border-green-600">
              <div className="flex items-start space-x-4 rtl:space-x-reverse mb-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <span className="text-3xl">📚</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                    پیگیری ساخت خانه عالم
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                هیئت امنای مسجد با پیگیری مستمر و تلاش برای توسعه زیرساخت‌های
                مذهبی و فرهنگی روستا، در حال پیگیری و اجرای پروژه ساخت خانه عالم
                هستند. این پروژه که نقش مهمی در توسعه فرهنگی و آموزشی روستا
                دارد، فضای مناسبی را برای فعالیت‌های مذهبی، آموزشی و فرهنگی
                فراهم خواهد کرد و به عنوان مرکزی برای آموزش و پرورش نسل جوان
                روستا عمل خواهد نمود.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-r-4 border-green-600">
              <div className="flex items-start space-x-4 rtl:space-x-reverse mb-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <span className="text-3xl">🍳</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                    ایجاد آشپزخانه و خرید تجهیزات
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                با کمک و مشارکت خیرین محترم، هیئت امنای مسجد موفق به ایجاد
                آشپزخانه مجهز و خرید تجهیزات لازم برای آن شده‌اند. این آشپزخانه
                که با امکانات مناسب و تجهیزات مدرن تجهیز شده است، امکان تهیه و
                توزیع غذا در مراسمات مذهبی، جشن‌ها و مناسبت‌های مختلف را فراهم
                کرده و نقش مهمی در برگزاری هرچه بهتر مراسمات و پذیرایی از
                مهمانان و شرکت‌کنندگان در مراسمات دارد.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            آماده بازدید از روستای قاضی هستید؟
          </h2>
          <p className="text-lg mb-8 text-green-100">
            برای اطلاعات بیشتر و هماهنگی بازدید با ما تماس بگیرید
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            تماس با ما
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

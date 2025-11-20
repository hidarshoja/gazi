import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { path: '/', label: 'صفحه اصلی' },
    { path: '/village-intro', label: 'معرفی روستا' },
    { path: '/scenic-areas', label: 'مناطق دیدنی' },
    { path: '/jobs', label: 'شغل‌ها' },
    { path: '/contact', label: 'ارتباط با ما' },
    { path: '/suggestions', label: 'نظرات و پیشنهادات' },
  ];

  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-green-400">درباره روستای قاضی</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              روستای قاضی از توابع دهستان گیفان، بخش گرمخان در شهرستان بجنورد استان خراسان شمالی است. 
              این روستا با تاریخ و فرهنگ غنی، طبیعت بکر و مهمان‌نوازی مردمش، میزبان گردشگران است.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-green-400">لینک‌های سریع</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-green-400">اطلاعات تماس</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex items-center space-x-2 rtl:space-x-reverse">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>021-12345678</span>
              </p>
              <p className="flex items-center space-x-2 rtl:space-x-reverse">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@gazi-village.ir</span>
              </p>
              <p className="flex items-center space-x-2 rtl:space-x-reverse">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>استان خراسان شمالی، شهرستان بجنورد، بخش گرمخان، دهستان گیفان</span>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} روستای قاضی. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { useState } from 'react';

const Suggestions = () => {
  const [formData, setFormData] = useState({
    category: '',
    subject: '',
    message: '',
    image: null
  });

  const [imagePreview, setImagePreview] = useState(null);

  const categories = [
    { value: 'agriculture', label: 'بخش کشاورزی' },
    { value: 'livestock', label: 'بخش دامداری' },
    { value: 'pilgrimage', label: 'زیارتی' },
    { value: 'recreation', label: 'تفریحی' },
    { value: 'village-council', label: 'دهیاری' },
    { value: 'islamic-council', label: 'شورای اسلامی' },
    { value: 'mosque', label: 'مسجد و امور مذهبی' },
    { value: 'infrastructure', label: 'زیرساخت و عمران' },
    { value: 'health', label: 'بهداشت و درمان' },
    { value: 'education', label: 'آموزش و پرورش' },
    { value: 'culture', label: 'فرهنگی و هنری' },
    { value: 'sports', label: 'ورزشی' },
    { value: 'environment', label: 'محیط زیست' },
    { value: 'other', label: 'سایر موارد' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file
      });

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setFormData({
      ...formData,
      image: null
    });
    setImagePreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a server
    // For now, we'll just show an alert
    const formDataToSend = new FormData();
    formDataToSend.append('category', formData.category);
    formDataToSend.append('subject', formData.subject);
    formDataToSend.append('message', formData.message);
    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }

    alert('نظر و پیشنهاد شما با موفقیت ارسال شد!');
    
    // Reset form
    setFormData({
      category: '',
      subject: '',
      message: '',
      image: null
    });
    setImagePreview(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            نظرات و پیشنهادات
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نظرات، پیشنهادات و انتقادات خود را با ما در میان بگذارید. ما از ایده‌ها و نظرات شما استقبال می‌کنیم
          </p>
        </div>

        {/* Form Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Category Select */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  بخش مربوطه <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-gray-800"
                >
                  <option value="">لطفاً بخش مربوطه را انتخاب کنید</option>
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  موضوع <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="موضوع نظر یا پیشنهاد خود را وارد کنید"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  متن نظر یا پیشنهاد <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="8"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  placeholder="نظر، پیشنهاد یا انتقاد خود را به صورت کامل بنویسید..."
                ></textarea>
              </div>

              {/* Image Upload */}
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                  تصویر (اختیاری)
                </label>
                <div className="space-y-4">
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="image"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-10 h-10 mb-3 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">برای آپلود کلیک کنید</span> یا فایل را اینجا بکشید
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG یا GIF (حداکثر 5MB)</p>
                      </div>
                      <input
                        id="image"
                        name="image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Image Preview */}
                  {imagePreview && (
                    <div className="relative">
                      <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">پیش‌نمایش تصویر:</span>
                          <button
                            type="button"
                            onClick={handleRemoveImage}
                            className="text-red-600 hover:text-red-700 text-sm font-medium"
                          >
                            حذف تصویر
                          </button>
                        </div>
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="max-w-full h-auto max-h-64 rounded-lg mx-auto"
                        />
                        {formData.image && (
                          <p className="text-xs text-gray-500 mt-2 text-center">
                            {formData.image.name} ({(formData.image.size / 1024).toFixed(2)} KB)
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
                >
                  ارسال نظر و پیشنهاد
                </button>
              </div>

              {/* Note */}
              <div className="bg-blue-50 border-r-4 border-blue-400 p-4 rounded">
                <p className="text-sm text-blue-800">
                  <strong>توجه:</strong> تمامی نظرات و پیشنهادات شما بررسی شده و در صورت نیاز، اقدامات لازم انجام خواهد شد.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;


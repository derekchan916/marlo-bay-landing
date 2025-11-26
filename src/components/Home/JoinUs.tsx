export default function JoinUs() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-stone-100 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 md:p-12">
            {/* Left Column - Text and Buttons */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6 leading-tight">
                Ready to{" "}
                <span className="font-bold text-gray-900">Maximize your</span>{" "}
                Business Value?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Get in touch with our M&A experts to start your journey to a
                faster, more valuable exit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Meet Advisor
                </button>
                <button className="px-6 py-3 bg-white border-2 border-black text-black rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Find Buyers
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative w-full aspect-4/5 rounded-lg overflow-hidden border-2 border-stone-200">
                {/* Placeholder for image - will be replaced later */}
                <div className="w-full h-full bg-stone-200 flex items-center justify-center">
                  <p className="text-gray-400">Image placeholder</p>
                </div>
                {/* Notification pop-up overlay */}
                <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-[200px] border border-stone-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-lg">$</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">
                        Congratulations, Jack!
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        You&rsquo;ve just sold your business
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

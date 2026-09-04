import React, { useState } from 'react';
import { X, Send, CheckCircle2, Film } from 'lucide-react';

interface RequestMovieModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'bn';
}

export const RequestMovieModal: React.FC<RequestMovieModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [movieName, setMovieName] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [preferredQuality, setPreferredQuality] = useState('1080p');
  const [preferredAudio, setPreferredAudio] = useState('Hindi');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!movieName.trim()) return;

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setMovieName('');
      setReleaseYear('');
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#14171f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto">
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#171b24]">
          <div className="flex items-center gap-2.5">
            <Film className="w-5 h-5 text-[#00c0f9]" />
            <h2 className="text-base sm:text-lg font-bold text-white">
              {language === 'bn' ? 'মুভির জন্য রিকোয়েস্ট করুন' : 'Request a Movie'}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-base font-bold text-white">
                {language === 'bn' ? 'রিকোয়েস্ট গ্রহণ করা হয়েছে!' : 'Request Received!'}
              </h3>
              <p className="text-xs text-slate-300 max-w-xs mx-auto">
                {language === 'bn'
                  ? 'আপনার অনুরোধকৃত মুভিটি শীঘ্রই পোর্টালে যুক্ত করা হবে।'
                  : 'We will upload and index your requested title within 24 hours.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {language === 'bn' ? 'মুভি বা সিরিজের নাম *' : 'Movie or Series Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={movieName}
                  onChange={(e) => setMovieName(e.target.value)}
                  placeholder={language === 'bn' ? 'উদাঃ জওয়ান ২, কল্কি...' : 'e.g., Jawan, Shaitaan, Pushpa...'}
                  className="w-full bg-[#1b2029] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00c0f9]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {language === 'bn' ? 'মুক্তির সাল (ঐচ্ছিক)' : 'Release Year'}
                  </label>
                  <input
                    type="number"
                    value={releaseYear}
                    onChange={(e) => setReleaseYear(e.target.value)}
                    placeholder="2024"
                    className="w-full bg-[#1b2029] border border-white/10 rounded-lg px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00c0f9]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {language === 'bn' ? 'পছন্দের অডিও' : 'Preferred Audio'}
                  </label>
                  <select
                    value={preferredAudio}
                    onChange={(e) => setPreferredAudio(e.target.value)}
                    className="w-full bg-[#1b2029] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00c0f9]"
                  >
                    <option value="Hindi Org">Hindi Original</option>
                    <option value="Hindi Dubbed">Hindi Dubbed</option>
                    <option value="Dual Audio">Dual Audio (Hindi + Eng)</option>
                    <option value="Bengali Dubbed">Bengali Dubbed</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {language === 'bn' ? 'পছন্দের রেজোলিউশন' : 'Target Resolution'}
                </label>
                <div className="flex gap-2">
                  {['480p', '720p', '1080p', '4K UHD'].map((q) => (
                    <button
                      type="button"
                      key={q}
                      onClick={() => setPreferredQuality(q)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                        preferredQuality === q
                          ? 'bg-[#00c0f9] text-slate-950 border-[#00c0f9] font-bold'
                          : 'bg-[#1b2029] text-slate-300 border-white/5 hover:border-white/20'
                      }`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#00c0f9] hover:bg-[#00ade0] active:scale-[0.99] text-slate-950 font-bold rounded-lg text-sm transition-all shadow-lg shadow-[#00c0f9]/20 flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Send className="w-4 h-4" />
                <span>{language === 'bn' ? 'রিকোয়েস্ট পাঠান' : 'Submit Movie Request'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

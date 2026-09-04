import React, { useState } from 'react';
import {
  X,
  Smartphone,
  CheckCircle2,
  Copy,
  ExternalLink,
  ShieldCheck,
  Zap,
  Layers,
  Code2,
  Terminal,
  Play,
  Sparkles,
  Globe,
  Cloud,
  ArrowRight,
} from 'lucide-react';
import { START_IO_APP_ID, isAndroidNativeApp, triggerRealInterstitial } from '../services/startIoBridge';

interface AndroidBuildModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: 'en' | 'bn';
}

export const AndroidBuildModal: React.FC<AndroidBuildModalProps> = ({
  isOpen,
  onClose,
  language = 'en',
}) => {
  const [copiedTab, setCopiedTab] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'nocode' | 'github' | 'guide' | 'manifest' | 'gradle' | 'activity'>('nocode');
  const [interstitialTestState, setInterstitialTestState] = useState<string | null>(null);

  if (!isOpen) return null;

  const isNative = isAndroidNativeApp();
  const liveAppUrl = window.location.origin;

  const handleCopy = (text: string, tabId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTab(tabId);
    setTimeout(() => setCopiedTab(null), 2500);
  };

  const handleTestInterstitial = () => {
    const success = triggerRealInterstitial();
    if (success) {
      setInterstitialTestState(language === 'bn' ? 'আসল Start.io বিজ্ঞাপন ট্রিগার হয়েছে!' : 'Real Start.io Ad triggered!');
    } else {
      setInterstitialTestState(
        language === 'bn'
          ? 'ব্রাউজারে ডেমো মোডে আছে। APK তে ইনস্টল করার পর লাইভ বিজ্ঞাপন আসবে।'
          : 'Running in Web Browser mode. Real ad will display inside the compiled Android APK.'
      );
    }
    setTimeout(() => setInterstitialTestState(null), 4000);
  };

  const manifestSnippet = `<!-- AndroidManifest.xml (inside <application>) -->
<meta-data
    android:name="com.startapp.sdk.APPLICATION_ID"
    android:value="${START_IO_APP_ID}" />

<meta-data
    android:name="com.startapp.sdk.RETURN_ADS_ENABLED"
    android:value="true" />`;

  const gradleSnippet = `// android/app/build.gradle
dependencies {
    implementation 'com.startapp.sdk:ads:5.1.0'
}`;

  const activitySnippet = `// MainActivity.java
package com.cineflix.movies.app;
import com.getcapacitor.BridgeActivity;
import com.startapp.sdk.adsbase.StartAppSDK;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        StartAppSDK.init(this, "${START_IO_APP_ID}", false);
        StartAppSDK.enableReturnAds(true);
    }
}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div
        className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00c0f9] to-cyan-400 p-0.5 flex items-center justify-center shadow-lg shadow-[#00c0f9]/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-[#00c0f9]" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/pwa-192x192.png"
                alt="DSP Reviews"
                className="w-10 h-10 rounded-full border border-red-500/50 shadow-md object-contain"
              />
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>DSP Reviews</span>
                  <span className="text-[11px] bg-red-500/20 text-red-400 border border-red-500/40 px-2 py-0.5 rounded-full font-mono font-semibold">
                    com.dsp.reviews
                  </span>
                </h2>
                <p className="text-xs text-slate-400 flex items-center gap-2">
                  <span>Start.io App ID: <span className="font-mono text-[#00c0f9]">{START_IO_APP_ID}</span></span>
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current Environment Badge */}
        <div className="px-5 py-3 bg-slate-950/40 border-b border-slate-800/80 flex items-center justify-between flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-medium">
              {language === 'bn' ? 'বর্তমান অবস্থা:' : 'Current Status:'}
            </span>
            {isNative ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {language === 'bn' ? 'রিয়েল Android APK মোড সক্রিয়' : 'Live Android APK Mode Active'}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                {language === 'bn' ? 'ওয়েব প্রিভিউ মোড (সিমুলেশন)' : 'Web Preview Mode (Simulation)'}
              </span>
            )}
          </div>

          <button
            onClick={handleTestInterstitial}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#00c0f9] text-slate-950 font-bold hover:bg-cyan-300 transition-colors shadow-sm text-xs"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            {language === 'bn' ? 'টেস্ট অ্যাড চালু করুন' : 'Test Full Ad'}
          </button>
        </div>

        {interstitialTestState && (
          <div className="px-5 py-2 bg-cyan-950/60 border-b border-cyan-800/50 text-xs text-cyan-300 flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#00c0f9] flex-shrink-0 animate-bounce" />
            <span>{interstitialTestState}</span>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-800 px-5 pt-3 gap-2 bg-slate-950/20 text-xs font-semibold overflow-x-auto">
          <button
            onClick={() => setActiveTab('nocode')}
            className={`pb-2.5 px-3 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'nocode'
                ? 'border-emerald-400 text-emerald-400 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            {language === 'bn' ? '⭐ কোনো কোডিং ছাড়া APK' : '⭐ Zero-Code Instant APK'}
          </button>
          <button
            onClick={() => setActiveTab('github')}
            className={`pb-2.5 px-3 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'github'
                ? 'border-[#00c0f9] text-[#00c0f9]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Cloud className="w-3.5 h-3.5" />
            {language === 'bn' ? 'অটো ক্লাউড APK (GitHub)' : 'Auto Cloud APK (GitHub)'}
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`pb-2.5 px-3 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'guide'
                ? 'border-[#00c0f9] text-[#00c0f9]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            {language === 'bn' ? 'Android Studio গাইড' : 'Android Studio Guide'}
          </button>
          <button
            onClick={() => setActiveTab('manifest')}
            className={`pb-2.5 px-3 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'manifest'
                ? 'border-[#00c0f9] text-[#00c0f9]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            AndroidManifest.xml
          </button>
          <button
            onClick={() => setActiveTab('gradle')}
            className={`pb-2.5 px-3 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'gradle'
                ? 'border-[#00c0f9] text-[#00c0f9]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            build.gradle
          </button>
          <button
            onClick={() => setActiveTab('activity')}
            className={`pb-2.5 px-3 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'activity'
                ? 'border-[#00c0f9] text-[#00c0f9]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            MainActivity.java
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1 text-sm">
          {/* TAB 1: ZERO-CODE INSTANT APK (EASIEST FOR NON-DEVELOPERS) */}
          {activeTab === 'nocode' && (
            <div className="space-y-4 text-slate-300">
              <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-950/50 to-slate-900 border border-emerald-500/40 space-y-3 shadow-lg">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm sm:text-base">
                  <Sparkles className="w-5 h-5 flex-shrink-0" />
                  <span>
                    {language === 'bn'
                      ? 'কোনো কোডিং লাগবে না — ১ ক্লিকে মোবাইল থেকেই APK ডাউনলোড করুন!'
                      : 'Zero Coding Required — Generate APK directly from browser!'}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {language === 'bn'
                    ? 'আপনার পিসিতে Android Studio বা কোনো কোডিং জানা লাগবে না। নিচের ৩টি ধাপ অনুসরণ করুন এবং সাথে সাথে আপনার ফোনের জন্য প্রস্তুত .apk পেয়ে যান:'
                    : 'You do not need Android Studio or any coding knowledge. Follow these 3 simple steps to get an installable .apk in 1 minute:'}
                </p>
              </div>

              {/* Step 1: Copy Live Link */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-white font-bold flex items-center gap-2 text-xs sm:text-sm">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-mono">
                      ১
                    </span>
                    {language === 'bn' ? 'আপনার অ্যাপের লাইভ ওয়েবসাইট লিংক কপি করুন' : 'Copy your Live App URL'}
                  </h4>
                  <button
                    onClick={() => handleCopy(liveAppUrl, 'app-url')}
                    className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 transition-all cursor-pointer"
                  >
                    {copiedTab === 'app-url' ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    {copiedTab === 'app-url' ? (language === 'bn' ? 'কপি হয়েছে!' : 'Copied!') : (language === 'bn' ? 'কপি লিংক' : 'Copy URL')}
                  </button>
                </div>
                <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 break-all select-all flex items-center justify-between gap-2">
                  <span>{liveAppUrl}</span>
                </div>
              </div>

              {/* Step 2: App Identity & Package Details */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-white font-bold flex items-center gap-2 text-xs sm:text-sm">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-mono">
                      ২
                    </span>
                    {language === 'bn' ? 'আপনার সেট করা প্যাকেজ ও অ্যাপ ডিটেইলস' : 'Configured Package & App Details'}
                  </h4>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Ready
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img src="/pwa-192x192.png" alt="Logo" className="w-8 h-8 rounded-full border border-red-500/40" />
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase font-semibold">App Name</div>
                        <div className="text-white font-bold">DSP Reviews</div>
                      </div>
                    </div>
                    <a
                      href="/pwa-512x512.png"
                      download="dsp-reviews-logo.png"
                      className="text-[11px] text-[#00c0f9] hover:underline"
                    >
                      {language === 'bn' ? 'লোগো ডাউনলোড' : 'Save Logo'}
                    </a>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Package ID (Android)</div>
                      <div className="font-mono text-red-400 font-bold">com.dsp.reviews</div>
                    </div>
                    <button
                      onClick={() => handleCopy('com.dsp.reviews', 'pkg')}
                      className="text-[11px] text-[#00c0f9] hover:underline cursor-pointer"
                    >
                      {copiedTab === 'pkg' ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>

                {/* SPECIAL HIGHLIGHT: Webintoapp [ZIP] METHOD TO AVOID URL 404 */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-950/60 to-slate-900 border border-[#00c0f9]/40 space-y-2.5 shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#00c0f9] font-bold text-xs sm:text-sm">
                      <Layers className="w-4 h-4 flex-shrink-0" />
                      <span>
                        {language === 'bn'
                          ? 'Webintoapp-এ "Error: Page not found" সমাধান (ZIP মেথড)'
                          : 'Webintoapp "Error: Page not found" Fix (ZIP Method)'}
                      </span>
                    </div>
                    <span className="text-[10px] uppercase font-bold bg-[#00c0f9]/20 text-[#00c0f9] px-2 py-0.5 rounded">
                      100% Guaranteed
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {language === 'bn'
                      ? 'আপনার স্ক্রিনশটের পেজে (Webintoapp) Template অপশনে [ URL ]-এর বদলে ঠিক পাশের [ ZIP ] ট্যাবে ক্লিক করুন। নিচের বাটন থেকে তৈরি করা সম্পূর্ণ রেডি ZIP ফাইলটি ডাউনলোড করে সেখানে আপলোড করে দিন — কোনো লিংক বা সার্ভার ছাড়াই ১ ক্লিকে সাথে সাথে APK তৈরি হয়ে যাবে!'
                      : 'On Webintoapp, click the [ ZIP ] tab instead of [ URL ]. Download the ready ZIP file below and upload it — your APK will build immediately without any 404 URL error!'}
                  </p>
                  <div className="pt-1 flex flex-wrap gap-2">
                    <a
                      href="/dsp-reviews-app.zip"
                      download="dsp-reviews-app.zip"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg transition-all"
                    >
                      <Download className="w-4 h-4" />
                      <span>{language === 'bn' ? '১ ক্লিকে dsp-reviews-app.zip ডাউনলোড করুন' : 'Download dsp-reviews-app.zip'}</span>
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <a
                    href="https://www.webintoapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-[#00c0f9]/50 transition-all group"
                  >
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-white group-hover:text-[#00c0f9] flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-[#00c0f9]" />
                        Webintoapp (আপনার স্ক্রিনশটের ওয়েবসাইট)
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {language === 'bn' ? '[ ZIP ] অপশন দিয়ে অ্যাপ বানান' : 'Use the [ ZIP ] tab for instant APK'}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                  </a>

                  <a
                    href="https://appsgeyser.com/create-url-app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-emerald-500/50 transition-all group"
                  >
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-white group-hover:text-emerald-400 flex items-center gap-1.5">
                        <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                        AppsGeyser (বিকল্প অনলাইন কনভার্টার)
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {language === 'bn' ? 'URL দিয়ে সরাসরি তৈরি করার ওয়েবসাইট' : 'Alternative direct APK maker'}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>

              {/* Step 3: Install on Android Phone */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <h4 className="text-white font-bold flex items-center gap-2 text-xs sm:text-sm">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-mono">
                    ৩
                  </span>
                  {language === 'bn' ? 'ডাউনলোড করে ফোনে ইন্সটল করুন' : 'Download and Install on Android'}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {language === 'bn'
                    ? 'ডাউনলোড হওয়া .apk ফাইলটি আপনার ফোনে পাঠিয়ে ইনস্টল করলেই কাজ শেষ! অ্যাপে অটোমেটিকভাবে Start.io ব্যানার ও ফুল-স্ক্রিন বিজ্ঞাপন চালু হয়ে যাবে এবং আপনার একাউন্টে ইনকাম হবে।'
                    : 'Transfer the .apk to your phone and install. Your Start.io App ID 203877183 ads will begin running and earning revenue automatically.'}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: GITHUB ACTIONS CLOUD BUILD */}
          {activeTab === 'github' && (
            <div className="space-y-4 text-slate-300">
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-[#00c0f9] font-bold text-sm">
                  <Cloud className="w-4 h-4" />
                  <span>
                    {language === 'bn'
                      ? 'অটোমেটিক ক্লাউড APK বিল্ড (GitHub Actions)'
                      : 'Automatic Cloud APK Build (GitHub Actions)'}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {language === 'bn'
                    ? 'আপনার পিসিতে কোনো সফটওয়্যার বা অ্যান্ড্রয়েড স্টুডিও লাগবে না। GitHub-এর ক্লাউড সার্ভার স্বয়ংক্রিয়ভাবে APK বিল্ড করে ডাউনলোড লিংক বানিয়ে দেবে।'
                    : 'No local software or Android Studio needed. GitHub cloud servers will build the APK automatically for you.'}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <h4 className="text-white font-bold flex items-center gap-2 text-xs sm:text-sm">
                  <span className="w-5 h-5 rounded-full bg-[#00c0f9]/20 text-[#00c0f9] flex items-center justify-center text-xs">
                    ১
                  </span>
                  {language === 'bn' ? 'প্রোজেক্টটি GitHub এ এক্সপোর্ট করুন' : 'Export to GitHub'}
                </h4>
                <p className="text-xs text-slate-400">
                  {language === 'bn'
                    ? 'AI Studio-র উপরের ডানদিকের Settings/Export মেনু থেকে "Export to GitHub" এ ক্লিক করে আপনার GitHub একাউন্টে কোডটি পাঠান।'
                    : 'Click Settings/Export at the top right of AI Studio, choose "Export to GitHub".'}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <h4 className="text-white font-bold flex items-center gap-2 text-xs sm:text-sm">
                  <span className="w-5 h-5 rounded-full bg-[#00c0f9]/20 text-[#00c0f9] flex items-center justify-center text-xs">
                    ২
                  </span>
                  {language === 'bn' ? 'GitHub Actions ট্যাবে গিয়ে APK ডাউনলোড করুন' : 'Download APK from Actions Tab'}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {language === 'bn'
                    ? 'আপনার GitHub রিপোজিটরির "Actions" ট্যাবে গেলে দেখবেন "Build Android APK" অটোমেটিকভাবে বিল্ড হচ্ছে। ২ মিনিট পর "Artifacts" সেকশন থেকে সরাসরি "DSP-Reviews-StartIo-debug.apk" ডাউনলোড করে নিন।'
                    : 'In your GitHub repository, open the "Actions" tab. The pre-configured workflow will compile the APK. Download DSP-Reviews-StartIo-debug.apk directly from Artifacts.'}
                </p>
              </div>
            </div>
          )}
          {activeTab === 'guide' && (
            <div className="space-y-4 text-slate-300">
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <h4 className="text-white font-bold flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#00c0f9]/20 text-[#00c0f9] flex items-center justify-center text-xs">
                    ১
                  </span>
                  {language === 'bn' ? 'কোড ডাউনলোড করুন' : 'Export & Clone Project'}
                </h4>
                <p className="text-xs text-slate-400">
                  {language === 'bn'
                    ? 'AI Studio-র উপরের ডানদিকের Settings মেনু থেকে "Export to ZIP" বা "Export to GitHub" এ ক্লিক করে আপনার কম্পিউটারে ডাউনলোড করুন।'
                    : 'Click Settings/Export at top right in AI Studio, choose "Export to ZIP" or GitHub.'}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-white font-bold flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#00c0f9]/20 text-[#00c0f9] flex items-center justify-center text-xs">
                      ২
                    </span>
                    {language === 'bn' ? 'Capacitor Android কমান্ড রান করুন' : 'Run Capacitor Commands'}
                  </h4>
                  <button
                    onClick={() =>
                      handleCopy(
                        'npm install\nnpm run build\nnpx cap add android\nnpx cap copy\nnpx cap open android',
                        'cmd'
                      )
                    }
                    className="text-[11px] text-[#00c0f9] flex items-center gap-1 hover:underline"
                  >
                    {copiedTab === 'cmd' ? (
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                    {copiedTab === 'cmd' ? 'Copied' : 'Copy Commands'}
                  </button>
                </div>
                <div className="bg-slate-950 rounded-lg p-2.5 font-mono text-xs text-emerald-400 border border-slate-800/80 space-y-1">
                  <div>npm install</div>
                  <div>npm run build</div>
                  <div>npx cap add android</div>
                  <div>npx cap copy</div>
                  <div>npx cap open android</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <h4 className="text-white font-bold flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#00c0f9]/20 text-[#00c0f9] flex items-center justify-center text-xs">
                    ৩
                  </span>
                  {language === 'bn' ? 'Android Studio তে APK বিল্ড করুন' : 'Build APK in Android Studio'}
                </h4>
                <p className="text-xs text-slate-400">
                  {language === 'bn'
                    ? 'Android Studio ওপেন হলে মেনু থেকে Build > Build Bundle(s) / APK(s) > Build APK(s) চাপুন। ফোনে ইনস্টল করলেই আপনার Start.io ID 203877183 দিয়ে রিয়েল বিজ্ঞাপন লোড হবে এবং আপনার publisher.start.io অ্যাকাউন্টে আয় জমা হবে।'
                    : 'In Android Studio, click Build > Build Bundle(s) / APK(s) > Build APK(s). Once installed on your phone, real live ads will automatically serve through Start.io App ID 203877183!'}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'manifest' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>{language === 'bn' ? 'AndroidManifest.xml এর <application> ট্যাগে রাখুন:' : 'Add inside <application> in AndroidManifest.xml:'}</span>
                <button
                  onClick={() => handleCopy(manifestSnippet, 'manifest')}
                  className="text-[#00c0f9] flex items-center gap-1 font-semibold hover:underline"
                >
                  {copiedTab === 'manifest' ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  {copiedTab === 'manifest' ? 'Copied' : 'Copy Snippet'}
                </button>
              </div>
              <pre className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-cyan-300 overflow-x-auto whitespace-pre">
                {manifestSnippet}
              </pre>
            </div>
          )}

          {activeTab === 'gradle' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>{language === 'bn' ? 'android/app/build.gradle ফাইলে যোগ করুন:' : 'Add inside android/app/build.gradle:'}</span>
                <button
                  onClick={() => handleCopy(gradleSnippet, 'gradle')}
                  className="text-[#00c0f9] flex items-center gap-1 font-semibold hover:underline"
                >
                  {copiedTab === 'gradle' ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  {copiedTab === 'gradle' ? 'Copied' : 'Copy Snippet'}
                </button>
              </div>
              <pre className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-cyan-300 overflow-x-auto whitespace-pre">
                {gradleSnippet}
              </pre>
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>MainActivity.java (StartAppSDK.init):</span>
                <button
                  onClick={() => handleCopy(activitySnippet, 'activity')}
                  className="text-[#00c0f9] flex items-center gap-1 font-semibold hover:underline"
                >
                  {copiedTab === 'activity' ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  {copiedTab === 'activity' ? 'Copied' : 'Copy Snippet'}
                </button>
              </div>
              <pre className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-cyan-300 overflow-x-auto whitespace-pre">
                {activitySnippet}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between flex-wrap gap-2">
          <a
            href="https://publisher.start.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#00c0f9] hover:underline flex items-center gap-1"
          >
            publisher.start.io Dashboard
            <ExternalLink className="w-3 h-3" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors"
          >
            {language === 'bn' ? 'বুঝেছি (বন্ধ করুন)' : 'Got it (Close)'}
          </button>
        </div>
      </div>
    </div>
  );
};

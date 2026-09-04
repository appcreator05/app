# CineFlix Android APK Build & Start.io Real Ads Guide
**Start.io App ID:** `203877183`

---

## 🇧🇩 বাংলা গাইড: কোনো কোডিং না জেনেও যেভাবে APK বানাবেন (৩টি সহজ উপায়)

আপনি যদি Android Studio বা কোডিং না জানেন, তাহলেও কোনো সমস্যা নেই! নিচে যেকোনো একটি উপায় বেছে নিন:

---

### 🌟 পদ্ধতি ১ (সবচেয়ে সহজ - ১ ক্লিকে মোবাইল বা কম্পিউটার থেকে অনলাইন APK):
**কোনো সফটওয়্যার ডাউনলোড বা কোডিং করতে হবে না!**
1. আপনার লাইভ অ্যাপের ওয়েব লিংক কপি করুন:
   `https://ais-pre-d2cad7hlh2xopcos5f3i7f-710553139602.asia-southeast1.run.app`
2. যেকোনো একটি ফ্রি অনলাইন Web-to-APK সাইটে যান:
   - **PWABuilder** (Microsoft এর অফিশিয়াল ও ফ্রি): [pwabuilder.com](https://www.pwabuilder.com)
   - **AppsGeyser**: [appsgeyser.com](https://appsgeyser.com)
   - **Web2App**: [web2app.org](https://web2app.org)
3. আপনার অ্যাপ লিংকটি বক্সে পেস্ট করে **"Build APK"** বা **"Download App"** চাপুন।
4. ব্যস! ১ মিনিটের মধ্যে সরাসরি ফোনে ইনস্টল করার `.apk` ফাইল ডাউনলোড হয়ে যাবে।

---

### 🌟 পদ্ধতি ২ (অটোমেটিক ক্লাউড APK - GitHub Actions):
**আপনার কম্পিউটারে Android Studio ইনস্টল করতে হবে না!**
1. AI Studio-র উপরের ডানদিকের Settings/Export মেনু থেকে **Export to GitHub** এ ক্লিক করুন।
2. আপনার GitHub রিপোজিটরির **Actions** ট্যাবে যান।
3. সেখানে ইতিমধ্যে আমাদের সেট করা `Build Android APK` স্বয়ংক্রিয়ভাবে ক্লাউডে চলবে এবং কয়েক মিনিটের মধ্যে সরাসরি ডাউনলোডযোগ্য **`CineFlix-Movies-StartIo-debug.apk`** ফাইল বানিয়ে দেবে!
4. ডাউনলোড করে আপনার ফোনে ইনস্টল করে নিন।

---

### 🌟 পদ্ধতি ৩ (Android Studio - কোডিং ছাড়া শুধু মাউস ক্লিকে):
**সব কোড ইতিমধ্যে আমরা লিখে রেখেছি, আপনার কোনো কোড লিখতে হবে না!**
1. AI Studio থেকে **Export to ZIP** করে কম্পিউটারে আনজিপ করুন।
2. টার্মিনালে এই ৪টি লাইন পেস্ট করুন:
   ```bash
   npm install
   npm run build
   npx cap add android
   npx cap copy
   ```
3. `android-setup/` ফোল্ডারের ফাইলগুলো `android/app/src/main/` এ পেস্ট করুন:
   - `android-setup/AndroidManifest.xml` -> `android/app/src/main/AndroidManifest.xml`
   - `android-setup/MainActivity.java` -> `android/app/src/main/java/com/cineflix/movies/app/MainActivity.java`
   - `android/app/build.gradle`-এ `implementation 'com.startapp.sdk:ads:5.1.0'` যোগ করুন।
4. Android Studio ওপেন হলে মেনুবারে গিয়ে শুধু ক্লিক করুন:
   **Build > Build Bundle(s) / APK(s) > Build APK(s)**
5. আপনার ফোনে ইনস্টল করলেই Start.io App ID: **`203877183`** দিয়ে রিয়েল লাইভ বিজ্ঞাপন চালু হয়ে যাবে।

---

## 🇬🇧 English: 3 Ways to Get Your APK Without Coding

1. **Option 1 (Instant Online APK)**:
   - Open [pwabuilder.com](https://www.pwabuilder.com) or [appsgeyser.com](https://appsgeyser.com)
   - Paste your live URL: `https://ais-pre-d2cad7hlh2xopcos5f3i7f-710553139602.asia-southeast1.run.app`
   - Download the generated `.apk` directly to your phone.

2. **Option 2 (GitHub Actions Cloud Build)**:
   - Export to GitHub via AI Studio menu.
   - Go to GitHub Actions tab -> The automated APK build will run in the cloud.
   - Download `CineFlix-Movies-StartIo-debug.apk` directly from Artifacts.

3. **Option 3 (Android Studio - No Code)**:
   - Run the 4 setup commands.
   - Open Android Studio and click **Build > Build APK(s)**. No coding is needed!

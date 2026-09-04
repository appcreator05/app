// Native Bridge for Start.io Android SDK Integration
// App ID: 203877183

export const START_IO_APP_ID = '203877183';

declare global {
  interface Window {
    AndroidStartIo?: {
      isRealSdkReady?: () => boolean;
      getAppId?: () => string;
      showInterstitial?: () => void;
      showRewardedAd?: () => void;
      loadNativeAd?: (placement: string) => void;
      trackImpression?: (placement: string) => void;
    };
  }
}

export function isAndroidNativeApp(): boolean {
  return typeof window !== 'undefined' && Boolean(window.AndroidStartIo);
}

export function isRealStartIoSdkReady(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return Boolean(window.AndroidStartIo?.isRealSdkReady?.());
  } catch {
    return false;
  }
}

export function triggerRealInterstitial(): boolean {
  if (typeof window === 'undefined') return false;
  if (window.AndroidStartIo?.showInterstitial) {
    try {
      window.AndroidStartIo.showInterstitial();
      return true;
    } catch (e) {
      console.warn('Start.io Native Interstitial error:', e);
    }
  }
  return false;
}

export function reportStartIoImpression(placement: string): void {
  if (typeof window !== 'undefined' && window.AndroidStartIo?.trackImpression) {
    try {
      window.AndroidStartIo.trackImpression(placement);
    } catch (e) {
      console.warn('Start.io impression tracking error:', e);
    }
  }
}

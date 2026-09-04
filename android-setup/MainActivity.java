package com.dsp.reviews;

import android.os.Bundle;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.widget.Toast;
import com.getcapacitor.BridgeActivity;
import com.startapp.sdk.adsbase.StartAppAd;
import com.startapp.sdk.adsbase.StartAppSDK;

public class MainActivity extends BridgeActivity {

    private static final String START_IO_APP_ID = "203877183";
    private StartAppAd startAppAd;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // 1. Initialize Start.io SDK with your App ID
        StartAppSDK.init(this, START_IO_APP_ID, false);
        StartAppSDK.enableReturnAds(true);

        // 2. Pre-load an interstitial ad for smooth experience
        startAppAd = new StartAppAd(this);
        startAppAd.loadAd();

        // 3. Expose JavaScript interface so the React App communicates directly with Real Start.io SDK
        try {
            WebView webView = getBridge().getWebView();
            webView.addJavascriptInterface(new Object() {

                @JavascriptInterface
                public boolean isRealSdkReady() {
                    return true;
                }

                @JavascriptInterface
                public String getAppId() {
                    return START_IO_APP_ID;
                }

                @JavascriptInterface
                public void showInterstitial() {
                    runOnUiThread(() -> {
                        if (startAppAd != null) {
                            startAppAd.showAd();
                            startAppAd.loadAd(); // Reload for next time
                        } else {
                            StartAppAd.showAd(MainActivity.this);
                        }
                    });
                }

                @JavascriptInterface
                public void trackImpression(String placement) {
                    // Start.io handles impression reporting automatically
                }

            }, "AndroidStartIo");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void onBackPressed() {
        if (startAppAd != null) {
            startAppAd.onBackPressed();
        }
        super.onBackPressed();
    }
}

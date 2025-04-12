window.OneSignalDeferred = window.OneSignalDeferred || [];
OneSignalDeferred.push(async function (OneSignal) {
    await OneSignal.init({
        appId: "8279bc50-2fb0-466b-a5eb-1661b14022a2",
        safari_web_id: "web.onesignal.auto.4f832ce8-c167-4c63-9514-5546a8912edb",
        notifyButton: {
            enable: true,
        },
    });
});
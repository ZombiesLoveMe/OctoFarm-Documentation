/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "29b81f141c1275fbbf9dcef0937f9683"
  },
  {
    "url": "api/index.html",
    "revision": "0ed792ceee6a0ff13eb5b36861438e55"
  },
  {
    "url": "assets/css/0.styles.48e8e2bb.css",
    "revision": "ef823d7451e7e646b0185fa4f940f3f2"
  },
  {
    "url": "assets/img/gotify-example.60f15769.png",
    "revision": "60f15769f81ec8cd3236591f6dc84529"
  },
  {
    "url": "assets/img/octoprint-cors.9615af97.png",
    "revision": "9615af97e5caaac9ad2195545ead330a"
  },
  {
    "url": "assets/img/power-psucontrol.4bc2814f.png",
    "revision": "4bc2814f821c75f31d945f0c49a0ebd7"
  },
  {
    "url": "assets/img/power-tasmota.56cf72cb.png",
    "revision": "56cf72cb12e8d84e404305a6960198b5"
  },
  {
    "url": "assets/img/power-tplink.03283c4e.png",
    "revision": "03283c4e61a6178cb57337c282191ac1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.261f954b.js",
    "revision": "1153d8ca73d80c297ad815af94b9083f"
  },
  {
    "url": "assets/js/11.a44fc9fd.js",
    "revision": "4d29b8b289c2c14bdfcbc42179e582e3"
  },
  {
    "url": "assets/js/12.5fdd8fb8.js",
    "revision": "83dc6fb401f053d8018bcf0a392778d4"
  },
  {
    "url": "assets/js/13.73ec3a66.js",
    "revision": "313699d6b95260cdb7b9c1cf83d3cc0f"
  },
  {
    "url": "assets/js/14.daa3f4a0.js",
    "revision": "c8ce426f2657bf4249e48a15ac0ee436"
  },
  {
    "url": "assets/js/15.6a45dbd6.js",
    "revision": "b61fb723fec1c5a5f7d069a2841ff7a7"
  },
  {
    "url": "assets/js/16.955128cb.js",
    "revision": "13f09aac88cca7eaddb4a5a7495efbc1"
  },
  {
    "url": "assets/js/17.19f24dc8.js",
    "revision": "0d7f9383c83d42a1feddcab7c55c1883"
  },
  {
    "url": "assets/js/18.b6d39cc0.js",
    "revision": "7fa5d9c94d7efd160e99564e374022de"
  },
  {
    "url": "assets/js/19.5c66b6cf.js",
    "revision": "75b1292261fe7cb843bcd7d8e7acdb86"
  },
  {
    "url": "assets/js/2.965b894a.js",
    "revision": "f504031d64ab18c8c83edb62aaa17c32"
  },
  {
    "url": "assets/js/20.5c3d0d74.js",
    "revision": "08e31addf036394cb0dc4ec470d962f1"
  },
  {
    "url": "assets/js/21.3e9335c4.js",
    "revision": "c76abec8099e927e5791e099b123657c"
  },
  {
    "url": "assets/js/22.a5b45674.js",
    "revision": "446a7f438923ec23afea93a588774c5f"
  },
  {
    "url": "assets/js/23.4a886ec7.js",
    "revision": "a61b8fc1c4810f4954e41db8c85d033b"
  },
  {
    "url": "assets/js/24.19fd1ec4.js",
    "revision": "12533ba94436a25d4a43cff19418bf6d"
  },
  {
    "url": "assets/js/25.856c9d04.js",
    "revision": "5131dfa0903b4ad938e2ed76bfe7a60b"
  },
  {
    "url": "assets/js/26.646744d6.js",
    "revision": "7f4e85403f55612e2d1c2fd0ad0b7814"
  },
  {
    "url": "assets/js/27.cbe5d399.js",
    "revision": "2031446a6ecc93655afaa39edfb764f3"
  },
  {
    "url": "assets/js/28.3d1a9167.js",
    "revision": "d9c7c5375947bf7d6eb156f64e687e0e"
  },
  {
    "url": "assets/js/29.5d2a55a3.js",
    "revision": "283888cc939bd5adbb31dba795fa4a13"
  },
  {
    "url": "assets/js/3.307549ba.js",
    "revision": "c6dcf7e1633f7935b701deb92a1d7fcc"
  },
  {
    "url": "assets/js/30.575c3b34.js",
    "revision": "74d92cb1fdb6b0a90c071ba402aef4bc"
  },
  {
    "url": "assets/js/31.ce666efe.js",
    "revision": "3c1445e105c898dcccbeb3a2ea300174"
  },
  {
    "url": "assets/js/32.f3cdace4.js",
    "revision": "6a08a962799bdf2c3a862429b5f801a0"
  },
  {
    "url": "assets/js/33.64222dc4.js",
    "revision": "fd65dc65dffac0a6a643c1b7395a2138"
  },
  {
    "url": "assets/js/34.3ef501c7.js",
    "revision": "51100259adac5030c46a4e09fa1f80ab"
  },
  {
    "url": "assets/js/4.c8c44e52.js",
    "revision": "a5aaf9a70dc6b94b790182c68edefeb0"
  },
  {
    "url": "assets/js/5.e7422ec2.js",
    "revision": "e00cc3c38172cc6ff100f631ac441be4"
  },
  {
    "url": "assets/js/6.e55b13fa.js",
    "revision": "7c7e1147a50e6820eb1964608aee6c85"
  },
  {
    "url": "assets/js/7.4abc5fac.js",
    "revision": "71326cb021fb1b4923b18adf4fc27720"
  },
  {
    "url": "assets/js/8.2eeeb5ce.js",
    "revision": "d0276410ab70cef8049c96c90d9bae8f"
  },
  {
    "url": "assets/js/9.e3a3c066.js",
    "revision": "0a7ca676412ba88c6fcfe334e217421f"
  },
  {
    "url": "assets/js/app.cb2c82ce.js",
    "revision": "d5aedfe7c2a45f4b91bd43a2ff79c1cb"
  },
  {
    "url": "contributing/index.html",
    "revision": "2e2fa44d19b30e94da5afed50d092099"
  },
  {
    "url": "getting-started/index.html",
    "revision": "2c0c3994a2c6949a9e9655681d2b0eb6"
  },
  {
    "url": "getting-started/octofarm-cli.html",
    "revision": "e08307ea0276849496ffa2743e9f55b3"
  },
  {
    "url": "getting-started/octofarm-faq.html",
    "revision": "21253565dccd365b60fbeb42f95d4e16"
  },
  {
    "url": "getting-started/octofarm-remote-access.html",
    "revision": "cff10d87ba5eeb63dd76d02910dc6647"
  },
  {
    "url": "getting-started/octofarm-requirements.html",
    "revision": "4d529f12441219d25e5fc2a17a97e79a"
  },
  {
    "url": "getting-started/octofarm-updating.html",
    "revision": "eda3e5b4ca5def3c50fd144704402312"
  },
  {
    "url": "getting-started/octoprint-setup.html",
    "revision": "249947aaec27cd2662c425930aadbaeb"
  },
  {
    "url": "guides/index.html",
    "revision": "852d23f2668f2918e4c5a9d422390ace"
  },
  {
    "url": "guides/octofarm-scripts-gotify.html",
    "revision": "d181c2f48f01b699684e6d835283680c"
  },
  {
    "url": "guides/octoprint-supported-plugins.html",
    "revision": "6c1b675717c4d6beebc93bd9d5c50f0a"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "5017e7e33ca7c617bf40f4c449803354"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0fc1d956b26dfd6d81b992882ed8cfec"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "dd34c21efa1fd560c76c84bd1f8c0e85"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "175295be99cd023090875a8fe8de9cff"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "39939dc9e24b73c478026c5850ac8a4d"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "510c6b26f256ec09d2d8ab82fe713283"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "1f6c689ebef2033c87b211b9f6971826"
  },
  {
    "url": "index.html",
    "revision": "c132a832e8e59e0cfd74f1bc89cd4777"
  },
  {
    "url": "installation/index.html",
    "revision": "79e19eb96eb8db95d2dd138d527805b3"
  },
  {
    "url": "installation/install-docker.html",
    "revision": "b7a5a97c58bdf660f2693051325635c4"
  },
  {
    "url": "installation/install-linux-arch.html",
    "revision": "c61db0410fc14c03d275d7033de3ff2f"
  },
  {
    "url": "installation/install-linux-debian.html",
    "revision": "526bb452f3aadfc05be308fabd3001d6"
  },
  {
    "url": "installation/install-linux-opensuse.html",
    "revision": "55053e6bcfaf41dc876bac73ff2a8e01"
  },
  {
    "url": "installation/install-linux-redhat.html",
    "revision": "7b8f4f553960b011c72aad833d0b8ab4"
  },
  {
    "url": "installation/install-linux-ubuntu.html",
    "revision": "8cb0657689fb8a89249fee54846908cf"
  },
  {
    "url": "installation/install-raspberry-pi.html",
    "revision": "c3420f6db7039fe30ffc96a6852dfd38"
  },
  {
    "url": "installation/setup-environment.html",
    "revision": "de73bfb1a1985b1518bf960330b55c6d"
  },
  {
    "url": "installation/setup-service.html",
    "revision": "d1464cd465847995d0fcc74d177141b2"
  },
  {
    "url": "logo.png",
    "revision": "cafa45e7ede7e3888e08e8640cb7d92d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

if (!self.define) {
  let e,
    s = {};
  const a = (a, t) => (
    (a = new URL(a + ".js", t).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (t, c) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let r = {};
    const n = (e) => a(e, i),
      d = { module: { uri: i }, exports: r, require: n };
    s[i] = Promise.all(t.map((e) => d[e] || n(e))).then((e) => (c(...e), r));
  };
}
define(["./workbox-f1770938"], function (e) {
  "use strict";
  importScripts("/fallback-ce627215c0e4a9af.js"),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/AppImages/android/android-launchericon-144-144.png",
          revision: "08102077bcf2ab9e1c2e198367ac4b64",
        },
        {
          url: "/AppImages/android/android-launchericon-192-192.png",
          revision: "2ef0bfb4b682b45f4a24224be867c964",
        },
        {
          url: "/AppImages/android/android-launchericon-48-48.png",
          revision: "e8043e48b13397084660a13939ab4bff",
        },
        {
          url: "/AppImages/android/android-launchericon-512-512.png",
          revision: "d39b886a45ee981cfcf49ac59663858f",
        },
        {
          url: "/AppImages/android/android-launchericon-72-72.png",
          revision: "2003da13a1d3c17446b3c086357451b5",
        },
        {
          url: "/AppImages/android/android-launchericon-96-96.png",
          revision: "03bd7be112d12df85726ef49f7d86542",
        },
        {
          url: "/AppImages/ios/1024.png",
          revision: "ea46dfaf3a8cdb990fc4a9029071fce3",
        },
        { url: "/DOM.png", revision: "32b18626897d35f6ac2e06b9dd6a72b4" },
        {
          url: "/Propagation.svg",
          revision: "548c361be46e494719eb30d3b3b286c9",
        },
        {
          url: "/React-tree.png",
          revision: "bc7ebf3aa3a1cd6fd70cdce34180b2d1",
        },
        {
          url: "/UISTATES/added.png",
          revision: "a8228d4253bc89b5514ec8078fef18c1",
        },
        {
          url: "/UISTATES/counters.png",
          revision: "5fc984ae9f9782930fda7d21403e156a",
        },
        {
          url: "/UISTATES/deleted.png",
          revision: "4e1eb94fda85e34a3141be921ae316ca",
        },
        {
          url: "/UISTATES/empty.png",
          revision: "7bc348b71a6150a9b6dff97527c056b7",
        },
        {
          url: "/UISTATES/emptyCounter.png",
          revision: "650a1426e3fd8ce3ade0a5f02431ac86",
        },
        {
          url: "/UISTATES/error.png",
          revision: "ae87072a27f6bb6bbe693a542f57a5d8",
        },
        {
          url: "/UISTATES/reacttree.png",
          revision: "10cfba5ad19cc2cca7612b8c550f6405",
        },
        {
          url: "/UISTATES/resetstate.png",
          revision: "33d2d9178ae9b206e7bc1cd4f8a5f429",
        },
        {
          url: "/UISTATES/state.png",
          revision: "cccbef55d0a0bf71671ee3d1ab3bd30a",
        },
        {
          url: "/UISTATES/submitting.png",
          revision: "76202a157866956674e863572963f15a",
        },
        {
          url: "/UISTATES/success.png",
          revision: "ed770271678a3665f425afa51257aef1",
        },
        {
          url: "/UISTATES/typing.png",
          revision: "c4e61b82c413524cc47bb96de79c48f2",
        },
        {
          url: "/UISTATES/unchecked.png",
          revision: "dc7a03d204dd26775a2a66850b8e7986",
        },
        {
          url: "/UISTATES/updatedCounterB.png",
          revision: "02116ea7a40025a3a15c53dec88f3c27",
        },
        {
          url: "/UseEffect lifecycle.png",
          revision: "5d961fe20148ad562981d4964c5b76e3",
        },
        {
          url: "/_next/static/3GLqPsqBs8S1tBG6jUl-p/_buildManifest.js",
          revision: "95e0446a87fe71657a866b1755e8df3a",
        },
        {
          url: "/_next/static/3GLqPsqBs8S1tBG6jUl-p/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/5190-82ad933e64813b03.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/5425-de8787da5a5c2463.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/7138-dd8becb669856ecd.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-3160424b2133db80.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/app/layout-53e49b09483e5dc9.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/app/page-abd560be71b2c7fb.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/app/~offline/page-0dafd2be4246eea2.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/fd9d1056-bf314b5e1d48bb19.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/framework-403f929673cff667.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/main-app-943499c3f02af24a.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/main-b907171511bb70fa.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/_app-fcdbfe32171e0594.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/_error-c72a1f77a3c0be1b.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook-5eeecaad27d132f8.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/Firebase-dfdca088915a461b.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/Firebase/Authentication-authorization-b33594862b9c4995.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-1/React-installation-and-development-environment-setup-e915e5a1b4d49e10.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-1/basics-of-react-component-b2c0e54c548fbb64.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-1/component-export-import-1d866b1c9f89cfd1.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-1/conditional-renderaing-758f6eddbbf9d32e.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-1/introduction-to-react-9ee706c0af9fb896.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-1/javascript-in-jsx-63df5f226ea95903.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-1/jsx-markup-6baee5bb71d6692e.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-1/pure-components-3203678efb67b00d.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-1/rendering-list-df2457ddcc4f2051.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-1/understanding-props-8a3b2a34fdbad40f.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-1/vertual-dom-b64bff967e4b4409.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-1/your-ui-as-a-tree-6e1df497c5124854.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-2/event-propagation-7e8daebf2aba0e29.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-2/how-rendering-works-662e70802d31d0a1.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-2/queueing-state-6b22e4a36457fd89.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-2/responding-to-event-6ccc22531d3eeb36.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-2/state-as-a-snapshot-4a7a489d2ea85264.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-2/understanding-state-5503a25433c863df.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-2/updateing-array-in-state-add0794b6f92f886.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-2/updating-object-in-state-9093a30261add929.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-3/choosing-the-state-structure-02edb33e0d62c021.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-3/declaretive-imperative-b2eae7cd56600842.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-3/extracting-state-logic-into-reducer-5745c2e16a8a38f3.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-3/lifting-state-up-f55be61339e9d6fe.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-3/passing-data-deeply-with-context-b34908e2154c33ec.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-3/preserving-and-reseting-state-cbcbddf42546db85.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-3/reseting-state-at-same-position-a0c5e6667ea1b109.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-3/scaling-up-with-reducer-and-context-8126ef4a814938d3.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-3/thinking-about-ui-d810dae345063773.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-4/effect-react-to-reactive-values-2759381cd7d1f2bb.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-4/fatching-data-b020e915f20927a8.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-4/flushing-state-updates-synchronously-df46774c7a5cce06.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-4/forwarding-refs-ae78bfc9efcb6e86.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-4/handling-effects-firing-twice-e40a1e71bfb19cfa.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-4/manipulating-dom-with-refs-c58abbde12965f3e.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-4/performance-optimization-aaf71f8d6503cd7a.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-4/referencing-values-with-refs-cedc34484bba509a.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-4/removing-effect-dependecies-69da86ac024cab87.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-4/reusing-logic-with-custom-hook-2e0a022345c1c58a.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-4/seperating-events-from-effects-7184b6197c5946fb.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-4/syncronising-with-effets-overview-5291905e8d10f0c4.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-4/the-lifecycle-of-an-effect-3f323334f82b1b06.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-4/useImperativeHandle-7af0407d1a3cb3ae.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-4/you-might-not-need-an-effect-0943f31ef5211ae7.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-5/react-lazy-load-e20d2cb8f62db9eb.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/React-js/module-5/react-suspense-and-error-bounderies-96b62ba07413b9df.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/framer-motion-e8123617944ee6b2.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/frontend-focus-topic-131baf343054835b.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/git-0a90d7363c7754b1.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/javascript-refresher-4d60126e887f43f0.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/react-hook-form-826ff275f9e5c903.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/react-router-dom-59fc2715f788af56.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/tanstack-query-cb5433dc20418d4b.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/pages/javascript-guidebook/tanstack-query/installation-862b0ec345d8cf03.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
          revision: "79330112775102f91e1010318bae2bd3",
        },
        {
          url: "/_next/static/chunks/webpack-b422ab34837a080f.js",
          revision: "3GLqPsqBs8S1tBG6jUl-p",
        },
        {
          url: "/_next/static/css/2aee03f434e3b444.css",
          revision: "2aee03f434e3b444",
        },
        {
          url: "/_next/static/css/471946d199e2edea.css",
          revision: "471946d199e2edea",
        },
        {
          url: "/_next/static/css/a521f5d5cc6c4f75.css",
          revision: "a521f5d5cc6c4f75",
        },
        {
          url: "/_next/static/media/26a46d62cd723877-s.woff2",
          revision: "befd9c0fdfa3d8a645d5f95717ed6420",
        },
        {
          url: "/_next/static/media/55c55f0601d81cf3-s.woff2",
          revision: "43828e14271c77b87e3ed582dbff9f74",
        },
        {
          url: "/_next/static/media/581909926a08bbc8-s.woff2",
          revision: "f0b86e7c24f455280b8df606b89af891",
        },
        {
          url: "/_next/static/media/6d93bde91c0c2823-s.woff2",
          revision: "621a07228c8ccbfd647918f1021b4868",
        },
        {
          url: "/_next/static/media/97e0cb1ae144a2a9-s.woff2",
          revision: "e360c61c5bd8d90639fd4503c829c2dc",
        },
        {
          url: "/_next/static/media/DOM.92dfe66e.png",
          revision: "32b18626897d35f6ac2e06b9dd6a72b4",
        },
        {
          url: "/_next/static/media/Propagation.df7e81b3.svg",
          revision: "548c361be46e494719eb30d3b3b286c9",
        },
        {
          url: "/_next/static/media/UseEffect-lifecycle.d1840044.png",
          revision: "280283aea7cd6c55397cb6d7041237d1",
        },
        {
          url: "/_next/static/media/a34f9d1faa5f3315-s.p.woff2",
          revision: "d4fe31e6a2aebc06b8d6e558c9141119",
        },
        {
          url: "/_next/static/media/added.db4c8afe.png",
          revision: "a8228d4253bc89b5514ec8078fef18c1",
        },
        {
          url: "/_next/static/media/capturetrue.efffa835.png",
          revision: "a98a67c20ceb000c94c5163b6b21604e",
        },
        {
          url: "/_next/static/media/counters.c51aef2d.png",
          revision: "5fc984ae9f9782930fda7d21403e156a",
        },
        {
          url: "/_next/static/media/deleted.70c98ee0.png",
          revision: "4e1eb94fda85e34a3141be921ae316ca",
        },
        {
          url: "/_next/static/media/df0a9ae256c0569c-s.woff2",
          revision: "d54db44de5ccb18886ece2fda72bdfe0",
        },
        {
          url: "/_next/static/media/dif.13d07124.png",
          revision: "350b22a074b389425b59bb42db769a27",
        },
        {
          url: "/_next/static/media/empty.efa2cc84.png",
          revision: "7bc348b71a6150a9b6dff97527c056b7",
        },
        {
          url: "/_next/static/media/emptyCounter.d0d1fb04.png",
          revision: "650a1426e3fd8ce3ade0a5f02431ac86",
        },
        {
          url: "/_next/static/media/error.53f43300.png",
          revision: "ae87072a27f6bb6bbe693a542f57a5d8",
        },
        {
          url: "/_next/static/media/output.13382899.png",
          revision: "4751c7241f09ab598f08a3e1ad2145d5",
        },
        {
          url: "/_next/static/media/primitive.1d230ad0.png",
          revision: "cf99c92efbd7117be26021b2c7a9e9c5",
        },
        {
          url: "/_next/static/media/reacttree.719e401a.png",
          revision: "10cfba5ad19cc2cca7612b8c550f6405",
        },
        {
          url: "/_next/static/media/ref1.2483fe7c.png",
          revision: "be4c8a81d66162ff9016b60cf8364dda",
        },
        {
          url: "/_next/static/media/ref2.438d20b9.png",
          revision: "f8c9ca54930c8c07042faeb102b63899",
        },
        {
          url: "/_next/static/media/resetstate.db9c8f2c.png",
          revision: "33d2d9178ae9b206e7bc1cd4f8a5f429",
        },
        {
          url: "/_next/static/media/state.b0b8ba64.svg",
          revision: "3580b6465ce6406868de8fede9cd8778",
        },
        {
          url: "/_next/static/media/state.d2995b90.png",
          revision: "cccbef55d0a0bf71671ee3d1ab3bd30a",
        },
        {
          url: "/_next/static/media/submitting.e76ad7f9.png",
          revision: "76202a157866956674e863572963f15a",
        },
        {
          url: "/_next/static/media/success.ccee6108.png",
          revision: "ed770271678a3665f425afa51257aef1",
        },
        {
          url: "/_next/static/media/typing.cf026faf.png",
          revision: "c4e61b82c413524cc47bb96de79c48f2",
        },
        {
          url: "/_next/static/media/unchecked.dc8de9f1.png",
          revision: "dc7a03d204dd26775a2a66850b8e7986",
        },
        {
          url: "/_next/static/media/updatedCounterB.30fc1b7a.png",
          revision: "02116ea7a40025a3a15c53dec88f3c27",
        },
        {
          url: "/_next/static/media/useREducer.80449c84.png",
          revision: "3ed0af11f326894779dc0b8a34c1effd",
        },
        {
          url: "/capturetrue.png",
          revision: "a98a67c20ceb000c94c5163b6b21604e",
        },
        { url: "/dif.png", revision: "350b22a074b389425b59bb42db769a27" },
        {
          url: "/div with an event listener.png",
          revision: "bbd41eb69e09974466fda5069a8683ef",
        },
        {
          url: "/fallback-ce627215c0e4a9af.js",
          revision: "1e9d74279c35804a7d73ce125e461c8f",
        },
        { url: "/filetree.png", revision: "a34bca0fc85ad06bcbfdd8f992bcad5f" },
        {
          url: "/hookimages/UseEffect-lifecycle.png",
          revision: "280283aea7cd6c55397cb6d7041237d1",
        },
        {
          url: "/hookimages/useREducer.png",
          revision: "3ed0af11f326894779dc0b8a34c1effd",
        },
        { url: "/manifest.json", revision: "cf4f73bff6cbbc1636825caf46d913ff" },
        { url: "/meta.png", revision: "751f3f278daa24eae22ce64b5c745378" },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        { url: "/output.png", revision: "4751c7241f09ab598f08a3e1ad2145d5" },
        { url: "/primitive.png", revision: "cf99c92efbd7117be26021b2c7a9e9c5" },
        { url: "/ref1.png", revision: "be4c8a81d66162ff9016b60cf8364dda" },
        { url: "/ref2.png", revision: "f8c9ca54930c8c07042faeb102b63899" },
        {
          url: "/screenshot.png",
          revision: "0dc943daf904ce82e5c2ab5b424e0d4b",
        },
        { url: "/state.svg", revision: "3580b6465ce6406868de8fede9cd8778" },
        {
          url: "/swe-worker-5c72df51bb1f6ee0.js",
          revision: "5a47d90db13bb1309b25bdf7b363570e",
        },
        { url: "/vercel.svg", revision: "61c6b19abff40ea7acd577be818f3976" },
        { url: "/~offline", revision: "3GLqPsqBs8S1tBG6jUl-p" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && "opaqueredirect" === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: "OK",
                    headers: e.headers,
                  })
                : e,
          },
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: "next-static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: s } }) =>
        !(!e || s.startsWith("/api/auth/callback") || !s.startsWith("/api/")),
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        "1" === e.headers.get("RSC") &&
        "1" === e.headers.get("Next-Router-Prefetch") &&
        a &&
        !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc-prefetch",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        "1" === e.headers.get("RSC") && a && !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: s }) => s && !e.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET"
    ),
    (self.__WB_DISABLE_DEV_LOGS = !0);
});

// 텍스트 선택 방지 스크립트
var omitformtags = ['input', 'textarea', 'select'];
omitformtags = omitformtags.join('|');

function disableselect(e) {
  if (omitformtags.indexOf(e.target.tagName.toLowerCase()) == -1) return false;
}

function reEnable() {
  return true;
}

if (typeof document.onselectstart != 'undefined')
  document.onselectstart = new Function('return false');
else {
  document.onmousedown = disableselect;
  document.onmouseup = reEnable;
}

// 로딩 스크립트
window.setTimeout(function () {
  document.body.className = document.body.className.replace('loading', '');
}, 10);

// Blogger 위젯 관리자 스크립트
window['__wavt'] = 'AOuZoY6xWl0olDIWGCbscLLUKkLFvgZwjw:1724222731681';
_WidgetManager._Init(
  '//www.blogger.com/rearrange?blogID\x3d716711588236730989',
  '//koreaserver1128.blogspot.com/',
  '716711588236730989'
);

_WidgetManager._SetDataContext([
  {
    name: 'blog',
    data: {
      blogId: '716711588236730989',
      title: '\ucf54\ub9ac\uc544\uc11c\ubc846',
      url: 'https://koreaserver1128.blogspot.com/',
      canonicalUrl: 'https://koreaserver1128.blogspot.com/',
      homepageUrl: 'https://koreaserver1128.blogspot.com/',
      searchUrl: 'https://koreaserver1128.blogspot.com/search',
      canonicalHomepageUrl: 'https://koreaserver1128.blogspot.com/',
      blogspotFaviconUrl: 'https://koreaserver1128.blogspot.com/favicon.ico',
      bloggerUrl: 'https://www.blogger.com',
      hasCustomDomain: false,
      httpsEnabled: true,
      enabledCommentProfileImages: true,
      gPlusViewType: 'FILTERED_POSTMOD',
      adultContent: false,
      analyticsAccountNumber: '',
      encoding: 'UTF-8',
      locale: 'ko',
      localeUnderscoreDelimited: 'ko',
      languageDirection: 'ltr',
      isPrivate: false,
      isMobile: false,
      isMobileRequest: false,
      mobileClass: '',
      isPrivateBlog: false,
      isDynamicViewsAvailable: true,
      feedLinks:
        '\x3clink rel\x3d\x22alternate\x22 type\x3d\x22application/atom+xml\x22 title\x3d\x22\ucf54\ub9ac\uc544\uc11c\ubc846 - Atom\x22 href\x3d\x22https://koreaserver1128.blogspot.com/feeds/posts/default\x22 /\x3e\n\x3clink rel\x3d\x22alternate\x22 type\x3d\x22application/rss+xml\x22 title\x3d\x22\ucf54\ub9ac\uc544\uc11c\ubc846 - RSS\x22 href\x3d\x22https://koreaserver1128.blogspot.com/feeds/posts/default?alt\x3drss\x22 /\x3e\n\x3clink rel\x3d\x22service.post\x22 type\x3d\x22application/atom+xml\x22 title\x3d\x22\ucf54\ub9ac\uc544\uc11c\ubc846 - Atom\x22 href\x3d\x22https://www.blogger.com/feeds/716711588236730989/posts/default\x22 /\x3e\n',
      meTag:
        '\x3clink rel\x3d\x22me\x22 href\x3d\x22https://www.blogger.com/profile/09282309674387711445\x22 /\x3e\n',
      adsenseHostId: 'ca-host-pub-1556223355139109',
      adsenseHasAds: false,
      adsenseAutoAds: false,
      boqCommentIframeForm: true,
      loginRedirectParam: '',
      view: '',
      dynamicViewsCommentsSrc:
        '//www.blogblog.com/dynamicviews/4224c15c4e7c9321/js/comments.js',
      dynamicViewsScriptSrc: '//www.blogblog.com/dynamicviews/121870982fa60043',
      plusOneApiSrc: 'https://apis.google.com/js/platform.js',
      disableGComments: true,
      interstitialAccepted: false,
      sharing: {
        platforms: [
          {
            name: '\uacf5\uc720 \ub9c1\ud06c \ub9cc\ub4e4\uae30',
            key: 'link',
            shareMessage: '\uacf5\uc720 \ub9c1\ud06c \ub9cc\ub4e4\uae30',
            target: '',
          },
          {
            name: 'Facebook',
            key: 'facebook',
            shareMessage: 'Facebook\uc5d0 \uacf5\uc720',
            target: 'facebook',
          },
          {
            name: 'BlogThis!',
            key: 'blogThis',
            shareMessage: 'BlogThis!',
            target: 'blog',
          },
          {
            name: 'Twitter',
            key: 'twitter',
            shareMessage: 'Twitter\uc5d0 \uacf5\uc720',
            target: 'twitter',
          },
          {
            name: 'Pinterest',
            key: 'pinterest',
            shareMessage: 'Pinterest\uc5d0 \uacf5\uc720',
            target: 'pinterest',
          },
          {
            name: '\uc774\uba54\uc77c',
            key: 'email',
            shareMessage: '\uc774\uba54\uc77c',
            target: 'email',
          },
        ],
        disableGooglePlus: true,
        googlePlusShareButtonWidth: 0,
        googlePlusBootstrap:
          '\x3cscript type\x3d\x22text/javascript\x22\x3ewindow.___gcfg \x3d {\x27lang\x27: \x27ko\x27};\x3c/script\x3e',
      },
      hasCustomJumpLinkMessage: false,
      jumpLinkMessage: '\uc790\uc138\ud55c \ub0b4\uc6a9 \ubcf4\uae30',
      pageType: 'index',
      pageName: '',
      pageTitle: '\ucf54\ub9ac\uc544\uc11c\ubc846',
    },
  },
  { name: 'features', data: {} },
  {
    name: 'messages',
    data: {
      edit: '\uc218\uc815',
      linkCopiedToClipboard:
        '\ub9c1\ud06c\ub97c \ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ud588\uc2b5\ub2c8\ub2e4.',
      ok: '\ud655\uc778',
      postLink: '\uae00 \ub9c1\ud06c',
    },
  },
  {
    name: 'template',
    data: {
      name: 'custom',
      localizedName: '\uc0ac\uc6a9\uc790 \uc9c0\uc815',
      isResponsive: false,
      isAlternateRendering: false,
      isCustom: true,
    },
  },
  {
    name: 'view',
    data: {
      classic: { name: 'classic', url: '?view\x3dclassic' },
      flipcard: { name: 'flipcard', url: '?view\x3dflipcard' },
      magazine: { name: 'magazine', url: '?view\x3dmagazine' },
      mosaic: { name: 'mosaic', url: '?view\x3dmosaic' },
      sidebar: { name: 'sidebar', url: '?view\x3dsidebar' },
      snapshot: { name: 'snapshot', url: '?view\x3dsnapshot' },
      timeslide: { name: 'timeslide', url: '?view\x3dtimeslide' },
      isMobile: false,
      title: '\ucf54\ub9ac\uc544\uc11c\ubc846',
      description: '',
      url: 'https://koreaserver1128.blogspot.com/',
      type: 'feed',
      isSingleItem: false,
      isMultipleItems: true,
      isError: false,
      isPage: false,
      isPost: false,
      isHomepage: true,
      isArchive: false,
      isLabelSearch: false,
    },
  },
]);

_WidgetManager._RegisterWidget(
  '_PageListView',
  new _WidgetInfo(
    'PageList2',
    'crosscol',
    document.getElementById('PageList2'),
    {
      title: '\uba54\ub274',
      links: [
        {
          isCurrentPage: false,
          href: 'https://koreaserver1128.blogspot.com/p/blog-page_14.html',
          id: '6665002496038482080',
          title: '\uc11c\ubc84\uc815\ubcf4',
        },
        {
          isCurrentPage: false,
          href: 'https://koreaserver1128.blogspot.com/p/blog-page_89.html',
          id: '6919728325672564054',
          title: '\uc5c5\ub370\uc774\ud2b8',
        },
        {
          isCurrentPage: false,
          href: 'https://koreaserver1128.blogspot.com/p/blog-page_9.html',
          id: '1204973264657237151',
          title: '\uc0ac\ub0e5\ud130\uc815\ubcf4',
        },
        {
          isCurrentPage: false,
          href: 'https://koreaserver1128.blogspot.com/p/blog-page_65.html',
          id: '323266720640881621',
          title: '\ubcf4\uc2a4\uc815\ubcf4',
        },
        {
          isCurrentPage: false,
          href: 'https://koreaserver1128.blogspot.com/p/blog-page_20.html',
          id: '8859371936408656421',
          title: '\uace0\uac1d\uc13c\ud130',
        },
        {
          isCurrentPage: false,
          href: 'https://koreaserver1128.blogspot.com/p/blog-page_46.html',
          id: '1467097248948679057',
          title: '\ub2e4\uc6b4\ub85c\ub4dc',
        },
      ],
      mobile: false,
      showPlaceholder: true,
      hasCurrentPage: false,
    },
    'displayModeFull'
  )
);

_WidgetManager._RegisterWidget(
  '_HTMLView',
  new _WidgetInfo(
    'HTML2',
    'main',
    document.getElementById('HTML2'),
    {},
    'displayModeFull'
  )
);

_WidgetManager._RegisterWidget(
  '_BlogView',
  new _WidgetInfo(
    'Blog1',
    'main',
    document.getElementById('Blog1'),
    {
      cmtInteractionsEnabled: false,
      lightboxEnabled: true,
      lightboxModuleUrl:
        'https://www.blogger.com/static/v1/jsbin/67319849-lbx__ko.js',
      lightboxCssUrl:
        'https://www.blogger.com/static/v1/v-css/13464135-lightbox_bundle.css',
    },
    'displayModeFull'
  )
);

_WidgetManager._RegisterWidget(
  '_HTMLView',
  new _WidgetInfo(
    'HTML1',
    'footer-3',
    document.getElementById('HTML1'),
    {},
    'displayModeFull'
  )
);

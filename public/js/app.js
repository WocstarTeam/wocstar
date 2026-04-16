    (function () {
      const scenes = Array.from(document.querySelectorAll('.scene'));
      const brandSwitcher = document.querySelector('.brand-switcher');
      const brandButtons = Array.from(document.querySelectorAll('.brand-switcher .brand[data-scene-target]'));
      const brandCapitalWrap = document.querySelector('.brand-capital-wrap');
      const brandCapitalMenu = document.getElementById('brandCapitalMenu');
      const brandFundWrap = document.querySelector('.brand-fund-wrap');
      const brandFundMenu = document.getElementById('brandFundMenu');
      const brandAcademyWrap = document.querySelector('.brand-academy-wrap');
      const brandAcademyMenu = document.getElementById('brandAcademyMenu');
      const brandMediaWrap = document.querySelector('.brand-media-wrap');
      const brandMediaMenu = document.getElementById('brandMediaMenu');
      const headline = document.getElementById('headline');
      const headlineWrap = document.querySelector('.headline-wrap');
      const headlineSubtext = document.getElementById('headlineSubtext');
      const nextArrow = document.querySelector('.scene-next-arrow');
      const prevArrow = document.querySelector('.scene-prev-arrow');
      const openMediaFellowsButton = document.getElementById('media-fellows');
      const openMediaFoundationButton = document.getElementById('wocstar-media-foundation');
      const contactButton = document.getElementById('contactButton');
      const fundInlineContactButton = document.getElementById('fundInlineContactButton');
      const academyInlineContactButton = document.getElementById('academyInlineContactButton');
      const academyWaitlistButton = document.getElementById('academyWaitlistButton');
      const academyInlineContactButtonMobile = document.getElementById('academyInlineContactButtonMobile');
      const academyWaitlistButtonMobile = document.getElementById('academyWaitlistButtonMobile');
      const academyMobileSearch = document.querySelector('.academy-footer-mobile__search');
      const academyMobileSearchInput = document.getElementById('academyMobileSearchInput');
      const academyMobileSearchToggle = document.getElementById('academyMobileSearchToggle');
      const academyApplyButton = document.getElementById('academyApplyButton');
      const capitalInlineContactButton = document.getElementById('capitalInlineContactButton');
      const contactModal = document.getElementById('contactModal');
      const contactForm = document.getElementById('contactForm');
      const contactFormStatus = document.getElementById('contactFormStatus');
      const contactNameInput = document.getElementById('contactName');
      const academyWaitlistModal = document.getElementById('academyWaitlistModal');
      const academyWaitlistForm = document.getElementById('academyWaitlistForm');
      const academyWaitlistStatus = document.getElementById('academyWaitlistStatus');
      const academyWaitlistNameInput = document.getElementById('academyWaitlistName');
      const academyWaitlistPhoneInput = document.getElementById('academyWaitlistPhone');
      const goToGayleBio = document.getElementById('goToGayleBio');
      const goToGayleFromBubble = document.getElementById('goToGayleFromBubble');
      const goToGayleReadBio = document.getElementById('goToGayleReadBio');
      const partnersTrack = document.getElementById('partnersTrack');
      const partnersViewport = document.getElementById('partnersViewport');
      const partnersPrevBtn = document.getElementById('partnersPrevBtn');
      const partnersNextBtn = document.getElementById('partnersNextBtn');
      const universeShowcaseTitle = document.getElementById('universeShowcaseTitle');
      const universeShowcaseSlides = Array.from(document.querySelectorAll('.universe-showcase__slide'));
      const capitalInterview = document.querySelector('.capital-interview');
      const capitalInterviewItems = Array.from(document.querySelectorAll('.capital-interview__item'));
      const capitalInterviewMediaLinks = Array.from(document.querySelectorAll('.capital-interview__media[data-embed-url]'));
      const interviewModal = document.getElementById('interviewModal');
      const foundationModal = document.getElementById('foundationModal');
      const foundationModalBody = foundationModal ? foundationModal.querySelector('.foundation-modal__body') : null;
      const fellowsModal = document.getElementById('fellowsModal');
      const fellowsModalBody = fellowsModal ? fellowsModal.querySelector('.fellows-modal__body') : null;
      const smsTermsModal = document.getElementById('smsTermsModal');
      const smsTermsLinks = Array.from(document.querySelectorAll('[data-open-sms-terms="true"]'));
      const interviewModalFrame = document.getElementById('interviewModalFrame');
      const interviewModalFallbackLink = document.getElementById('interviewModalFallbackLink');
      const universeScene = document.querySelector('.universe-scene');
      const fundScene = document.querySelector('.fund-scene');
      const academyScene = document.querySelector('.academy-scene');
      const mediaScene = document.querySelector('.media-scene');
      const mediaTypedParagraphs = Array.from(document.querySelectorAll('.media-letter__paragraph[data-media-type]'));
      const fundPortcoTrack = document.getElementById('fundPortcoTrack');
      const fundPortcoViewport = document.getElementById('fundPortcoViewport');
      const fundPortcoPrevBtn = document.getElementById('fundPortcoPrevBtn');
      const fundPortcoNextBtn = document.getElementById('fundPortcoNextBtn');
      const academyAlumniViewport = document.getElementById('academyAlumniViewport');
      const academyAlumniTrack = document.getElementById('academyAlumniTrack');
      const academyAlumniPrevBtn = document.getElementById('academyAlumniPrevBtn');
      const academyAlumniNextBtn = document.getElementById('academyAlumniNextBtn');
      const academyAlumniCards = Array.from(document.querySelectorAll('.academy-alumni__card'));
      const academyAlumniImages = Array.from(document.querySelectorAll('.academy-alumni__avatar-image'));
      const academyCurriculumSection = document.getElementById('academy-curriculum');
      const academyCurriculumSceneButtons = Array.from(document.querySelectorAll('[data-academy-scene]'));
      const academyCurriculumPanels = Array.from(document.querySelectorAll('[data-academy-scene-panel]'));
      const fundPortfolioSection = document.getElementById('fund-portfolio');
      const fundPortfolioCompaniesSection = document.getElementById('portfolio-companies');
      const fundExitsSection = document.getElementById('success-stories-exits');
      const universeSceneIndex = 3;
      const profileSceneIndex = 4;
      const mainSceneSequence = [3, 0, 1, 2];
      const sceneTitles = ['Wocstar Fund', 'Wocstar Academy', 'Wocstar Media', 'The Wocstar Universe', 'Gayle Jennings-O\'Byrne'];
      const sceneDocumentTitles = ['Wocstar Fund', 'Wocstar Academy', 'Wocstar Media', 'Wocstar Capital', 'Gayle Jennings-O\'Byrne'];
      const sceneDescriptions = [
        `Wocstar Fund is an early-stage investment fund focused on tech innovation.

        We invest in companies and technology to create a more innovative, equitable and sustainable world. Working together with Founders to move the world forward.`,
        'The Wocstar Academy isn\'t just a program-it\'s a deep-dive into the mechanics that move you from founder to master of the raise by providing the definitive, insider playbook for securing the capital you deserve. Likewise, allies learn to move from occasional supporters to savvy, successful investors.',
        '',
        '',
        ''
      ];
      const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
      const isSmallViewport = window.matchMedia('(max-width: 900px)').matches;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isPerformanceMode = isTouchDevice || isSmallViewport || prefersReducedMotion;
      const transitionDuration = isPerformanceMode ? 620 : 900;
      const swipeThreshold = 50;
      const wheelThreshold = 35;
      const profileExitDelay = 520;
      const universeExitDelay = 900;
      const fundExitDelay = 720;
      const academyExitDelay = 900;
      const mediaExitDelay = 900;

      let currentIndex = 0;
      let isAnimating = false;
      let touchStartY = null;
      let touchStartedInProfileCopy = false;
      let touchStartedInUniverseScene = false;
      let touchStartedInFundScene = false;
      let touchStartedInAcademyScene = false;
      let lastFocusedElement = null;
      let profileExitIntentDirection = 0;
      let profileExitIntentAt = 0;
      let universeExitIntentAt = 0;
      let fundExitIntentAt = 0;
      let academyExitIntentAt = 0;
      let mediaExitIntentAt = 0;
      let universeShowcaseIndex = 0;
      let universeShowcaseTimer = null;
      let capitalInterviewIndex = 0;
      let capitalInterviewTimer = null;
      let fundPortcoIndex = 0;
      let fundPortcoBaseCount = 0;
      let fundPortcoTimer = null;
      let mediaTypingTimer = null;
      let mediaTypingStarted = false;
      let mediaTypingCompleted = false;
      let resizeTimer = null;
      let academyAlumniIndex = 0;
      let academyAlumniTimer = null;
      let academyCurriculumAutoTimer = null;
      let academyCurriculumInView = false;
      let isCapitalMenuOpen = false;
      let isFundMenuOpen = false;
      let isAcademyMenuOpen = false;
      let isMediaMenuOpen = false;
      let touchStartedInMediaScene = false;

      function syncAppViewportHeight() {
        document.documentElement.style.setProperty('--app-vh', `${window.innerHeight}px`);
      }

      function getSceneHeaderOffset() {
        if (!brandSwitcher) {
          return window.innerWidth <= 768 ? 70 : 82;
        }
        const height = Math.round(brandSwitcher.getBoundingClientRect().height || 0);
        return Math.max(64, height);
      }

      const fundPortfolioCompanies = [
        {
          name: 'Samba TV',
          industry: 'Media Technology',
          logoSrc: 'assets/images/portco/sambatvlogo.png',
          logoAlt: 'Samba TV logo',
          url: 'https://www.samba.tv',
          plateClass: 'is-samba'
        },
        {
          name: 'Hemster',
          industry: 'Retail Technology',
          logoSrc: 'assets/images/portco/hemster-transparent.png',
          logoAlt: 'Hemster logo',
          url: 'https://www.hemster.co',
          plateClass: 'is-dark',
          logoClass: 'is-multiply',
          forceContain: true
        },
        {
          name: 'Re-Nuble',
          industry: 'AgriTech',
          logoSrc: 'assets/images/portco/renuble.png',
          logoAlt: 'Re-Nuble logo',
          url: 'https://www.re-nuble.com',
          plateClass: 'is-renuble'
        },
        {
          name: 'FilmHedge',
          industry: 'FinTech for Film',
          logoSrc: 'assets/images/portco/filmhedge.jpg',
          logoAlt: 'FilmHedge logo',
          url: 'https://www.filmhedge.com',
          plateClass: 'is-filmhedge'
        },
        {
          name: 'Infinite Objects',
          industry: 'Consumer Media Hardware',
          logoSrc: 'assets/images/portco/infiniteobjects.png',
          logoAlt: 'Infinite Objects logo',
          url: 'https://www.infiniteobjects.com',
          plateClass: 'is-infinite'
        },
        {
          name: 'Possip',
          industry: 'EdTech',
          logoSrc: 'assets/images/portco/possip.png',
          logoAlt: 'Possip logo',
          url: 'https://www.possip.com',
          plateClass: 'is-possip'
        },
        {
          name: 'Moment.ai',
          industry: 'Applied AI',
          wordmark: 'Moment.ai',
          url: 'https://www.moment.ai',
          plateClass: 'is-moment'
        }
      ];

      function setCapitalMenuOpen(isOpen) {
        isCapitalMenuOpen = isOpen;
        if (isOpen) {
          document.body.setAttribute('data-capital-menu-open', 'true');
        } else {
          document.body.removeAttribute('data-capital-menu-open');
        }
      }

      function setFundMenuOpen(isOpen) {
        isFundMenuOpen = isOpen;
        if (isOpen) {
          document.body.setAttribute('data-fund-menu-open', 'true');
        } else {
          document.body.removeAttribute('data-fund-menu-open');
        }
      }

      function setAcademyMenuOpen(isOpen) {
        isAcademyMenuOpen = isOpen;
        if (isOpen) {
          document.body.setAttribute('data-academy-menu-open', 'true');
        } else {
          document.body.removeAttribute('data-academy-menu-open');
        }
      }

      function setMediaMenuOpen(isOpen) {
        isMediaMenuOpen = isOpen;
        if (isOpen) {
          document.body.setAttribute('data-media-menu-open', 'true');
        } else {
          document.body.removeAttribute('data-media-menu-open');
        }
      }

      function getFundSceneMaxScrollTop() {
        if (!fundScene) return 0;
        return Math.max(0, fundScene.scrollHeight - fundScene.clientHeight);
      }

      function scrollFundSceneBy(delta) {
        if (!fundScene) return;
        fundScene.scrollTop += delta;
      }

      function getAcademySceneMaxScrollTop() {
        if (!academyScene) return 0;
        return Math.max(0, academyScene.scrollHeight - academyScene.clientHeight);
      }

      function scrollAcademySceneBy(delta) {
        if (!academyScene) return;
        academyScene.scrollTop += delta;
      }

      function scrollAcademySceneToAnchor(hash) {
        if (!academyScene || !hash || hash.charAt(0) !== '#') return;
        const target = academyScene.querySelector(hash);
        if (!target) return;
        const containerRect = academyScene.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const headerOffset = getSceneHeaderOffset();
        const top = Math.max(
          0,
          academyScene.scrollTop + (targetRect.top - containerRect.top) - headerOffset
        );
        academyScene.scrollTo({ top, behavior: 'smooth' });
      }

      function getMediaSceneMaxScrollTop() {
        if (!mediaScene) return 0;
        return Math.max(0, mediaScene.scrollHeight - mediaScene.clientHeight);
      }

      function scrollMediaSceneBy(delta) {
        if (!mediaScene) return;
        mediaScene.scrollTop += delta;
      }

      function scrollMediaSceneToAnchor(hash) {
        if (!mediaScene || !hash || hash.charAt(0) !== '#') return;
        const target = mediaScene.querySelector(hash);
        if (!target) return;
        const headerOffset = getSceneHeaderOffset();
        const top = Math.max(0, target.offsetTop - headerOffset);
        mediaScene.scrollTo({ top, behavior: 'smooth' });
      }

      function scrollUniverseSceneToAnchor(hash) {
        if (!universeScene || !hash || hash.charAt(0) !== '#') return;
        const target = universeScene.querySelector(hash);
        if (!target) return;
        const containerRect = universeScene.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const headerOffset = getSceneHeaderOffset();
        const top = Math.max(
          0,
          universeScene.scrollTop + (targetRect.top - containerRect.top) - headerOffset
        );
        universeScene.scrollTo({ top, behavior: 'smooth' });
      }

      function stopMediaTyping() {
        if (mediaTypingTimer) {
          window.clearTimeout(mediaTypingTimer);
          mediaTypingTimer = null;
        }
      }

      function resetMediaTyping() {
        stopMediaTyping();
        mediaTypedParagraphs.forEach((paragraph) => {
          if (!paragraph.dataset.fullText) {
            paragraph.dataset.fullText = (paragraph.textContent || '').trim();
          }
          paragraph.textContent = paragraph.dataset.fullText || '';
          paragraph.classList.add('is-visible');
          paragraph.classList.remove('is-typing');
        });
        mediaTypingStarted = true;
        mediaTypingCompleted = true;
      }

      function getMediaTypingDelay(character) {
        if (/[.!?]/.test(character)) return 260;
        if (/[,:;]/.test(character)) return 185;
        if (character === ' ') return 42;
        return 64;
      }

      function startMediaTyping() {
        if (!mediaTypedParagraphs.length) return;
        mediaTypedParagraphs.forEach((paragraph) => {
          if (!paragraph.dataset.fullText) {
            paragraph.dataset.fullText = (paragraph.textContent || '').trim();
          }
          paragraph.textContent = paragraph.dataset.fullText || '';
          paragraph.classList.add('is-visible');
          paragraph.classList.remove('is-typing');
        });
        mediaTypingStarted = true;
        mediaTypingCompleted = true;
        stopMediaTyping();
      }

      function initAcademyCurriculumReveal() {
        if (!academyCurriculumSection) return;
        if (!('IntersectionObserver' in window)) {
          academyCurriculumSection.classList.add('is-visible');
          academyCurriculumInView = true;
          return;
        }

        const revealObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            academyCurriculumSection.classList.add('is-visible');
            revealObserver.disconnect();
          });
        }, { threshold: 0.24 });

        revealObserver.observe(academyCurriculumSection);

        const visibilityObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            academyCurriculumInView = entry.isIntersecting && entry.intersectionRatio > 0.12;
            if (academyCurriculumInView) {
              startAcademyCurriculumAuto();
            } else {
              stopAcademyCurriculumAuto();
            }
          });
        }, { threshold: [0, 0.12, 0.3, 0.6] });

        visibilityObserver.observe(academyCurriculumSection);
      }

      function setAcademyCurriculumScene(sceneKey, scrollToScene = false) {
        if (!academyCurriculumPanels.length) return;

        const targetPanel = academyCurriculumPanels.find((panel) => panel.dataset.academyScenePanel === sceneKey) || academyCurriculumPanels[0];
        if (!targetPanel) return;
        const targetSceneKey = targetPanel.dataset.academyScenePanel || 'founder';
        if (academyCurriculumSection) {
          academyCurriculumSection.dataset.activeScene = targetSceneKey;
        }

        academyCurriculumSceneButtons.forEach((button) => {
          const isTarget = button.dataset.academyScene === targetSceneKey;
          button.classList.toggle('is-active', isTarget);
          button.setAttribute('aria-pressed', isTarget ? 'true' : 'false');
        });

        academyCurriculumPanels.forEach((panel) => {
          panel.classList.toggle('is-active', panel === targetPanel);
        });

        if (scrollToScene) {
          targetPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }

      function stopAcademyCurriculumAuto() {
        if (academyCurriculumAutoTimer) {
          window.clearInterval(academyCurriculumAutoTimer);
          academyCurriculumAutoTimer = null;
        }
      }

      function startAcademyCurriculumAuto() {
        if (!academyCurriculumSection || academyCurriculumPanels.length <= 1) return;
        stopAcademyCurriculumAuto();
        academyCurriculumAutoTimer = window.setInterval(() => {
          if (currentIndex !== 1 || !academyCurriculumInView) return;
          const currentScene = academyCurriculumSection.dataset.activeScene === 'investor' ? 'investor' : 'founder';
          const nextScene = currentScene === 'founder' ? 'investor' : 'founder';
          setAcademyCurriculumScene(nextScene, false);
        }, 12000);
      }

      function syncAcademyCurriculumAuto() {
        if (currentIndex === 1 && academyCurriculumInView) {
          startAcademyCurriculumAuto();
          return;
        }
        stopAcademyCurriculumAuto();
      }

      function scrollFundSceneToPortfolio() {
        if (!fundScene) return;
        const target = fundPortfolioCompaniesSection || fundPortfolioSection;
        if (!target) return;
        const containerRect = fundScene.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const headerOffset = getSceneHeaderOffset();
        const top = Math.max(
          0,
          fundScene.scrollTop + (targetRect.top - containerRect.top) - headerOffset
        );
        fundScene.scrollTo({ top, behavior: 'smooth' });
      }

      function scrollFundSceneToTop() {
        if (!fundScene) return;
        fundScene.scrollTo({ top: 0, behavior: 'smooth' });
      }

      function scrollFundSceneToExits() {
        if (!fundScene || !fundExitsSection) return;
        const containerRect = fundScene.getBoundingClientRect();
        const targetRect = fundExitsSection.getBoundingClientRect();
        const headerOffset = getSceneHeaderOffset();
        const top = Math.max(
          0,
          fundScene.scrollTop + (targetRect.top - containerRect.top) - headerOffset
        );
        fundScene.scrollTo({ top, behavior: 'smooth' });
      }

      function scrollFundSceneToAnchor(hash) {
        if (!fundScene || !hash || hash.charAt(0) !== '#') return;
        const target = fundScene.querySelector(hash);
        if (!target) return;
        const containerRect = fundScene.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const headerOffset = getSceneHeaderOffset();
        const top = Math.max(
          0,
          fundScene.scrollTop + (targetRect.top - containerRect.top) - headerOffset
        );
        fundScene.scrollTo({ top, behavior: 'smooth' });
      }

      function escapeHtml(value) {
        return String(value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
      }

      function renderFundPortfolioCards() {
        if (!fundPortcoTrack) return;
        const buildCardMarkup = (company) => {
          const plateClass = company.plateClass ? ` ${company.plateClass}` : '';
          const baseLogoClass = company.logoClass ? ` ${company.logoClass}` : '';
          const isPhotoLogo = Boolean(company.logoSrc && /\.(jpe?g)$/i.test(company.logoSrc) && !company.forceContain);
          const logoClass = `${baseLogoClass}${isPhotoLogo ? ' is-photo' : ''}`;
          const logoContent = company.logoSrc
            ? `<img class="fund-portco-card__logo${logoClass}" src="${escapeHtml(company.logoSrc)}" alt="${escapeHtml(company.logoAlt || company.name)}" />`
            : `<span class="fund-portco-card__wordmark">${escapeHtml(company.wordmark || company.name)}</span>`;

          return `
            <li class="fund-portco-card">
              <a class="fund-portco-card__link" href="${escapeHtml(company.url || '#')}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${escapeHtml(company.name)} website">
                <div class="fund-portco-card__plate${plateClass}">
                  ${logoContent}
                </div>
                <p class="fund-portco-card__industry">${escapeHtml(company.industry || '')}</p>
              </a>
            </li>
          `;
        };

        const cardsPerView = getFundPortcoPerView();
        const cloneCount = Math.min(cardsPerView, fundPortfolioCompanies.length);
        const baseMarkup = fundPortfolioCompanies.map((company) => buildCardMarkup(company)).join('');
        const cloneMarkup = fundPortfolioCompanies.slice(0, cloneCount).map((company) => buildCardMarkup(company)).join('');

        fundPortcoTrack.innerHTML = `${baseMarkup}${cloneMarkup}`;
        fundPortcoBaseCount = fundPortfolioCompanies.length;
        if (fundPortcoBaseCount > 0) {
          fundPortcoIndex = fundPortcoIndex % fundPortcoBaseCount;
        }
      }

      function getFundPortcoPerView() {
        if (window.innerWidth <= 560) return 1;
        if (window.innerWidth <= 960) return 2;
        return 4;
      }

      function updateFundPortfolioCarousel(animate = true) {
        if (!fundPortcoTrack || !fundPortcoViewport) return;
        const cards = Array.from(fundPortcoTrack.querySelectorAll('.fund-portco-card'));
        if (!cards.length) return;

        const cardsPerView = getFundPortcoPerView();
        const maxIndex = Math.max(0, cards.length - cardsPerView);
        fundPortcoIndex = Math.min(fundPortcoIndex, maxIndex);

        const cardWidth = cards[0].offsetWidth;
        const style = window.getComputedStyle(fundPortcoTrack);
        const gap = parseFloat(style.columnGap || style.gap || '0') || 0;
        const offset = fundPortcoIndex * (cardWidth + gap);
        const rootStyle = window.getComputedStyle(document.documentElement);
        const carouselMotion = rootStyle.getPropertyValue('--fund-carousel-motion').trim() || '820ms cubic-bezier(0.22, 1, 0.36, 1)';
        fundPortcoTrack.style.transition = animate ? `transform ${carouselMotion}` : 'none';
        fundPortcoTrack.style.transform = `translateX(${-offset}px)`;
      }

      function stepFundPortfolioCarousel(step) {
        if (!fundPortcoTrack) return;
        const cards = Array.from(fundPortcoTrack.querySelectorAll('.fund-portco-card'));
        if (!cards.length) return;
        if (fundPortcoBaseCount <= 0) return;

        const cardsPerView = getFundPortcoPerView();
        const maxIndex = Math.max(0, cards.length - cardsPerView);
        if (maxIndex <= 0 || fundPortcoBaseCount <= cardsPerView) {
          fundPortcoIndex = 0;
          updateFundPortfolioCarousel();
          return;
        }

        if (step > 0) {
          fundPortcoIndex += 1;
          updateFundPortfolioCarousel();

          if (fundPortcoIndex >= fundPortcoBaseCount) {
            const onLoopTransitionEnd = (event) => {
              if (event && typeof event.propertyName === 'string' && event.propertyName !== 'transform') return;
              fundPortcoTrack.removeEventListener('transitionend', onLoopTransitionEnd);
              fundPortcoIndex = 0;
              updateFundPortfolioCarousel(false);
            };
            fundPortcoTrack.addEventListener('transitionend', onLoopTransitionEnd);
          }
          return;
        }

        if (fundPortcoIndex <= 0) {
          fundPortcoIndex = fundPortcoBaseCount;
          updateFundPortfolioCarousel(false);
          // Force reflow so the next animated step is seamless.
          void fundPortcoTrack.offsetWidth;
        }
        fundPortcoIndex -= 1;
        updateFundPortfolioCarousel(true);
      }

      function stopFundPortfolioAuto() {
        if (fundPortcoTimer) {
          window.clearInterval(fundPortcoTimer);
          fundPortcoTimer = null;
        }
      }

      function startFundPortfolioAuto() {
        stopFundPortfolioAuto();
        fundPortcoTimer = window.setInterval(() => {
          stepFundPortfolioCarousel(-1);
        }, 3000);
      }

      function getAcademyAlumniVisibleCount() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1100) return 2;
        return 3;
      }

      function getAcademyAlumniMaxIndex() {
        const visibleCount = getAcademyAlumniVisibleCount();
        return Math.max(0, academyAlumniCards.length - visibleCount);
      }

      function updateAcademyAlumniCarousel(animate = true) {
        if (!academyAlumniTrack || !academyAlumniCards.length) return;
        const firstCard = academyAlumniCards[0];
        if (!firstCard) return;
        const gapValue = window.getComputedStyle(academyAlumniTrack).columnGap || window.getComputedStyle(academyAlumniTrack).gap || '0px';
        const gap = Number.parseFloat(gapValue) || 0;
        const cardWidth = firstCard.getBoundingClientRect().width;
        const maxIndex = getAcademyAlumniMaxIndex();
        academyAlumniIndex = Math.max(0, Math.min(academyAlumniIndex, maxIndex));
        academyAlumniTrack.style.transition = animate ? 'transform 420ms cubic-bezier(0.22, 1, 0.36, 1)' : 'none';
        academyAlumniTrack.style.transform = `translateX(${-academyAlumniIndex * (cardWidth + gap)}px)`;
        if (academyAlumniPrevBtn) {
          academyAlumniPrevBtn.disabled = academyAlumniIndex <= 0;
        }
        if (academyAlumniNextBtn) {
          academyAlumniNextBtn.disabled = academyAlumniIndex >= maxIndex;
        }
      }

      function stopAcademyAlumniAuto() {
        if (academyAlumniTimer) {
          window.clearInterval(academyAlumniTimer);
          academyAlumniTimer = null;
        }
      }

      function startAcademyAlumniAuto() {
        stopAcademyAlumniAuto();
        if (!academyAlumniCards.length || academyAlumniCards.length <= getAcademyAlumniVisibleCount()) return;
        academyAlumniTimer = window.setInterval(() => {
          const maxIndex = getAcademyAlumniMaxIndex();
          academyAlumniIndex = academyAlumniIndex >= maxIndex ? 0 : academyAlumniIndex + 1;
          updateAcademyAlumniCarousel(true);
        }, 4000);
      }

      function syncAcademyAlumniAuto() {
        if (currentIndex === 1) {
          startAcademyAlumniAuto();
          return;
        }
        stopAcademyAlumniAuto();
      }

      function updateUniverseShowcase(index) {
        if (!universeShowcaseSlides.length) return;
        const count = universeShowcaseSlides.length;
        const nextIndex = (index + count) % count;
        let nextTitle = 'The Wocstar Team';
        universeShowcaseSlides.forEach((slide, slideIndex) => {
          const isActive = slideIndex === nextIndex;
          slide.classList.toggle('is-active', isActive);
          if (isActive) {
            nextTitle = slide.getAttribute('data-showcase-title') || nextTitle;
          }
        });
        universeShowcaseIndex = nextIndex;
        if (universeShowcaseTitle) {
          universeShowcaseTitle.textContent = nextTitle;
        }
      }

      function stepUniverseShowcase(step) {
        updateUniverseShowcase(universeShowcaseIndex + (step > 0 ? 1 : -1));
      }

      function stopUniverseShowcaseAuto() {
        if (universeShowcaseTimer) {
          window.clearInterval(universeShowcaseTimer);
          universeShowcaseTimer = null;
        }
      }

      function startUniverseShowcaseAuto() {
        stopUniverseShowcaseAuto();
        if (universeShowcaseSlides.length <= 1) return;
        universeShowcaseTimer = window.setInterval(() => {
          stepUniverseShowcase(1);
        }, 3000);
      }

      function syncUniverseShowcaseAuto() {
        if (currentIndex === universeSceneIndex) {
          startUniverseShowcaseAuto();
          return;
        }
        stopUniverseShowcaseAuto();
      }

      function showCapitalInterview(index) {
        if (!capitalInterviewItems.length) return;
        const nextIndex = (index + capitalInterviewItems.length) % capitalInterviewItems.length;
        capitalInterviewItems.forEach((item, itemIndex) => {
          item.classList.toggle('is-active', itemIndex === nextIndex);
        });
        capitalInterviewIndex = nextIndex;
      }

      function stopCapitalInterviewAuto() {
        if (capitalInterviewTimer) {
          window.clearInterval(capitalInterviewTimer);
          capitalInterviewTimer = null;
        }
      }

      function startCapitalInterviewAuto() {
        stopCapitalInterviewAuto();
        if (capitalInterviewItems.length <= 1) return;
        capitalInterviewTimer = window.setInterval(() => {
          showCapitalInterview(capitalInterviewIndex + 1);
        }, 10000);
      }

      function isContactModalOpen() {
        return Boolean(contactModal && contactModal.classList.contains('is-open'));
      }

      function isAcademyWaitlistModalOpen() {
        return Boolean(academyWaitlistModal && academyWaitlistModal.classList.contains('is-open'));
      }

      function isInterviewModalOpen() {
        return Boolean(interviewModal && interviewModal.classList.contains('is-open'));
      }

      function isFoundationModalOpen() {
        return Boolean(foundationModal && foundationModal.classList.contains('is-open'));
      }

      function isFellowsModalOpen() {
        return Boolean(fellowsModal && fellowsModal.classList.contains('is-open'));
      }

      function isSmsTermsModalOpen() {
        return Boolean(smsTermsModal && smsTermsModal.classList.contains('is-open'));
      }

      function openInterviewModal(embedUrl, fallbackUrl) {
        if (!interviewModal || !interviewModalFrame || !embedUrl) return;
        interviewModal.classList.add('is-open');
        interviewModal.setAttribute('aria-hidden', 'false');
        interviewModalFrame.src = embedUrl;
        if (interviewModalFallbackLink) {
          interviewModalFallbackLink.href = fallbackUrl || embedUrl;
        }
      }

      function closeInterviewModal() {
        if (!interviewModal || !interviewModalFrame) return;
        interviewModal.classList.remove('is-open');
        interviewModal.setAttribute('aria-hidden', 'true');
        interviewModalFrame.src = '';
      }

      function openFoundationModal(event) {
        if (event) event.preventDefault();
        if (!foundationModal) return;
        foundationModal.classList.add('is-open');
        foundationModal.setAttribute('aria-hidden', 'false');
      }

      function closeFoundationModal() {
        if (!foundationModal) return;
        foundationModal.classList.remove('is-open');
        foundationModal.setAttribute('aria-hidden', 'true');
      }

      function openFellowsModal(event) {
        if (event) event.preventDefault();
        if (!fellowsModal) return;
        fellowsModal.classList.add('is-open');
        fellowsModal.setAttribute('aria-hidden', 'false');
      }

      function closeFellowsModal() {
        if (!fellowsModal) return;
        fellowsModal.classList.remove('is-open');
        fellowsModal.setAttribute('aria-hidden', 'true');
      }

      function openSmsTermsModal(event) {
        if (event) event.preventDefault();
        if (!smsTermsModal) return;
        lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        smsTermsModal.classList.add('is-open');
        smsTermsModal.setAttribute('aria-hidden', 'false');
      }

      function closeSmsTermsModal() {
        if (!smsTermsModal) return;
        smsTermsModal.classList.remove('is-open');
        smsTermsModal.setAttribute('aria-hidden', 'true');
        if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
          lastFocusedElement.focus();
        }
      }

      function openContactModal(event) {
        if (event) event.preventDefault();
        if (!contactModal) return;
        lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        contactModal.classList.add('is-open');
        contactModal.setAttribute('aria-hidden', 'false');
        window.setTimeout(() => {
          if (contactNameInput) contactNameInput.focus();
        }, 20);
      }

      function closeContactModal() {
        if (!contactModal) return;
        contactModal.classList.remove('is-open');
        contactModal.setAttribute('aria-hidden', 'true');
        if (contactFormStatus) {
          contactFormStatus.textContent = '';
        }
        if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
          lastFocusedElement.focus();
        }
      }

      function openAcademyWaitlistModal(event) {
        if (event) event.preventDefault();
        if (!academyWaitlistModal) return;
        lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        academyWaitlistModal.classList.add('is-open');
        academyWaitlistModal.setAttribute('aria-hidden', 'false');
        window.setTimeout(() => {
          if (academyWaitlistNameInput) academyWaitlistNameInput.focus();
        }, 20);
      }

      function closeAcademyWaitlistModal() {
        if (!academyWaitlistModal) return;
        academyWaitlistModal.classList.remove('is-open');
        academyWaitlistModal.setAttribute('aria-hidden', 'true');
        if (academyWaitlistStatus) {
          academyWaitlistStatus.textContent = '';
        }
        if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
          lastFocusedElement.focus();
        }
      }

      function clearProfileExitIntent() {
        profileExitIntentDirection = 0;
        profileExitIntentAt = 0;
      }

      function clearUniverseExitIntent() {
        universeExitIntentAt = 0;
      }

      function clearFundExitIntent() {
        fundExitIntentAt = 0;
      }

      function clearAcademyExitIntent() {
        academyExitIntentAt = 0;
      }

      function clearMediaExitIntent() {
        mediaExitIntentAt = 0;
      }

      function shouldTransitionFromFundBottom() {
        const now = Date.now();
        if (!fundExitIntentAt) {
          fundExitIntentAt = now;
          return false;
        }
        if (now - fundExitIntentAt < fundExitDelay) {
          return false;
        }
        clearFundExitIntent();
        return true;
      }

      function shouldTransitionFromUniverseBottom() {
        const now = Date.now();
        if (!universeExitIntentAt) {
          universeExitIntentAt = now;
          return false;
        }
        if (now - universeExitIntentAt < universeExitDelay) {
          return false;
        }
        clearUniverseExitIntent();
        return true;
      }

      function shouldTransitionFromAcademyBottom() {
        const now = Date.now();
        if (!academyExitIntentAt) {
          academyExitIntentAt = now;
          return false;
        }
        if (now - academyExitIntentAt < academyExitDelay) {
          return false;
        }
        clearAcademyExitIntent();
        return true;
      }

      function shouldTransitionFromMediaBottom() {
        const now = Date.now();
        if (!mediaExitIntentAt) {
          mediaExitIntentAt = now;
          return false;
        }
        if (now - mediaExitIntentAt < mediaExitDelay) {
          return false;
        }
        clearMediaExitIntent();
        return true;
      }

      function shouldTransitionFromProfile(direction) {
        const now = Date.now();
        if (profileExitIntentDirection !== direction) {
          profileExitIntentDirection = direction;
          profileExitIntentAt = now;
          return false;
        }

        if (now - profileExitIntentAt < profileExitDelay) {
          return false;
        }

        clearProfileExitIntent();
        return true;
      }

      function fitProfileContentToViewport() {
        const profileCopy = document.querySelector('.profile-scene .profile-copy');
        if (!profileCopy) return;
        profileCopy.style.transform = 'none';
      }

      function updateBrandSwitcher() {
        if (!brandSwitcher) return;

        brandButtons.forEach((button) => {
          const sceneTarget = Number(button.getAttribute('data-scene-target'));
          const isActive = sceneTarget === currentIndex;
          button.classList.toggle('is-active', isActive);
          if (isActive) {
            button.setAttribute('aria-current', 'page');
          } else {
            button.removeAttribute('aria-current');
          }
        });
      }

      const videos = Array.from(document.querySelectorAll('video'));
      videos.forEach((video) => {
        video.muted = true;
        if (isPerformanceMode) {
          video.preload = 'metadata';
        }
      });

      function syncSceneVideoPlayback() {
        videos.forEach((video) => {
          const parentScene = video.closest('.scene');
          const sceneIndex = parentScene ? Number(parentScene.getAttribute('data-index')) : NaN;
          const isCurrentSceneVideo = Number.isFinite(sceneIndex) && sceneIndex === currentIndex;

          if (isCurrentSceneVideo) {
            const playPromise = video.play();
            if (playPromise && typeof playPromise.catch === 'function') {
              playPromise.catch(() => {});
            }
          } else {
            video.pause();
          }
        });
      }

      function updateStatus() {
        document.body.setAttribute('data-scene', String(currentIndex));
        document.title = sceneDocumentTitles[currentIndex] || 'Wocstar Capital';
        syncSceneVideoPlayback();
        if (currentIndex === 0) {
          setCapitalMenuOpen(false);
          setAcademyMenuOpen(false);
          setMediaMenuOpen(false);
        } else if (currentIndex === 1) {
          setCapitalMenuOpen(false);
          setFundMenuOpen(false);
          setMediaMenuOpen(false);
        } else if (currentIndex === 2) {
          setCapitalMenuOpen(false);
          setFundMenuOpen(false);
          setAcademyMenuOpen(false);
        } else if (currentIndex === 3) {
          setFundMenuOpen(false);
          setAcademyMenuOpen(false);
          setMediaMenuOpen(false);
        } else {
          setCapitalMenuOpen(false);
          setFundMenuOpen(false);
          setAcademyMenuOpen(false);
          setMediaMenuOpen(false);
        }
        if (currentIndex > universeSceneIndex) {
          setCapitalMenuOpen(false);
          setFundMenuOpen(false);
          setAcademyMenuOpen(false);
          setMediaMenuOpen(false);
        }
        updateBrandSwitcher();
        headline.textContent = sceneTitles[currentIndex];
        const rawSubtext = sceneDescriptions[currentIndex] || '';
        headlineSubtext.textContent = rawSubtext.replace(/\n\s*\n+/g, '\n').trim();
        headlineWrap.style.opacity = (currentIndex === 0 || currentIndex === 1 || currentIndex === 2 || currentIndex === profileSceneIndex || currentIndex === universeSceneIndex) ? '0' : '1';
        const mainPosition = getMainScenePosition(currentIndex);
        if (mainPosition !== -1) {
          prevArrow.style.display = mainPosition === 0 ? 'none' : 'inline-block';
          nextArrow.style.display = mainPosition === mainSceneSequence.length - 1 ? 'none' : 'inline-block';
        } else {
          prevArrow.style.display = 'inline-block';
          nextArrow.style.display = 'inline-block';
        }

        if (currentIndex === profileSceneIndex) {
          requestAnimationFrame(fitProfileContentToViewport);
        }
        if (currentIndex === 2) {
          startMediaTyping();
        }
        if (currentIndex === universeSceneIndex) {
          updateUniverseShowcase(0);
        }
        syncAcademyAlumniAuto();
        syncAcademyCurriculumAuto();
        syncUniverseShowcaseAuto();
      }

      function setLayerOrder(nextIndex, fromIndex) {
        scenes.forEach((scene, index) => {
          if (index === nextIndex) {
            scene.style.zIndex = '3';
          } else if (index === fromIndex) {
            scene.style.zIndex = '2';
          } else {
            scene.style.zIndex = '1';
          }
        });
      }

      function transitionTo(nextIndex) {
        if (isAnimating) return;
        if (nextIndex < 0 || nextIndex >= scenes.length || nextIndex === currentIndex) return;

        isAnimating = true;
        clearProfileExitIntent();
        clearUniverseExitIntent();
        clearFundExitIntent();
        clearAcademyExitIntent();
        clearMediaExitIntent();

        const fromIndex = currentIndex;
        const currentScene = scenes[fromIndex];
        const nextScene = scenes[nextIndex];

        setLayerOrder(nextIndex, fromIndex);

        // Update text immediately so previous scene copy does not linger.
        currentIndex = nextIndex;
        updateStatus();
        if (nextIndex === 0 && fundScene) {
          fundScene.scrollTop = 0;
        }
        if (nextIndex === 1 && academyScene) {
          academyScene.scrollTop = 0;
        }

        nextScene.style.transition = 'none';
        nextScene.style.opacity = '0';
        nextScene.style.transform = 'scale(1.2)';
        nextScene.classList.add('active');

        void nextScene.offsetWidth;

        nextScene.style.transition = '';

        requestAnimationFrame(() => {
          nextScene.style.opacity = '1';
          nextScene.style.transform = 'scale(1)';

          currentScene.style.opacity = '0';
          currentScene.style.transform = 'scale(0.8)';
        });

        window.setTimeout(() => {
          currentScene.classList.remove('active');
          currentScene.style.opacity = '';
          currentScene.style.transform = '';

          nextScene.style.opacity = '';
          nextScene.style.transform = '';

          if (currentIndex === profileSceneIndex) {
            requestAnimationFrame(fitProfileContentToViewport);
          }

          isAnimating = false;
        }, transitionDuration + 30);
      }

      function getMainScenePosition(sceneIndex) {
        return mainSceneSequence.indexOf(sceneIndex);
      }

      function getMainLinearIndex(step) {
        const position = getMainScenePosition(currentIndex);
        if (position === -1) {
          return step < 0 ? universeSceneIndex : null;
        }
        const nextPosition = position + (step > 0 ? 1 : -1);
        if (nextPosition < 0 || nextPosition >= mainSceneSequence.length) return null;
        return mainSceneSequence[nextPosition];
      }

      function getWrappedIndex(step) {
        const position = getMainScenePosition(currentIndex);
        if (position === -1) {
          return step > 0 ? mainSceneSequence[0] : mainSceneSequence[mainSceneSequence.length - 1];
        }
        const nextPosition = (position + (step > 0 ? 1 : -1) + mainSceneSequence.length) % mainSceneSequence.length;
        return mainSceneSequence[nextPosition];
      }

      function onWheel(event) {
        event.preventDefault();
        if (isAnimating) return;
        if (isContactModalOpen()) return;
        if (isAcademyWaitlistModalOpen()) return;
        if (isInterviewModalOpen()) return;
        if (isFoundationModalOpen()) {
          if (foundationModalBody) {
            foundationModalBody.scrollTop += event.deltaY;
          }
          return;
        }
        if (isFellowsModalOpen()) {
          if (fellowsModalBody) {
            fellowsModalBody.scrollTop += event.deltaY;
          }
          return;
        }
        const primaryDelta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;

        if (currentIndex === 0 && fundScene) {
          const maxScrollTop = getFundSceneMaxScrollTop();
          if (maxScrollTop > 0) {
            const atTop = fundScene.scrollTop <= 1;
            const atBottom = fundScene.scrollTop >= maxScrollTop - 1;
            const wantsToGoDown = primaryDelta > 0;
            const wantsToGoUp = primaryDelta < 0;

            if (wantsToGoUp && atTop) {
              clearFundExitIntent();
              const prevIndex = getMainLinearIndex(-1);
              if (prevIndex !== null) transitionTo(prevIndex);
              return;
            }

            if (wantsToGoDown && atBottom) {
              if (shouldTransitionFromFundBottom()) {
                const nextIndex = getMainLinearIndex(1);
                if (nextIndex !== null) transitionTo(nextIndex);
              }
              return;
            }

            clearFundExitIntent();
            scrollFundSceneBy(event.deltaY);
            return;
          }
        }

        if (currentIndex === 1 && academyScene) {
          const maxScrollTop = getAcademySceneMaxScrollTop();
          if (maxScrollTop > 0) {
            const atTop = academyScene.scrollTop <= 1;
            const atBottom = academyScene.scrollTop >= maxScrollTop - 1;
            const wantsToGoDown = primaryDelta > 0;
            const wantsToGoUp = primaryDelta < 0;

            if (wantsToGoUp && atTop) {
              clearAcademyExitIntent();
              const prevIndex = getMainLinearIndex(-1);
              if (prevIndex !== null) transitionTo(prevIndex);
              return;
            }

            if (wantsToGoDown && atBottom) {
              if (shouldTransitionFromAcademyBottom()) {
                const nextIndex = getMainLinearIndex(1);
                if (nextIndex !== null) transitionTo(nextIndex);
              }
              return;
            }

            clearAcademyExitIntent();
            scrollAcademySceneBy(event.deltaY);
            return;
          }
        }

        if (currentIndex === 2 && mediaScene) {
          const maxScrollTop = getMediaSceneMaxScrollTop();
          if (maxScrollTop > 0) {
            const atTop = mediaScene.scrollTop <= 1;
            const atBottom = mediaScene.scrollTop >= maxScrollTop - 1;
            const wantsToGoDown = primaryDelta > 0;
            const wantsToGoUp = primaryDelta < 0;

            if (wantsToGoUp && atTop) {
              clearMediaExitIntent();
              const prevIndex = getMainLinearIndex(-1);
              if (prevIndex !== null) transitionTo(prevIndex);
              return;
            }

            if (wantsToGoDown && atBottom) {
              if (shouldTransitionFromMediaBottom()) {
                const nextIndex = getMainLinearIndex(1);
                if (nextIndex !== null) transitionTo(nextIndex);
              }
              return;
            }

            clearMediaExitIntent();
            scrollMediaSceneBy(event.deltaY);
            return;
          }
        }

        if (currentIndex === universeSceneIndex && universeScene) {
          const maxScrollTop = Math.max(0, universeScene.scrollHeight - universeScene.clientHeight);
          if (maxScrollTop > 0) {
            const atTop = universeScene.scrollTop <= 1;
            const atBottom = universeScene.scrollTop >= maxScrollTop - 1;
            const wantsToGoDown = primaryDelta > 0;
            const wantsToGoUp = primaryDelta < 0;

            if (wantsToGoUp && atTop) {
              clearUniverseExitIntent();
              const prevIndex = getMainLinearIndex(-1);
              if (prevIndex !== null) transitionTo(prevIndex);
              return;
            }

            if (wantsToGoDown && atBottom) {
              if (shouldTransitionFromUniverseBottom()) {
                const nextIndex = getMainLinearIndex(1);
                if (nextIndex !== null) transitionTo(nextIndex);
              }
              return;
            }

            clearUniverseExitIntent();
            universeScene.scrollTop += event.deltaY;
            return;
          }
        }

        if (currentIndex === profileSceneIndex) {
          const profileCopy = document.querySelector('.profile-scene .profile-copy');
          if (profileCopy) {
            const maxScrollTop = Math.max(0, profileCopy.scrollHeight - profileCopy.clientHeight);
            const atTop = profileCopy.scrollTop <= 1;
            const atBottom = profileCopy.scrollTop >= maxScrollTop - 1;

            if (primaryDelta < 0 && atTop) {
              if (shouldTransitionFromProfile(-1)) {
                transitionTo(currentIndex - 1);
              }
              return;
            }

            if (primaryDelta > 0 && atBottom) {
              if (shouldTransitionFromProfile(1)) {
                transitionTo(currentIndex + 1);
              }
              return;
            }

            clearProfileExitIntent();
            profileCopy.scrollTop += event.deltaY;
          }
          return;
        }

        clearProfileExitIntent();
        clearUniverseExitIntent();
        clearFundExitIntent();
        clearAcademyExitIntent();

        if (Math.abs(primaryDelta) < wheelThreshold) return;

        if (primaryDelta > 0) {
          const nextIndex = getMainLinearIndex(1);
          if (nextIndex !== null) transitionTo(nextIndex);
        } else {
          const prevIndex = getMainLinearIndex(-1);
          if (prevIndex !== null) transitionTo(prevIndex);
        }
      }

      function onMouseButtonNavigate(event) {
        if (isAnimating || isContactModalOpen() || isAcademyWaitlistModalOpen() || isInterviewModalOpen() || isFoundationModalOpen() || isFellowsModalOpen()) return;
        if (event.button === 3) {
          event.preventDefault();
          transitionTo(getWrappedIndex(-1));
        } else if (event.button === 4) {
          event.preventDefault();
          transitionTo(getWrappedIndex(1));
        }
      }

      function onTouchStart(event) {
        if (!event.touches || !event.touches[0]) return;
        touchStartY = event.touches[0].clientY;
        touchStartedInProfileCopy = Boolean(
          currentIndex === profileSceneIndex && event.target && event.target.closest('.profile-copy')
        );
        touchStartedInUniverseScene = Boolean(
          currentIndex === universeSceneIndex && event.target && event.target.closest('.universe-scene')
        );
        touchStartedInFundScene = Boolean(
          currentIndex === 0 && event.target && event.target.closest('.fund-scene')
        );
        touchStartedInAcademyScene = Boolean(
          currentIndex === 1 && event.target && event.target.closest('.academy-scene')
        );
        touchStartedInMediaScene = Boolean(
          currentIndex === 2 && event.target && event.target.closest('.media-scene')
        );
      }

      function onTouchMove(event) {
        if (isContactModalOpen() || isAcademyWaitlistModalOpen() || isInterviewModalOpen() || isFoundationModalOpen() || isFellowsModalOpen()) return;
        if (currentIndex === profileSceneIndex && event.target && event.target.closest('.profile-copy')) {
          return;
        }
        if (currentIndex === universeSceneIndex && event.target && event.target.closest('.universe-scene')) {
          return;
        }
      }

      function onTouchEnd(event) {
        if (touchStartY === null || isAnimating) {
          touchStartY = null;
          touchStartedInProfileCopy = false;
          touchStartedInUniverseScene = false;
          touchStartedInFundScene = false;
          touchStartedInAcademyScene = false;
          touchStartedInMediaScene = false;
          return;
        }

        if (isContactModalOpen()) {
          touchStartY = null;
          touchStartedInProfileCopy = false;
          touchStartedInUniverseScene = false;
          touchStartedInFundScene = false;
          touchStartedInAcademyScene = false;
          touchStartedInMediaScene = false;
          return;
        }

        if (isAcademyWaitlistModalOpen()) {
          touchStartY = null;
          touchStartedInProfileCopy = false;
          touchStartedInUniverseScene = false;
          touchStartedInFundScene = false;
          touchStartedInAcademyScene = false;
          touchStartedInMediaScene = false;
          return;
        }

        if (isInterviewModalOpen()) {
          touchStartY = null;
          touchStartedInProfileCopy = false;
          touchStartedInUniverseScene = false;
          touchStartedInFundScene = false;
          touchStartedInAcademyScene = false;
          touchStartedInMediaScene = false;
          return;
        }

        if (isFoundationModalOpen()) {
          touchStartY = null;
          touchStartedInProfileCopy = false;
          touchStartedInUniverseScene = false;
          touchStartedInFundScene = false;
          touchStartedInAcademyScene = false;
          touchStartedInMediaScene = false;
          return;
        }

        if (isFellowsModalOpen()) {
          touchStartY = null;
          touchStartedInProfileCopy = false;
          touchStartedInUniverseScene = false;
          touchStartedInFundScene = false;
          touchStartedInAcademyScene = false;
          touchStartedInMediaScene = false;
          return;
        }

        if (!event.changedTouches || !event.changedTouches[0]) {
          touchStartY = null;
          touchStartedInProfileCopy = false;
          touchStartedInUniverseScene = false;
          touchStartedInFundScene = false;
          touchStartedInAcademyScene = false;
          touchStartedInMediaScene = false;
          return;
        }

        const endY = event.changedTouches[0].clientY;
        const deltaY = touchStartY - endY;

        if (currentIndex === profileSceneIndex && touchStartedInProfileCopy) {
          const profileCopy = document.querySelector('.profile-scene .profile-copy');
          if (profileCopy && Math.abs(deltaY) >= swipeThreshold) {
            const maxScrollTop = Math.max(0, profileCopy.scrollHeight - profileCopy.clientHeight);
            const atTop = profileCopy.scrollTop <= 1;
            const atBottom = profileCopy.scrollTop >= maxScrollTop - 1;

            if (deltaY < 0 && atTop) {
              if (shouldTransitionFromProfile(-1)) {
                transitionTo(currentIndex - 1);
              }
            } else if (deltaY > 0 && atBottom) {
              if (shouldTransitionFromProfile(1)) {
                transitionTo(currentIndex + 1);
              }
            } else {
              clearProfileExitIntent();
            }
          } else {
            clearProfileExitIntent();
          }
          touchStartY = null;
          touchStartedInProfileCopy = false;
          touchStartedInUniverseScene = false;
          touchStartedInFundScene = false;
          touchStartedInAcademyScene = false;
          touchStartedInMediaScene = false;
          return;
        }

        if (currentIndex === universeSceneIndex && touchStartedInUniverseScene && universeScene) {
          const maxScrollTop = Math.max(0, universeScene.scrollHeight - universeScene.clientHeight);
          const atTop = universeScene.scrollTop <= 1;
          const atBottom = universeScene.scrollTop >= maxScrollTop - 1;
          if (Math.abs(deltaY) >= swipeThreshold) {
            if (deltaY < 0 && atTop) {
              clearUniverseExitIntent();
              const prevIndex = getMainLinearIndex(-1);
              if (prevIndex !== null) transitionTo(prevIndex);
            } else if (deltaY > 0 && atBottom) {
              if (shouldTransitionFromUniverseBottom()) {
                const nextIndex = getMainLinearIndex(1);
                if (nextIndex !== null) transitionTo(nextIndex);
              }
            } else {
              clearUniverseExitIntent();
              universeScene.scrollTop += deltaY;
            }
          } else {
            clearUniverseExitIntent();
          }
          touchStartY = null;
          touchStartedInProfileCopy = false;
          touchStartedInUniverseScene = false;
          touchStartedInFundScene = false;
          touchStartedInAcademyScene = false;
          touchStartedInMediaScene = false;
          return;
        }

        if (currentIndex === 2 && touchStartedInMediaScene && mediaScene) {
          const maxScrollTop = getMediaSceneMaxScrollTop();
          const atTop = mediaScene.scrollTop <= 1;
          const atBottom = mediaScene.scrollTop >= maxScrollTop - 1;
          if (Math.abs(deltaY) >= swipeThreshold) {
            if (deltaY < 0 && atTop) {
              clearMediaExitIntent();
              const prevIndex = getMainLinearIndex(-1);
              if (prevIndex !== null) transitionTo(prevIndex);
            } else if (deltaY > 0 && atBottom) {
              if (shouldTransitionFromMediaBottom()) {
                const nextIndex = getMainLinearIndex(1);
                if (nextIndex !== null) transitionTo(nextIndex);
              }
            } else {
              clearMediaExitIntent();
              scrollMediaSceneBy(deltaY);
            }
          } else {
            clearMediaExitIntent();
          }
          touchStartY = null;
          touchStartedInProfileCopy = false;
          touchStartedInUniverseScene = false;
          touchStartedInFundScene = false;
          touchStartedInAcademyScene = false;
          touchStartedInMediaScene = false;
          return;
        }

        if (currentIndex === 0 && touchStartedInFundScene && fundScene) {
          const maxScrollTop = getFundSceneMaxScrollTop();
          const atTop = fundScene.scrollTop <= 1;
          const atBottom = fundScene.scrollTop >= maxScrollTop - 1;
          if (Math.abs(deltaY) >= swipeThreshold) {
            if (deltaY < 0 && atTop) {
              clearFundExitIntent();
              const prevIndex = getMainLinearIndex(-1);
              if (prevIndex !== null) transitionTo(prevIndex);
            } else if (deltaY > 0 && atBottom) {
              clearFundExitIntent();
              const nextIndex = getMainLinearIndex(1);
              if (nextIndex !== null) transitionTo(nextIndex);
            } else {
              clearFundExitIntent();
              scrollFundSceneBy(deltaY);
            }
          } else {
            clearFundExitIntent();
          }
          touchStartY = null;
          touchStartedInProfileCopy = false;
          touchStartedInUniverseScene = false;
          touchStartedInFundScene = false;
          touchStartedInAcademyScene = false;
          return;
        }

        if (currentIndex === 1 && touchStartedInAcademyScene && academyScene) {
          const maxScrollTop = getAcademySceneMaxScrollTop();
          const atTop = academyScene.scrollTop <= 1;
          const atBottom = academyScene.scrollTop >= maxScrollTop - 1;
          if (Math.abs(deltaY) >= swipeThreshold) {
            if (deltaY < 0 && atTop) {
              clearAcademyExitIntent();
              const prevIndex = getMainLinearIndex(-1);
              if (prevIndex !== null) transitionTo(prevIndex);
            } else if (deltaY > 0 && atBottom) {
              clearAcademyExitIntent();
              const nextIndex = getMainLinearIndex(1);
              if (nextIndex !== null) transitionTo(nextIndex);
            } else {
              clearAcademyExitIntent();
              scrollAcademySceneBy(deltaY);
            }
          } else {
            clearAcademyExitIntent();
          }
          touchStartY = null;
          touchStartedInProfileCopy = false;
          touchStartedInUniverseScene = false;
          touchStartedInFundScene = false;
          touchStartedInAcademyScene = false;
          return;
        }

        if (Math.abs(deltaY) >= swipeThreshold) {
          if (deltaY > 0) {
            const nextIndex = getMainLinearIndex(1);
            if (nextIndex !== null) transitionTo(nextIndex);
          } else {
            const prevIndex = getMainLinearIndex(-1);
            if (prevIndex !== null) transitionTo(prevIndex);
          }
        }

        touchStartY = null;
        touchStartedInProfileCopy = false;
        touchStartedInUniverseScene = false;
        touchStartedInFundScene = false;
        touchStartedInAcademyScene = false;
        touchStartedInMediaScene = false;
      }

      window.addEventListener('wheel', onWheel, { passive: false });
      window.addEventListener('mouseup', onMouseButtonNavigate);
      window.addEventListener('touchstart', onTouchStart, { passive: true });
      window.addEventListener('touchmove', onTouchMove, { passive: true });
      window.addEventListener('touchend', onTouchEnd, { passive: true });
      brandButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
          event.preventDefault();
          const nextIndex = Number(button.getAttribute('data-scene-target'));
          if (Number.isNaN(nextIndex)) return;
          if (nextIndex === 0) {
            if (currentIndex === 0) {
              setFundMenuOpen(!isFundMenuOpen);
              setCapitalMenuOpen(false);
              setAcademyMenuOpen(false);
              setMediaMenuOpen(false);
              updateBrandSwitcher();
              return;
            }
            setCapitalMenuOpen(false);
            setAcademyMenuOpen(false);
            setMediaMenuOpen(false);
            transitionTo(nextIndex);
            return;
          }
          if (nextIndex === 1) {
            if (currentIndex === 1) {
              setAcademyMenuOpen(!isAcademyMenuOpen);
              setCapitalMenuOpen(false);
              setFundMenuOpen(false);
              setMediaMenuOpen(false);
              updateBrandSwitcher();
              return;
            }
            setCapitalMenuOpen(false);
            setFundMenuOpen(false);
            setMediaMenuOpen(false);
            transitionTo(nextIndex);
            return;
          }
          if (nextIndex === 2) {
            if (currentIndex === 2) {
              setMediaMenuOpen(!isMediaMenuOpen);
              setCapitalMenuOpen(false);
              setFundMenuOpen(false);
              setAcademyMenuOpen(false);
              updateBrandSwitcher();
              return;
            }
            setCapitalMenuOpen(false);
            setFundMenuOpen(false);
            setAcademyMenuOpen(false);
            setMediaMenuOpen(false);
            transitionTo(nextIndex);
            return;
          }
          if (nextIndex === 3) {
            if (currentIndex === 3) {
              setCapitalMenuOpen(!isCapitalMenuOpen);
              setFundMenuOpen(false);
              setAcademyMenuOpen(false);
              setMediaMenuOpen(false);
              updateBrandSwitcher();
              return;
            }
            setFundMenuOpen(false);
            setAcademyMenuOpen(false);
            setMediaMenuOpen(false);
            transitionTo(nextIndex);
            return;
          }
          setCapitalMenuOpen(false);
          setFundMenuOpen(false);
          setAcademyMenuOpen(false);
          setMediaMenuOpen(false);
          transitionTo(nextIndex);
        });
      });
      if (brandCapitalMenu) {
        brandCapitalMenu.addEventListener('click', (event) => {
          const target = event.target instanceof HTMLElement ? event.target.closest('a') : null;
          if (!target) return;
          const href = target.getAttribute('href') || '';
          if (href.startsWith('#')) {
            event.preventDefault();
            if (currentIndex !== 3) {
              transitionTo(3);
              window.setTimeout(() => {
                scrollUniverseSceneToAnchor(href);
              }, transitionDuration + 40);
            } else {
              scrollUniverseSceneToAnchor(href);
            }
          }
          setCapitalMenuOpen(false);
        });
      }
      if (brandFundMenu) {
        brandFundMenu.addEventListener('click', (event) => {
          const target = event.target instanceof HTMLElement ? event.target.closest('a') : null;
          if (!target) return;
          const href = target.getAttribute('href') || '';
          if (href.startsWith('#')) {
            event.preventDefault();
            if (currentIndex !== 0) {
              transitionTo(0);
              window.setTimeout(() => {
                scrollFundSceneToAnchor(href);
              }, transitionDuration + 40);
            } else {
              scrollFundSceneToAnchor(href);
            }
          }
          setFundMenuOpen(false);
        });
      }
      if (brandAcademyMenu) {
        brandAcademyMenu.addEventListener('click', (event) => {
          const target = event.target instanceof HTMLElement ? event.target.closest('a') : null;
          if (!target) return;
          const href = target.getAttribute('href') || '';
          if (href.startsWith('#')) {
            event.preventDefault();
            if (currentIndex !== 1) {
              transitionTo(1);
              window.setTimeout(() => {
                scrollAcademySceneToAnchor(href);
              }, transitionDuration + 40);
            } else {
              scrollAcademySceneToAnchor(href);
            }
          }
          setAcademyMenuOpen(false);
        });
      }
      if (brandMediaMenu) {
        brandMediaMenu.addEventListener('click', (event) => {
          const target = event.target instanceof HTMLElement ? event.target.closest('a') : null;
          if (!target) return;
          const href = target.getAttribute('href') || '';
          if (href.startsWith('#')) {
            event.preventDefault();
            if (currentIndex !== 2) {
              transitionTo(2);
              window.setTimeout(() => {
                scrollMediaSceneToAnchor(href);
              }, transitionDuration + 40);
            } else {
              scrollMediaSceneToAnchor(href);
            }
          }
          setMediaMenuOpen(false);
        });
      }
      document.addEventListener('click', (event) => {
        if (isCapitalMenuOpen && brandCapitalWrap) {
          if (!(event.target instanceof Node && brandCapitalWrap.contains(event.target))) {
            setCapitalMenuOpen(false);
          }
        }
        if (isFundMenuOpen && brandFundWrap) {
          if (!(event.target instanceof Node && brandFundWrap.contains(event.target))) {
            setFundMenuOpen(false);
          }
        }
        if (isAcademyMenuOpen && brandAcademyWrap) {
          if (!(event.target instanceof Node && brandAcademyWrap.contains(event.target))) {
            setAcademyMenuOpen(false);
          }
        }
        if (isMediaMenuOpen && brandMediaWrap) {
          if (!(event.target instanceof Node && brandMediaWrap.contains(event.target))) {
            setMediaMenuOpen(false);
          }
        }
      });
      nextArrow.addEventListener('click', (event) => {
        event.preventDefault();
        transitionTo(getWrappedIndex(1));
      });
      prevArrow.addEventListener('click', (event) => {
        event.preventDefault();
        transitionTo(getWrappedIndex(-1));
      });
      if (contactButton) {
        contactButton.addEventListener('click', openContactModal);
      }
      if (fundInlineContactButton) {
        fundInlineContactButton.addEventListener('click', openContactModal);
      }
      if (academyInlineContactButton) {
        academyInlineContactButton.addEventListener('click', openContactModal);
      }
      if (academyInlineContactButtonMobile) {
        academyInlineContactButtonMobile.addEventListener('click', openContactModal);
      }
      if (academyWaitlistButton) {
        academyWaitlistButton.addEventListener('click', openAcademyWaitlistModal);
      }
      if (academyWaitlistButtonMobile) {
        academyWaitlistButtonMobile.addEventListener('click', openAcademyWaitlistModal);
      }
      if (academyMobileSearch && academyMobileSearchInput && academyMobileSearchToggle) {
        const closeAcademyMobileSearch = () => {
          academyMobileSearch.classList.remove('is-open');
          academyMobileSearchToggle.setAttribute('aria-expanded', 'false');
        };
        academyMobileSearchToggle.addEventListener('click', () => {
          const nextOpen = !academyMobileSearch.classList.contains('is-open');
          academyMobileSearch.classList.toggle('is-open', nextOpen);
          academyMobileSearchToggle.setAttribute('aria-expanded', nextOpen ? 'true' : 'false');
          if (nextOpen) {
            academyMobileSearchInput.focus();
          }
        });
        academyMobileSearchInput.addEventListener('keydown', (event) => {
          if (event.key === 'Escape') {
            closeAcademyMobileSearch();
          }
        });
        document.addEventListener('click', (event) => {
          if (event.target instanceof HTMLElement && !academyMobileSearch.contains(event.target)) {
            closeAcademyMobileSearch();
          }
        });
      }
      if (academyApplyButton) {
        academyApplyButton.addEventListener('click', openAcademyWaitlistModal);
      }
      if (capitalInlineContactButton) {
        capitalInlineContactButton.addEventListener('click', openContactModal);
      }
      if (openMediaFellowsButton) {
        openMediaFellowsButton.addEventListener('click', openFellowsModal);
      }
      if (openMediaFoundationButton) {
        openMediaFoundationButton.addEventListener('click', openFoundationModal);
      }
      if (smsTermsLinks.length) {
        smsTermsLinks.forEach((link) => {
          link.addEventListener('click', openSmsTermsModal);
        });
      }
      if (goToGayleBio) {
        goToGayleBio.addEventListener('click', (event) => {
          event.preventDefault();
          transitionTo(profileSceneIndex);
        });
      }
      if (goToGayleFromBubble) {
        goToGayleFromBubble.addEventListener('click', (event) => {
          event.preventDefault();
          transitionTo(profileSceneIndex);
        });
      }
      if (goToGayleReadBio) {
        goToGayleReadBio.addEventListener('click', (event) => {
          event.preventDefault();
          transitionTo(profileSceneIndex);
        });
      }
      if (contactModal) {
        contactModal.addEventListener('click', (event) => {
          if (event.target instanceof HTMLElement && event.target.matches('[data-close-contact="true"]')) {
            closeContactModal();
          }
        });
      }
      if (academyWaitlistModal) {
        academyWaitlistModal.addEventListener('click', (event) => {
          if (event.target instanceof HTMLElement && event.target.matches('[data-close-academy-waitlist="true"]')) {
            closeAcademyWaitlistModal();
          }
        });
      }
      if (interviewModal) {
        interviewModal.addEventListener('click', (event) => {
          if (event.target instanceof HTMLElement && event.target.matches('[data-close-interview="true"]')) {
            closeInterviewModal();
          }
        });
      }
      if (foundationModal) {
        foundationModal.addEventListener('click', (event) => {
          if (event.target instanceof HTMLElement && event.target.matches('[data-close-foundation="true"]')) {
            closeFoundationModal();
          }
        });
      }
      if (fellowsModal) {
        fellowsModal.addEventListener('click', (event) => {
          if (event.target instanceof HTMLElement && event.target.matches('[data-close-fellows="true"]')) {
            closeFellowsModal();
          }
        });
      }
      if (smsTermsModal) {
        smsTermsModal.addEventListener('click', (event) => {
          if (event.target instanceof HTMLElement && event.target.matches('[data-close-sms-terms="true"]')) {
            closeSmsTermsModal();
          }
        });
      }
      // Temporary fallback: allow direct navigation to interview links.
      if (partnersPrevBtn) {
        partnersPrevBtn.addEventListener('click', () => {
          stepUniverseShowcase(-1);
          syncUniverseShowcaseAuto();
        });
      }
      if (partnersNextBtn) {
        partnersNextBtn.addEventListener('click', () => {
          stepUniverseShowcase(1);
          syncUniverseShowcaseAuto();
        });
      }
      if (fundPortcoPrevBtn) {
        fundPortcoPrevBtn.addEventListener('click', () => {
          stepFundPortfolioCarousel(-1);
          startFundPortfolioAuto();
        });
      }
      if (fundPortcoNextBtn) {
        fundPortcoNextBtn.addEventListener('click', () => {
          stepFundPortfolioCarousel(1);
          startFundPortfolioAuto();
        });
      }
      if (academyAlumniPrevBtn) {
        academyAlumniPrevBtn.addEventListener('click', () => {
          academyAlumniIndex = Math.max(0, academyAlumniIndex - 1);
          updateAcademyAlumniCarousel(true);
          syncAcademyAlumniAuto();
        });
      }
      if (academyAlumniNextBtn) {
        academyAlumniNextBtn.addEventListener('click', () => {
          const maxIndex = getAcademyAlumniMaxIndex();
          academyAlumniIndex = Math.min(maxIndex, academyAlumniIndex + 1);
          updateAcademyAlumniCarousel(true);
          syncAcademyAlumniAuto();
        });
      }
      if (academyCurriculumSceneButtons.length) {
        academyCurriculumSceneButtons.forEach((button) => {
          button.addEventListener('click', () => {
            const sceneKey = button.dataset.academyScene || 'founder';
            setAcademyCurriculumScene(sceneKey, false);
          });
        });
      }
      if (contactForm) {
        contactForm.addEventListener('submit', async (event) => {
          event.preventDefault();
          if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
          }
          const formData = new FormData(contactForm);
          const name = String(formData.get('name') || '').trim();
          const company = String(formData.get('company_name') || '').trim();
          const email = String(formData.get('email') || '').trim();
          const message = String(formData.get('message') || '').trim();

          const submitButton = contactForm.querySelector('button[type="submit"]');

          if (contactFormStatus) {
            contactFormStatus.textContent = 'Sending your message...';
          }
          if (submitButton) {
            submitButton.disabled = true;
          }

          try {
            const response = await fetch('/api/contact', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
              },
              body: JSON.stringify({
                name,
                company_name: company,
                email,
                message,
                scene: sceneDocumentTitles[currentIndex] || 'Wocstar Capital'
              })
            });

            if (!response.ok) {
              throw new Error('Contact request failed');
            }

            if (contactFormStatus) {
              contactFormStatus.textContent = 'Message sent. Thank you.';
            }
            contactForm.reset();
            window.setTimeout(() => {
              closeContactModal();
            }, 600);
          } catch (error) {
            if (contactFormStatus) {
              contactFormStatus.textContent = 'Unable to send right now. Please try again in a moment.';
            }
          } finally {
            if (submitButton) {
              submitButton.disabled = false;
            }
          }
        });
      }
      if (academyWaitlistForm) {
        if (academyWaitlistPhoneInput) {
          academyWaitlistPhoneInput.addEventListener('input', () => {
            academyWaitlistPhoneInput.setCustomValidity('');
          });
        }
        academyWaitlistForm.addEventListener('submit', async (event) => {
          event.preventDefault();
          if (academyWaitlistPhoneInput) {
            const phoneRaw = academyWaitlistPhoneInput.value.trim();
            const digits = phoneRaw.replace(/\D/g, '');
            const isUsPhone = digits.length === 10 || (digits.length === 11 && digits.startsWith('1'));
            academyWaitlistPhoneInput.setCustomValidity(
              isUsPhone ? '' : 'Please enter a valid US phone number.'
            );
          }
          if (!academyWaitlistForm.checkValidity()) {
            academyWaitlistForm.reportValidity();
            return;
          }
          const formData = new FormData(academyWaitlistForm);
          const name = String(formData.get('name') || '').trim();
          const company = String(formData.get('company_name') || '').trim();
          const email = String(formData.get('email') || '').trim();
          const role = String(formData.get('role') || '').trim();
          const phone = String(formData.get('phone') || '').trim();
          const message = String(formData.get('message') || '').trim();
          const submitButton = academyWaitlistForm.querySelector('button[type="submit"]');

          if (academyWaitlistStatus) {
            academyWaitlistStatus.textContent = 'Sending your request...';
          }
          if (submitButton) {
            submitButton.disabled = true;
          }

          try {
            const response = await fetch('/api/academy-waitlist', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
              },
              body: JSON.stringify({
                name,
                company_name: company,
                email,
                role,
                phone,
                message
              })
            });

            if (!response.ok) {
              throw new Error('Academy waitlist request failed');
            }

            if (academyWaitlistStatus) {
              academyWaitlistStatus.textContent = 'Request sent. Thank you.';
            }
            academyWaitlistForm.reset();
            window.setTimeout(() => {
              closeAcademyWaitlistModal();
            }, 600);
          } catch (error) {
            if (academyWaitlistStatus) {
              academyWaitlistStatus.textContent = 'Unable to send right now. Please try again in a moment.';
            }
          } finally {
            if (submitButton) {
              submitButton.disabled = false;
            }
          }
        });
      }
      document.addEventListener('keydown', (event) => {
        const target = event.target instanceof HTMLElement ? event.target : null;
        const isTypingTarget = Boolean(
          target &&
          (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)
        );

        if (event.key === 'Escape' && isFundMenuOpen) {
          setFundMenuOpen(false);
        }
        if (event.key === 'Escape' && isCapitalMenuOpen) {
          setCapitalMenuOpen(false);
        }
        if (event.key === 'Escape' && isAcademyMenuOpen) {
          setAcademyMenuOpen(false);
        }
        if (event.key === 'Escape' && isMediaMenuOpen) {
          setMediaMenuOpen(false);
        }
        if (event.key === 'Escape' && isContactModalOpen()) {
          closeContactModal();
        }
        if (event.key === 'Escape' && isAcademyWaitlistModalOpen()) {
          closeAcademyWaitlistModal();
        }
        if (event.key === 'Escape' && isInterviewModalOpen()) {
          closeInterviewModal();
        }
        if (event.key === 'Escape' && isFoundationModalOpen()) {
          closeFoundationModal();
        }
        if (event.key === 'Escape' && isFellowsModalOpen()) {
          closeFellowsModal();
        }
        if (event.key === 'Escape' && isSmsTermsModalOpen()) {
          closeSmsTermsModal();
        }

        if (isTypingTarget) return;
        if (isAnimating || isContactModalOpen() || isAcademyWaitlistModalOpen() || isInterviewModalOpen() || isFoundationModalOpen() || isFellowsModalOpen() || isSmsTermsModalOpen()) return;

        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          transitionTo(getWrappedIndex(-1));
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          transitionTo(getWrappedIndex(1));
        }
      });
      function handleWindowResize() {
        syncAppViewportHeight();
        const baseCount = Math.max(1, fundPortcoBaseCount);
        fundPortcoIndex = fundPortcoIndex % baseCount;
        renderFundPortfolioCards();
        updateFundPortfolioCarousel(false);
        updateAcademyAlumniCarousel(false);
        syncAcademyAlumniAuto();
        if (currentIndex === profileSceneIndex) {
          fitProfileContentToViewport();
        }
      }

      window.addEventListener('resize', () => {
        if (resizeTimer) {
          window.clearTimeout(resizeTimer);
        }
        resizeTimer = window.setTimeout(() => {
          handleWindowResize();
        }, isPerformanceMode ? 140 : 60);
      }, { passive: true });
      window.addEventListener('orientationchange', () => {
        syncAppViewportHeight();
        handleWindowResize();
      }, { passive: true });
      if (fundPortcoViewport) {
        fundPortcoViewport.addEventListener('mouseenter', stopFundPortfolioAuto);
        fundPortcoViewport.addEventListener('mouseleave', startFundPortfolioAuto);
      }
      if (academyAlumniViewport) {
        academyAlumniViewport.addEventListener('mouseenter', stopAcademyAlumniAuto);
        academyAlumniViewport.addEventListener('mouseleave', syncAcademyAlumniAuto);
      }
      if (academyCurriculumSection) {
        academyCurriculumSection.addEventListener('mouseenter', stopAcademyCurriculumAuto);
        academyCurriculumSection.addEventListener('mouseleave', () => {
          if (academyCurriculumInView && currentIndex === 1) {
            startAcademyCurriculumAuto();
          }
        });
      }
      if (universeShowcaseSlides.length) {
        const universeShowcase = document.querySelector('.universe-showcase');
        if (universeShowcase) {
          universeShowcase.addEventListener('mouseenter', stopUniverseShowcaseAuto);
          universeShowcase.addEventListener('mouseleave', syncUniverseShowcaseAuto);
        }
      }
      if (capitalInterview) {
        capitalInterview.addEventListener('mouseenter', stopCapitalInterviewAuto);
        capitalInterview.addEventListener('mouseleave', startCapitalInterviewAuto);
      }

      resetMediaTyping();
      syncAppViewportHeight();
      syncSceneVideoPlayback();
      renderFundPortfolioCards();
      updateFundPortfolioCarousel(false);
      startFundPortfolioAuto();
      updateAcademyAlumniCarousel(false);
      updateUniverseShowcase(0);
      showCapitalInterview(0);
      startCapitalInterviewAuto();
      initAcademyCurriculumReveal();
      setAcademyCurriculumScene('founder', false);
      updateStatus();
    })();
  



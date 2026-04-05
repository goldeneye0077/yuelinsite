import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { siteReferenceImages } from "../content/media/referenceAssets";
import { buildLocalePath } from "../i18n/locales";
import { useSiteShellContext } from "../layouts/useSiteShellContext";
import { buildInquiryPath } from "../lib/inquiry-paths";

export function HomeShellPage() {
  const { locale, content } = useSiteShellContext();
  const heroImage = siteReferenceImages.aboutHero;
  const bodyCopy =
    locale === "zh"
      ? {
          strengthsTitle: "为什么联系跃鳞科技",
          strengths: [
            {
              title: "先判断方向",
              detail: "先按检测、动作与安全边界收窄产品范围。",
            },
            {
              title: "支持项目配合",
              detail: "适合设备开发、工位搭建与产线升级沟通。",
            },
            {
              title: "保留后续延展",
              detail: "先接住询盘，再逐步补型号、资料与交付条件。",
            },
          ],
          directionsTitle: "核心方向",
          directions: [
            {
              title: "工业传感器",
              detail: "先看检测方向，再进入子类与系列。",
            },
            {
              title: "安全防护传感器",
              detail: "围绕安全检测、区域防护与门锁场景建立入口。",
            },
            {
              title: "激光测距传感器",
              detail: "覆盖测距、位移检测与高精度定位。",
            },
            {
              title: "线性滑轨及模组",
              detail: "对应结构运动、模组集成与定位平台。",
            },
            {
              title: "气动元器件",
              detail: "适合动作执行与气路配套场景。",
            },
          ],
          partnersTitle: "合作品牌",
          partnersSummary:
            "合作品牌作为项目生态补充，重点仍然是跃鳞科技的选型与交付。",
          partners: [
            { name: "华怡丰 Huayifeng", detail: "用于传感与自动化目录参考。" },
            { name: "松下 Panasonic", detail: "适合精密检测与设备配套。" },
            { name: "西克 Sick", detail: "适合安全检测与工业感测场景。" },
            { name: "亚德客 AirTAC", detail: "适合气动执行与常规配套。" },
            { name: "金器 Mindman", detail: "补充气动与执行链路。" },
          ],
          finalCtaTitle: "如果方向已明确，下一步就进入咨询",
          finalCtaBody: "带上设备类型、检测对象或改造目标，就可以开始沟通。",
        }
      : {
          strengthsTitle: "Why Work With Yuelin",
          strengths: [
            {
              title: "Narrow the direction first",
              detail:
                "Start from sensing, motion, or safety before going into models.",
            },
            {
              title: "Support project coordination",
              detail:
                "Suitable for new equipment, workstations, and line upgrades.",
            },
            {
              title: "Leave room for later detail",
              detail:
                "Start the inquiry first, then add models, files, and delivery conditions.",
            },
          ],
          directionsTitle: "Core Lines",
          directions: [
            {
              title: "Industrial Sensors",
              detail:
                "Choose the detection direction first, then move into groups and series.",
            },
            {
              title: "Safety Protection Sensors",
              detail:
                "Built for safety sensing, guarded zones, and door interlock scenarios.",
            },
            {
              title: "Laser Ranging Sensors",
              detail:
                "Covers ranging, displacement checks, and precise positioning.",
            },
            {
              title: "Linear Guides & Modules",
              detail:
                "Fits motion structures, module integration, and positioning stages.",
            },
            {
              title: "Pneumatic Components",
              detail:
                "Supports actuation, air routing, and standard pneumatic setups.",
            },
          ],
          partnersTitle: "Partner Brands",
          partnersSummary:
            "Partner brands support the project ecosystem, while Yuelin remains the main selection and delivery lead.",
          partners: [
            {
              name: "Huayifeng",
              detail:
                "Used as a reference source for sensing and automation lines.",
            },
            {
              name: "Panasonic",
              detail: "Suitable for precision detection and equipment pairing.",
            },
            {
              name: "Sick",
              detail:
                "Supports safety inspection and industrial sensing scenarios.",
            },
            {
              name: "AirTAC",
              detail:
                "Fits pneumatic execution and standard equipment support.",
            },
            {
              name: "Mindman",
              detail: "Extends the pneumatic and actuation chain.",
            },
          ],
          finalCtaTitle: "If the direction is clear, the next step is inquiry",
          finalCtaBody:
            "Bring the equipment type, detection target, or retrofit goal and we can start.",
        };
  const heroStats =
    locale === "zh"
      ? [
          { label: "产品结构", value: "5 大方向" },
          { label: "服务主线", value: "3 条路径" },
          { label: "站点形态", value: "双语询盘" },
        ]
      : [
          { label: "Product Map", value: "5 Families" },
          { label: "Service Lines", value: "3 Tracks" },
          { label: "Site Format", value: "Bilingual Inquiry" },
        ];

  return (
    <>
      <section className="home-hero">
        <div className="home-hero__inner">
          <div className="home-hero__copy">
            <h1>{content.meta.brandName}</h1>
            <p className="hero-summary">{content.home.summary}</p>
            <p className="hero-description">{content.home.description}</p>
            <div className="hero-actions">
              <Link
                className="cta-link"
                to={buildInquiryPath(locale, {
                  category: "general-consultation",
                  source: "home",
                })}
              >
                <span>{content.home.primaryCta}</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                className="secondary-link"
                to={buildLocalePath(locale, "products")}
              >
                {content.home.secondaryCta}
              </Link>
            </div>

            <div className="home-hero__support">
              <div className="home-hero__support-header">
                <p className="eyebrow">{content.home.statusLabel}</p>
                <p className="home-hero__support-intro">
                  {content.home.supportSummary}
                </p>
              </div>

              <div className="home-hero__support-list">
                {content.home.statusItems.map((item, index) => (
                  <article key={item} className="home-hero__support-item">
                    <span className="home-hero__support-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <aside className="home-hero__rail">
            <figure className="surface-media-card surface-media-card--hero">
              <img
                alt={heroImage.alt[locale]}
                className="surface-media-card__image"
                src={heroImage.src}
              />
              <figcaption className="surface-media-card__caption">
                <strong>{content.home.directions[0]?.title}</strong>
              </figcaption>
            </figure>

            <div className="home-hero__stats" aria-hidden="true">
              {heroStats.map((fact) => (
                <article key={fact.label} className="home-hero__stat">
                  <p className="track-label">{fact.label}</p>
                  <p className="home-hero__stat-value">{fact.value}</p>
                </article>
              ))}
            </div>

            <div className="home-hero__direction-list">
              {content.home.directions.slice(0, 3).map((item, index) => (
                <article key={item.title} className="home-hero__direction-item">
                  <p className="home-hero__direction-index">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="home-hero__direction-copy">
                    <h2>{item.title}</h2>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="home-story-grid motion-rise motion-delay-1">
          <section className="story-block">
            <p className="eyebrow">{bodyCopy.strengthsTitle}</p>
            <div className="story-list">
              {bodyCopy.strengths.map((item) => (
                <article key={item.title} className="story-item">
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="story-block">
            <p className="eyebrow">{bodyCopy.directionsTitle}</p>
            <div className="story-list story-list--compact">
              {bodyCopy.directions.map((item) => (
                <article
                  key={item.title}
                  className="story-item story-item--compact"
                >
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="home-story-grid home-story-grid--single motion-rise motion-delay-2">
          <section className="story-block">
            <p className="eyebrow">{bodyCopy.partnersTitle}</p>
            <p className="story-intro">{bodyCopy.partnersSummary}</p>
            <div className="partner-list partner-list--horizontal">
              {bodyCopy.partners.map((partner) => (
                <article key={partner.name} className="partner-item">
                  <h2>{partner.name}</h2>
                  <p>{partner.detail}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="final-cta motion-rise motion-delay-3">
          <div>
            <p className="eyebrow">{content.meta.brandName}</p>
            <h2>{bodyCopy.finalCtaTitle}</h2>
            <p>{bodyCopy.finalCtaBody}</p>
          </div>
          <div className="section-actions">
            <Link
              className="cta-link"
              to={buildInquiryPath(locale, {
                category: "general-consultation",
                source: "home",
              })}
            >
              <span>{content.home.primaryCta}</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              className="secondary-link"
              to={buildLocalePath(locale, "solutions")}
            >
              {
                content.navigation.find((item) => item.key === "solutions")
                  ?.label
              }
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

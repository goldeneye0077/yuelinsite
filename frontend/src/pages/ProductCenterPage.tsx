import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import {
  buildProductFamilyPath,
  getProductFamilyDisplaySummary,
  getProductFamilyDisplayUseCase,
  getProductGroupDisplaySummary,
  getProductTaxonomy,
} from "../content/products";
import {
  getLocalizedAlt,
  siteReferenceImages,
} from "../content/media/referenceAssets";
import type {
  ProductFamily,
  ProductSourceType,
} from "../content/products/types";
import { buildLocalePath } from "../i18n/locales";
import { useSiteShellContext } from "../layouts/useSiteShellContext";
import {
  buildInquiryPath,
  getInquiryCategoryForProductFamily,
} from "../lib/inquiry-paths";

function getSourceLabel(
  source: ProductSourceType,
  syncedLabel: string,
  inferredLabel: string,
) {
  return source === "reference-synced" ? syncedLabel : inferredLabel;
}

function getSeriesCount(family: ProductFamily) {
  return family.groups.reduce((total, group) => total + group.series.length, 0);
}

function buildGroupSeriesPreview(series: string[], locale: "zh" | "en") {
  const preview = series.slice(0, 3).join(" / ");

  if (series.length <= 3) {
    return preview;
  }

  return locale === "zh" ? `${preview} 等` : `${preview} and more`;
}

export function ProductCenterPage() {
  const { locale, content } = useSiteShellContext();
  const taxonomy = getProductTaxonomy(locale);
  const heroImage = siteReferenceImages.productCenterHero;
  const pageCopy =
    locale === "zh"
      ? {
          eyebrow: "产品中心",
          title: "工业传感与执行元件",
          summary: "五大一级类目录，覆盖工业传感器细分与自动化执行元件。",
          description: "先判断产品方向，再进入分类、子类与咨询沟通。",
          directoryEyebrow: "一级分类总览",
          directoryTitle: "按一级类判断产品范围",
          categoriesSummary:
            "五大一级类按跃鳞科技业务组织，工业传感器细分对齐参考目录。",
          directoryDescription: "先看分类边界，再进入子类、系列与咨询入口。",
          industrialSensorsTitle: "工业传感器细分",
          industrialSensorsSummary:
            "承接最成熟的传感器分组，便于先看方向再进系列。",
          consultTitle: "需要选型支持",
          consultHeading: "先确认场景，再收敛型号",
          consultBody: "适合围绕应用场景、设备结构或替换需求先发起沟通。",
        }
      : {
          eyebrow: taxonomy.eyebrow,
          title: taxonomy.title,
          summary: taxonomy.summary,
          description: taxonomy.description,
          directoryEyebrow: taxonomy.directoryEyebrow,
          directoryTitle: taxonomy.directoryTitle,
          categoriesSummary: taxonomy.categoriesSummary,
          directoryDescription: taxonomy.directoryDescription,
          industrialSensorsTitle: taxonomy.industrialSensorsTitle,
          industrialSensorsSummary: taxonomy.industrialSensorsSummary,
          consultTitle: taxonomy.consultTitle,
          consultHeading: taxonomy.consultHeading,
          consultBody: taxonomy.consultBody,
        };
  const bodyCopy =
    locale === "zh"
      ? {
          industrialSensorsSummary: "先看检测方向，再进入成熟子类与系列。",
          groupSummaryMap: {
            "fiber-sensors": "适合小目标、高精度与窄空间检测。",
            "photoelectric-sensors": "常用于到位、识别与通断判断。",
            "displacement-sensors": "面向位移、厚度与高度检测。",
            "slot-photoelectric-sensors": "适合标签、边缘与夹槽触发。",
            "color-and-label-sensors": "用于颜色、标签和标记识别。",
            "inductive-sensors": "常用于金属到位与接近检测。",
          } as Record<string, string>,
          directoryEyebrow: "一级分类总览",
          directoryTitle: "先看五大一级类，再进入子类与系列",
          categoriesSummary:
            "这一页先负责判断范围，再把询盘入口放到合适的位置。",
          directoryDescription:
            "如果方向已经明确，下一步就进入对应分类继续看。",
          familySummaryMap: {
            "industrial-sensors": "覆盖检测与识别方向，适合先从子类判断。",
            "safety-protection-sensors": "面向安全检测、区域防护与门锁场景。",
            "laser-ranging-sensors": "适合测距、位移检测与精密定位。",
            "linear-guides-and-modules": "对应结构运动、模组集成与定位平台。",
            "pneumatic-components": "用于动作执行、气路控制与常规配套。",
          } as Record<ProductFamily["key"], string>,
          familyUseCaseMap: {
            "industrial-sensors": "适合设备开发、检测工位与产线改造。",
            "safety-protection-sensors": "适合安全补强、门禁联锁与区域检测。",
            "laser-ranging-sensors": "适合非接触测量和高精度定位。",
            "linear-guides-and-modules": "适合滑台、模组和结构升级。",
            "pneumatic-components": "适合气缸、阀岛与气源配套。",
          } as Record<ProductFamily["key"], string>,
          consultTitle: "需要选型支持",
          consultHeading: "如果方向已明确，下一步就进入咨询",
          consultBody: "带上应用场景、结构条件或替换目标，就可以开始沟通。",
        }
      : {
          industrialSensorsSummary:
            "Start from the detection direction, then move into mature subgroups and series.",
          groupSummaryMap: {
            "fiber-sensors":
              "Built for small targets, tight spaces, and high-precision checks.",
            "photoelectric-sensors":
              "Common for presence, identification, and pass/fail checks.",
            "displacement-sensors":
              "Used for displacement, thickness, and height inspection.",
            "slot-photoelectric-sensors":
              "Fits label, edge, and slot-trigger scenarios.",
            "color-and-label-sensors":
              "Used for color, label, and mark identification.",
            "inductive-sensors":
              "Common for metal presence and proximity detection.",
          } as Record<string, string>,
          directoryEyebrow: "Family Overview",
          directoryTitle:
            "Start with the five main families, then move into groups and series",
          categoriesSummary:
            "This page is for narrowing scope first and placing the inquiry entry where it fits.",
          directoryDescription:
            "If the direction is already clear, the next step is to open the matching family.",
          familySummaryMap: {
            "industrial-sensors":
              "Covers sensing and identification, best read from subgroups first.",
            "safety-protection-sensors":
              "Built for safety detection, guarded areas, and interlock scenarios.",
            "laser-ranging-sensors":
              "Suitable for ranging, displacement checks, and precise positioning.",
            "linear-guides-and-modules":
              "Fits motion structures, module integration, and positioning stages.",
            "pneumatic-components":
              "Used for actuation, air control, and standard pneumatic support.",
          } as Record<ProductFamily["key"], string>,
          familyUseCaseMap: {
            "industrial-sensors":
              "Suitable for equipment builds, inspection stations, and line retrofits.",
            "safety-protection-sensors":
              "Suitable for safety reinforcement, interlocks, and guarded-area checks.",
            "laser-ranging-sensors":
              "Suitable for non-contact measurement and precise positioning.",
            "linear-guides-and-modules":
              "Suitable for slides, modules, and structure upgrades.",
            "pneumatic-components":
              "Suitable for cylinders, valve islands, and air preparation support.",
          } as Record<ProductFamily["key"], string>,
          consultTitle: "Selection Support",
          consultHeading: "If the direction is clear, the next step is inquiry",
          consultBody:
            "Bring the application, structure limits, or replacement target and we can start.",
        };
  const spotlightFamily = taxonomy.categories[0];
  const totalGroups = taxonomy.categories.reduce(
    (total, family) => total + family.groups.length,
    0,
  );
  const totalSeries = taxonomy.categories.reduce(
    (total, family) => total + getSeriesCount(family),
    0,
  );
  const spotlightGroups = spotlightFamily?.groups.slice(0, 6) ?? [];

  return (
    <>
      <section className="product-hero">
        <div className="product-hero__inner">
          <div className="product-hero__intro">
            <div className="product-hero__copy">
              <p className="eyebrow">{pageCopy.eyebrow}</p>
              <h1>{pageCopy.title}</h1>
              <p className="hero-summary">{pageCopy.summary}</p>
              <p className="hero-description">{pageCopy.description}</p>
              <div className="hero-actions">
                <Link
                  className="cta-link"
                  to={buildInquiryPath(locale, {
                    category: "general-consultation",
                    source: "product-center",
                  })}
                >
                  <span>{taxonomy.consultCtaLabel}</span>
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

            <figure className="surface-media-card surface-media-card--product-sensor">
              <img
                alt={getLocalizedAlt(heroImage, locale)}
                className="surface-media-card__image"
                src={heroImage.src}
              />
              <figcaption className="surface-media-card__caption">
                <span>
                  {locale === "zh"
                    ? "传感器实物展示"
                    : "Physical product showcase"}
                </span>
                <strong>
                  {spotlightFamily?.groups[0]?.name ?? spotlightFamily?.name}
                </strong>
              </figcaption>
            </figure>
          </div>

          <div className="product-hero__stats" aria-hidden="true">
            <article className="product-hero__stat">
              <p className="track-label">{taxonomy.categoriesTitle}</p>
              <p className="product-hero__stat-value">
                {taxonomy.categories.length}
              </p>
            </article>
            <article className="product-hero__stat">
              <p className="track-label">{taxonomy.categoryMetaGroupsLabel}</p>
              <p className="product-hero__stat-value">{totalGroups}</p>
            </article>
            <article className="product-hero__stat">
              <p className="track-label">{taxonomy.categoryMetaSeriesLabel}</p>
              <p className="product-hero__stat-value">{totalSeries}</p>
            </article>
          </div>

          <div className="product-hero__family-list">
            {taxonomy.categories.map((family, index) => (
              <Link
                key={family.key}
                className="product-hero__family-link"
                to={buildProductFamilyPath(locale, family.key)}
              >
                <p className="product-hero__family-index">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="product-hero__family-copy">
                  <div className="product-hero__family-header">
                    <h2>{family.name}</h2>
                    <span className="product-source-badge">
                      {getSourceLabel(
                        family.source,
                        taxonomy.sourceSyncedLabel,
                        taxonomy.projectInferredLabel,
                      )}
                    </span>
                  </div>
                  <p className="product-hero__family-summary">
                    {getProductFamilyDisplaySummary(locale, family)}
                  </p>
                  <p className="product-hero__family-meta">
                    {family.groups.length}{" "}
                    {taxonomy.categoryMetaGroupsLabel.toLowerCase()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="product-spotlight motion-rise motion-delay-1">
          <div className="product-spotlight__copy">
            <p className="eyebrow">{pageCopy.industrialSensorsTitle}</p>
            <h2 className="profile-title">{spotlightFamily?.name}</h2>
            <p className="story-intro">{bodyCopy.industrialSensorsSummary}</p>
          </div>

          <div className="product-spotlight__list">
            {spotlightGroups.map((group) => (
              <article key={group.slug} className="product-spotlight__item">
                <h3>{group.name}</h3>
                <p>{bodyCopy.groupSummaryMap[group.slug] ?? group.summary}</p>
                <p className="product-spotlight__series">
                  {buildGroupSeriesPreview(group.series, locale)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="product-directory">
          <div className="product-directory__intro motion-rise motion-delay-2">
            <p className="eyebrow">{bodyCopy.directoryEyebrow}</p>
            <h2 className="profile-title">{bodyCopy.directoryTitle}</h2>
            <p className="story-intro">{bodyCopy.categoriesSummary}</p>
            <p className="track-detail">{bodyCopy.directoryDescription}</p>
          </div>

          <div className="product-family-sheet-list">
            {taxonomy.categories.map((family, index) => (
              <article
                key={family.key}
                className={`product-family-sheet motion-rise motion-delay-${Math.min(index + 3, 5)}`}
              >
                <div className="product-family-sheet__lead">
                  <div className="product-family-sheet__meta">
                    <p className="track-label">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {taxonomy.categoryMetaGroupsLabel}
                    </p>
                    <span className="product-source-badge">
                      {getSourceLabel(
                        family.source,
                        taxonomy.sourceSyncedLabel,
                        taxonomy.projectInferredLabel,
                      )}
                    </span>
                  </div>
                  <h2>{family.name}</h2>
                  <p className="story-intro product-family-sheet__summary">
                    {bodyCopy.familySummaryMap[family.key] ??
                      getProductFamilyDisplaySummary(locale, family)}
                  </p>
                  <p className="product-family-sheet__usecase">
                    {bodyCopy.familyUseCaseMap[family.key] ??
                      getProductFamilyDisplayUseCase(locale, family)}
                  </p>
                </div>

                <div className="product-family-sheet__body">
                  <div className="product-family-sheet__stats">
                    <article>
                      <p className="track-label">
                        {taxonomy.categoryMetaGroupsLabel}
                      </p>
                      <p className="product-family-sheet__stat-value">
                        {family.groups.length}
                      </p>
                    </article>
                    <article>
                      <p className="track-label">
                        {taxonomy.categoryMetaSeriesLabel}
                      </p>
                      <p className="product-family-sheet__stat-value">
                        {getSeriesCount(family)}
                      </p>
                    </article>
                  </div>

                  <div className="product-family-sheet__group-list">
                    {family.groups.slice(0, 4).map((group) => (
                      <article
                        key={group.slug}
                        className="product-family-sheet__group-item"
                      >
                        <h3>{group.name}</h3>
                        <p>{getProductGroupDisplaySummary(locale, group)}</p>
                      </article>
                    ))}
                  </div>

                  <div className="section-actions product-family-sheet__actions">
                    <Link
                      className="cta-link"
                      to={buildProductFamilyPath(locale, family.key)}
                    >
                      <span>{taxonomy.familyCtaLabel}</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      className="secondary-link"
                      to={buildInquiryPath(locale, {
                        category: getInquiryCategoryForProductFamily(
                          family.key,
                        ),
                        source: "product-center",
                      })}
                    >
                      {taxonomy.familyConsultCtaLabel}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="final-cta motion-rise motion-delay-4">
          <div>
            <p className="eyebrow">{bodyCopy.consultTitle}</p>
            <h2>{bodyCopy.consultHeading}</h2>
            <p>{bodyCopy.consultBody}</p>
          </div>
          <div className="section-actions">
            <Link
              className="cta-link"
              to={buildInquiryPath(locale, {
                category: "general-consultation",
                source: "product-center",
              })}
            >
              <span>{taxonomy.consultCtaLabel}</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              className="secondary-link"
              to={buildLocalePath(locale, "support")}
            >
              {content.navigation.find((item) => item.key === "support")?.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

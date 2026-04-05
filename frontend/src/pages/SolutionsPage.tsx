import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { getLocalizedAlt, siteReferenceImages } from '../content/media/referenceAssets'
import { buildLocalePath } from '../i18n/locales'
import { useSiteShellContext } from '../layouts/useSiteShellContext'
import { buildInquiryPath } from '../lib/inquiry-paths'

export function SolutionsPage() {
  const { locale, content } = useSiteShellContext()
  const heroImage = siteReferenceImages.solutionsHero
  const heroCopy =
    locale === 'zh'
      ? {
          eyebrow: '项目路径',
          summary: '围绕工业自动化、软件配合与技术集成，先帮项目判断正确路径。',
          description: '从场景切入，让选型、接口与交付边界更快对齐。',
          railSummary: '适用于设备开发、系统集成与产线升级项目，先看清合作范围，再进入正式沟通。',
          primaryCta: '发起咨询',
          secondaryCta: '产品中心',
        }
      : {
          eyebrow: 'Project route',
          summary:
            'A clearer route for industrial automation, software coordination, and technical integration.',
          description:
            'Start from the scenario and align interfaces, scope, and delivery rhythm earlier.',
          railSummary:
            'Useful for new machines, integration work, and line-side upgrades where the first project read needs to be fast.',
          primaryCta: 'Start inquiry',
          secondaryCta: 'Product center',
        }
  const bodyCopy =
    locale === 'zh'
      ? {
          coordinationTitle: '前期沟通建议',
          coordinationSummary: '如果规格书还不完整，先准备下面 3 类信息就够了。',
          coordinationItems: [
            {
              title: '设备与工位边界',
              detail: '先说明设备类型、检测对象、节拍要求和安装限制。',
            },
            {
              title: '接口与控制条件',
              detail: '提前同步 PLC、IO、通讯方式和软件联动关系。',
            },
            {
              title: '交付目标与时间点',
              detail: '送样、报价、验证或改造节点先讲清。',
            },
          ],
          processTitle: '推进节奏',
          processSummary: '先确认场景，再对齐边界，最后进入询盘与实施跟进。',
          processSteps: [
            {
              step: '01',
              title: '确认场景与目标',
              detail: '围绕检测对象、动作关系和安全要求先收敛问题。',
            },
            {
              step: '02',
              title: '对齐产品与接口边界',
              detail: '明确传感器、执行元件、软件逻辑与接口关系。',
            },
            {
              step: '03',
              title: '进入询盘与后续配合',
              detail: '方向清楚后，再推进报价、送样或实施安排。',
            },
          ],
          finalCtaTitle: '如果场景已明确，下一步就进入沟通',
          finalCtaBody:
            '告诉我们设备类型、检测目标或改造目的，我们会先帮你收敛方案路径。',
        }
      : {
          coordinationTitle: 'Early conversation guide',
          coordinationSummary:
            'If the specification is not complete yet, these three facts are enough to start.',
          coordinationItems: [
            {
              title: 'Machine and station boundary',
              detail: 'Start with the machine type, sensing target, cycle target, and install limits.',
            },
            {
              title: 'Interface and control conditions',
              detail: 'Align PLC, IO, communication method, and software linkage early.',
            },
            {
              title: 'Delivery goal and timing',
              detail: 'Clarify whether the next step is sampling, quotation, validation, or retrofit.',
            },
          ],
          processTitle: 'Delivery rhythm',
          processSummary:
            'Confirm the scenario first, align the boundary next, then move into inquiry and execution.',
          processSteps: [
            {
              step: '01',
              title: 'Confirm the scenario and goal',
              detail: 'Start from the sensing target, motion relation, and safety requirement.',
            },
            {
              step: '02',
              title: 'Align products and interfaces',
              detail: 'Clarify sensors, execution units, software logic, and interface direction.',
            },
            {
              step: '03',
              title: 'Move into inquiry and follow-up',
              detail: 'Once the route is clear, continue into quotation, sampling, or implementation.',
            },
          ],
          finalCtaTitle: 'If the scenario is already clear, the next step is the conversation',
          finalCtaBody:
            'Share the machine type, sensing goal, or retrofit target first and we can narrow the route faster.',
        }

  return (
    <div className="solutions-page">
      <section className="page-band page-band--tight">
        <div className="solutions-hero">
          <div className="solutions-hero__copy motion-rise motion-delay-1">
            <p className="eyebrow">{heroCopy.eyebrow}</p>
            <h1>{content.solutions.title}</h1>
            <p className="hero-summary">{heroCopy.summary}</p>
            <p className="hero-description">{heroCopy.description}</p>
            <div className="hero-actions">
              <Link
                className="cta-link"
                to={buildInquiryPath(locale, {
                  category: 'general-consultation',
                  source: 'solutions',
                })}
              >
                <span>{heroCopy.primaryCta}</span>
                <ArrowRight size={16} />
              </Link>
              <Link className="secondary-link" to={buildLocalePath(locale, 'products')}>
                {heroCopy.secondaryCta}
              </Link>
            </div>
          </div>

          <aside className="solutions-hero__rail motion-rise motion-delay-2">
            <figure className="surface-media-card surface-media-card--hero">
              <img
                alt={getLocalizedAlt(heroImage, locale)}
                className="surface-media-card__image"
                src={heroImage.src}
              />
              <figcaption className="surface-media-card__caption">
                <strong>{content.solutionsPage.coverageItems[0]?.title}</strong>
              </figcaption>
            </figure>
            <p className="story-intro">{heroCopy.railSummary}</p>
            <div className="solution-coverage-list">
              {content.solutionsPage.coverageItems.map((item) => (
                <article key={item.title} className="solution-coverage">
                  <p className="assurance-item__label">{item.label}</p>
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="page-band page-band--bordered page-band--solutions-body">
        <div className="solutions-operating-frame motion-rise motion-delay-4">
          <div className="solutions-support-grid">
            <section className="solutions-support-panel" id="solution-intake">
              <p className="eyebrow">{bodyCopy.coordinationTitle}</p>
              <p className="story-intro">{bodyCopy.coordinationSummary}</p>
              <div className="story-list">
                {bodyCopy.coordinationItems.map((item) => (
                  <article key={item.title} className="story-item">
                    <h2>{item.title}</h2>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </section>

            <section
              className="solutions-support-panel solutions-support-panel--offset"
              id="solution-delivery-rhythm"
            >
              <p className="eyebrow">{bodyCopy.processTitle}</p>
              <p className="story-intro">{bodyCopy.processSummary}</p>
              <div className="process-list">
                {bodyCopy.processSteps.map((item) => (
                  <article key={item.step} className="process-step">
                    <p className="process-step__index">{item.step}</p>
                    <div className="process-step__copy">
                      <h2>{item.title}</h2>
                      <p>{item.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <div className="final-cta final-cta--nested motion-rise motion-delay-5">
            <div>
              <p className="eyebrow">{content.meta.brandName}</p>
              <h2>{bodyCopy.finalCtaTitle}</h2>
              <p>{bodyCopy.finalCtaBody}</p>
            </div>
            <div className="section-actions">
              <Link
                className="cta-link"
                to={buildInquiryPath(locale, {
                  category: 'general-consultation',
                  source: 'solutions',
                })}
              >
                <span>{heroCopy.primaryCta}</span>
                <ArrowRight size={16} />
              </Link>
              <Link className="secondary-link" to={buildLocalePath(locale, 'products')}>
                {heroCopy.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { getLocalizedAlt, siteReferenceImages } from '../content/media/referenceAssets'
import { buildLocalePath } from '../i18n/locales'
import { useSiteShellContext } from '../layouts/useSiteShellContext'
import { buildInquiryPath } from '../lib/inquiry-paths'

export function SupportPage() {
  const { locale, content } = useSiteShellContext()
  const heroImage = siteReferenceImages.supportHero
  const heroCopy =
    locale === 'zh'
      ? {
          eyebrow: '支持入口',
          summary: '把资料申请、技术沟通和项目跟进收成一条清楚的支持路径。',
          description: '让客户先判断该申请资料、沟通技术，还是进入项目协同。',
          railSummary: '打开这页时，应该一眼看清资料入口、准备状态和下一步沟通方式。',
          primaryCta: '获取支持',
          secondaryCta: '产品中心',
        }
      : {
          eyebrow: 'Support route',
          summary:
            'A clearer route for technical files, project follow-up, and implementation-side support.',
          description:
            'It helps customers decide whether the next step is material access, technical clarification, or project coordination.',
          railSummary:
            'At a glance, the page should show the material route, the preparation status, and the right next conversation.',
          primaryCta: 'Get support',
          secondaryCta: 'Product center',
        }
  const bodyCopy =
    locale === 'zh'
      ? {
          capabilityTitle: '支持能力',
          capabilitySummary: '支持页先解决 3 件事：缩小方向、准备资料、判断下一步。',
          capabilities: [
            {
              title: '选型跟进与替换建议',
              detail: '适用于已知设备场景，但还要继续缩小型号范围的情况。',
            },
            {
              title: '围绕集成条件的技术配合',
              detail: '适用于问题已涉及 IO、通讯、现场约束或替换边界。',
            },
            {
              title: '辅助决策的资料准备',
              detail: '适用于正式询盘前，先确认目录、说明书或技术文件。',
            },
          ],
          guidanceTitle: '怎么用这页',
          guidanceSummary: '不要把所有问题都压进一个表单，先走最合适的支持入口。',
          guidanceItems: [
            {
              title: '需要目录或资料时先从这里进入',
              detail: '先确认目录、说明书或可提供资料，再进入后续沟通。',
            },
            {
              title: '需要技术澄清时也先从这里进入',
              detail: '围绕型号匹配、现场条件或替换边界开始会更快。',
            },
            {
              title: '明确后再转入正式咨询',
              detail: '支持方向清楚后，再进入询盘、报价或送样。',
            },
          ],
          resourceTitle: '申请台',
          resourceSummary: '把目录、资料和项目支持拆成 3 个入口，避免支持页看起来像空栏目。',
          resources: [
            {
              status: '可直接进入',
              label: '目录入口',
              title: '产品目录申请',
              detail: '先获取按产品族整理的总览，再决定是否进入型号沟通。',
              deliverable: '结果：拿到目录并建立选型对话基础。',
              primaryLabel: '申请目录',
              secondaryLabel: '产品中心',
            },
            {
              status: '资料入口',
              label: '资料申请',
              title: '说明书与技术资料',
              detail: '先确认说明书、手册或技术文件是否可准备。',
              deliverable: '结果：确认资料状态和下一步获取方式。',
              primaryLabel: '申请资料',
              secondaryLabel: '解决方案',
            },
            {
              status: '协同入口',
              label: '项目支持',
              title: '项目支持受理',
              detail: '适用于需要把型号、接口、时间点和实施配合一起带入讨论的项目。',
              deliverable: '结果：明确支持边界并进入更准确的技术跟进。',
              primaryLabel: '提交支持',
              secondaryLabel: '解决方案',
            },
          ],
          processTitle: '响应节奏',
          processSummary: '先提交需求，再确认资料或协同类型，最后进入下一步。',
          processSteps: [
            {
              step: '01',
              title: '提交需求边界',
              detail: '先说明产品族、设备场景或需要的文件类型。',
            },
            {
              step: '02',
              title: '确认资料或技术配合类型',
              detail: '判断下一步是目录分享、文件准备还是项目协同。',
            },
            {
              step: '03',
              title: '进入正确的后续路径',
              detail: '方向清楚后，再进入咨询、报价、送样或技术沟通。',
            },
          ],
          finalCtaTitle: '如果支持需求已明确，下一步就进入申请',
          finalCtaBody:
            '告诉我们资料类型、设备场景或协同问题，我们会先帮你收敛最快有价值的下一步。',
        }
      : {
          capabilityTitle: 'Support capability',
          capabilitySummary:
            'The page handles three things first: narrowing direction, preparing files, and choosing the next step.',
          capabilities: [
            {
              title: 'Selection follow-up and replacement advice',
              detail: 'Useful when the equipment scenario is known but the model range still needs narrowing.',
            },
            {
              title: 'Technical coordination around integration conditions',
              detail: 'Useful when IO, communication, field limits, or replacement boundaries are already in the question.',
            },
            {
              title: 'Decision-support file preparation',
              detail: 'Useful when catalogs, manuals, or technical files need to be checked before a formal inquiry.',
            },
          ],
          guidanceTitle: 'How to use this page',
          guidanceSummary:
            'Do not force every question into one generic form. Start from the right support entry.',
          guidanceItems: [
            {
              title: 'Start here for catalogs and files',
              detail: 'Confirm catalogs, manuals, or available materials first, then move into follow-up.',
            },
            {
              title: 'Start here for technical clarification',
              detail: 'Model fit, field conditions, and replacement boundaries move faster from this route.',
            },
            {
              title: 'Move to formal inquiry after the route is clear',
              detail: 'Once the support direction is clear, continue into inquiry, quotation, or sampling.',
            },
          ],
          resourceTitle: 'Request desk',
          resourceSummary:
            'Catalogs, files, and project-side support are split into three clearer entries.',
          resources: [
            {
              status: 'Open now',
              label: 'Catalog route',
              title: 'Product catalog request',
              detail: 'Start with a category-level overview before narrowing models.',
              deliverable: 'Outcome: a clearer catalog route and selection baseline.',
              primaryLabel: 'Request catalog',
              secondaryLabel: 'Product center',
            },
            {
              status: 'File route',
              label: 'File request',
              title: 'Datasheets and technical files',
              detail: 'Use this to confirm whether manuals and technical files can be prepared.',
              deliverable: 'Outcome: file status and the next delivery route become clear.',
              primaryLabel: 'Request files',
              secondaryLabel: 'Solutions',
            },
            {
              status: 'Coordination route',
              label: 'Project intake',
              title: 'Project-side support intake',
              detail: 'Use this when model choice, interfaces, timing, and implementation need to be discussed together.',
              deliverable: 'Outcome: a clearer support boundary and follow-up route.',
              primaryLabel: 'Submit support',
              secondaryLabel: 'Solutions',
            },
          ],
          processTitle: 'Response rhythm',
          processSummary: 'Submit the need first, confirm the route next, then move into follow-up.',
          processSteps: [
            {
              step: '01',
              title: 'Submit the need boundary',
              detail: 'Start with the product family, machine scenario, or file type needed.',
            },
            {
              step: '02',
              title: 'Confirm the file or coordination type',
              detail: 'Judge whether the next step is catalog sharing, file prep, or project coordination.',
            },
            {
              step: '03',
              title: 'Move into the right next path',
              detail: 'Once the route is clear, continue into inquiry, quotation, sampling, or technical discussion.',
            },
          ],
          finalCtaTitle: 'If the support need is clear, the next step is the request',
          finalCtaBody:
            'Share the file type, machine scenario, or coordination question first and we can narrow the fastest useful next step.',
        }

  return (
    <>
      <section className="page-band page-band--tight">
        <div className="support-hero">
          <div className="support-hero__copy motion-rise motion-delay-1">
            <p className="eyebrow">{heroCopy.eyebrow}</p>
            <h1>{content.support.title}</h1>
            <p className="hero-summary">{heroCopy.summary}</p>
            <p className="hero-description">{heroCopy.description}</p>
            <div className="hero-actions">
              <Link
                className="cta-link"
                to={buildInquiryPath(locale, {
                  category: 'general-consultation',
                  source: 'support',
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

          <aside className="support-hero__rail motion-rise motion-delay-2">
            <figure className="surface-media-card surface-media-card--hero">
              <img
                alt={getLocalizedAlt(heroImage, locale)}
                className="surface-media-card__image"
                src={heroImage.src}
              />
              <figcaption className="surface-media-card__caption">
                <strong>{content.supportPage.capabilities[0]?.title}</strong>
              </figcaption>
            </figure>
            <p className="story-intro">{heroCopy.railSummary}</p>
            <div className="support-quick-list">
              {content.supportPage.quickPanelItems.map((item) => (
                <article key={item.title} className="support-quick-item">
                  <p className="assurance-item__label">{item.label}</p>
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="support-layout motion-rise motion-delay-2">
          <section className="support-panel">
            <p className="eyebrow">{bodyCopy.capabilityTitle}</p>
            <p className="story-intro">{bodyCopy.capabilitySummary}</p>
            <div className="story-list">
              {bodyCopy.capabilities.map((item) => (
                <article key={item.title} className="story-item">
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="support-panel support-panel--offset">
            <p className="eyebrow">{bodyCopy.guidanceTitle}</p>
            <p className="story-intro">{bodyCopy.guidanceSummary}</p>
            <div className="story-list">
              {bodyCopy.guidanceItems.map((item) => (
                <article key={item.title} className="story-item">
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="support-resource-heading motion-rise motion-delay-3">
          <p className="eyebrow">{bodyCopy.resourceTitle}</p>
          <p className="story-intro">{bodyCopy.resourceSummary}</p>
        </div>
        <div className="support-resource-list motion-rise motion-delay-4">
          {content.supportPage.resources.map((resource, index) => (
            <article key={resource.title} className="support-resource-item">
              <p className="support-resource-item__status">{bodyCopy.resources[index]?.status}</p>
              <p className="assurance-item__label">{bodyCopy.resources[index]?.label}</p>
              <h2>{bodyCopy.resources[index]?.title}</h2>
              <p>{bodyCopy.resources[index]?.detail}</p>
              <p className="support-resource-item__deliverable">
                {bodyCopy.resources[index]?.deliverable}
              </p>
              <div className="section-actions">
                <Link
                  className="cta-link"
                  to={
                    resource.primaryCta.section === 'contact'
                      ? buildInquiryPath(locale, {
                          category: 'general-consultation',
                          source: 'support',
                        })
                      : buildLocalePath(locale, resource.primaryCta.section)
                  }
                >
                  <span>{bodyCopy.resources[index]?.primaryLabel}</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  className="secondary-link"
                  to={buildLocalePath(locale, resource.secondaryCta.section)}
                >
                  {bodyCopy.resources[index]?.secondaryLabel}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="support-layout motion-rise motion-delay-4">
          <section className="support-panel">
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

          <section className="support-panel support-panel--offset">
            <p className="eyebrow">{content.meta.brandName}</p>
            <div className="support-closing-copy">
              <h2>{bodyCopy.finalCtaTitle}</h2>
              <p>{bodyCopy.finalCtaBody}</p>
            </div>
            <div className="section-actions">
              <Link
                className="cta-link"
                to={buildInquiryPath(locale, {
                  category: 'general-consultation',
                  source: 'support',
                })}
              >
                <span>{heroCopy.primaryCta}</span>
                <ArrowRight size={16} />
              </Link>
              <Link className="secondary-link" to={buildLocalePath(locale, 'solutions')}>
                {content.navigation.find((item) => item.key === 'solutions')?.label}
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

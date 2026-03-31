import {
  buildIndustrialSensorGroupPath,
  buildProductFamilyPath,
  getIndustrialSensorGroup,
  getProductTaxonomy,
  normalizeIndustrialSensorGroupSlug,
  normalizeProductFamilyKey,
} from './index'

describe('product taxonomy', () => {
  it('keeps five aligned top-level families in both locales', () => {
    const zh = getProductTaxonomy('zh')
    const en = getProductTaxonomy('en')

    expect(zh.categories).toHaveLength(5)
    expect(en.categories).toHaveLength(5)
    expect(zh.categories.map((category) => category.key)).toEqual(
      en.categories.map((category) => category.key),
    )
  })

  it('preserves the synced industrial sensor subgroups from the reference structure', () => {
    const zh = getProductTaxonomy('zh')
    const industrial = zh.categories.find(
      (category) => category.key === 'industrial-sensors',
    )

    expect(industrial).toBeDefined()
    expect(industrial?.groups.length).toBeGreaterThanOrEqual(12)
    expect(industrial?.groups.map((group) => group.name)).toContain('光纤传感器')
    expect(industrial?.groups.map((group) => group.name)).toContain(
      '电容式接近传感器',
    )
    expect(industrial?.groups.map((group) => group.name)).toContain('超声波传感器')
  })

  it('normalizes family keys and builds family detail paths', () => {
    expect(normalizeProductFamilyKey('industrial-sensors')).toBe(
      'industrial-sensors',
    )
    expect(normalizeProductFamilyKey('not-a-family')).toBeNull()
    expect(buildProductFamilyPath('zh', 'laser-ranging-sensors')).toBe(
      '/zh/products/laser-ranging-sensors',
    )
  })

  it('normalizes industrial sensor subgroup slugs and builds subgroup paths', () => {
    expect(normalizeIndustrialSensorGroupSlug('zh', 'fiber-sensors')).toBe(
      'fiber-sensors',
    )
    expect(normalizeIndustrialSensorGroupSlug('zh', 'invalid-group')).toBeNull()
    expect(getIndustrialSensorGroup('zh', 'pressure-sensors')?.name).toBe(
      '压力传感器',
    )
    expect(buildIndustrialSensorGroupPath('en', 'fiber-sensors')).toBe(
      '/en/products/industrial-sensors/fiber-sensors',
    )
  })
})

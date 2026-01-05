export interface TypographyItem {
  name: string
  size: string
  lineHeight: string
  letterSpacing: string
  preview: string
  previewLatin: string
  previewMixed: string
  cssVar: string
}

export const getTypographyStyle = (item: TypographyItem) => {
  const varMap: Record<string, { size: string; height: string; spacing: string }> = {
    'Display 1': { size: 'var(--font-display-1-size)', height: 'var(--font-display-1-height)', spacing: 'var(--font-display-1-spacing)' },
    'Display 2': { size: 'var(--font-display-2-size)', height: 'var(--font-display-2-height)', spacing: 'var(--font-display-2-spacing)' },
    'Title 1': { size: 'var(--font-title-1-size)', height: 'var(--font-title-1-height)', spacing: 'var(--font-title-1-spacing)' },
    'Title 2': { size: 'var(--font-title-2-size)', height: 'var(--font-title-2-height)', spacing: 'var(--font-title-2-spacing)' },
    'Title 3': { size: 'var(--font-title-3-size)', height: 'var(--font-title-3-height)', spacing: 'var(--font-title-3-spacing)' },
    'Heading 1': { size: 'var(--font-heading-1-size)', height: 'var(--font-heading-1-height)', spacing: 'var(--font-heading-1-spacing)' },
    'Heading 2': { size: 'var(--font-heading-2-size)', height: 'var(--font-heading-2-height)', spacing: 'var(--font-heading-2-spacing)' },
    'Headline 1': { size: 'var(--font-headline-1-size)', height: 'var(--font-headline-1-height)', spacing: 'var(--font-headline-1-spacing)' },
    'Headline 2': { size: 'var(--font-headline-2-size)', height: 'var(--font-headline-2-height)', spacing: 'var(--font-headline-2-spacing)' },
    'Body 1/Normal': { size: 'var(--font-body-1-size)', height: 'var(--font-body-1-height)', spacing: 'var(--font-body-1-spacing)' },
    'Body 1/Reading': { size: 'var(--font-body-1-size)', height: 'var(--font-body-1-reading-height)', spacing: 'var(--font-body-1-spacing)' },
    'Body 2/Normal': { size: 'var(--font-body-2-size)', height: 'var(--font-body-2-height)', spacing: 'var(--font-body-2-spacing)' },
    'Body 2/Reading': { size: 'var(--font-body-2-size)', height: 'var(--font-body-2-reading-height)', spacing: 'var(--font-body-2-spacing)' },
    'Label 1/Normal': { size: 'var(--font-label-1-size)', height: 'var(--font-label-1-height)', spacing: 'var(--font-label-1-spacing)' },
    'Label 1/Reading': { size: 'var(--font-label-1-size)', height: 'var(--font-label-1-reading-height)', spacing: 'var(--font-label-1-spacing)' },
    'Label 2': { size: 'var(--font-label-2-size)', height: 'var(--font-label-2-height)', spacing: 'var(--font-label-2-spacing)' },
    'Caption 1': { size: 'var(--font-caption-1-size)', height: 'var(--font-caption-1-height)', spacing: 'var(--font-caption-1-spacing)' },
    'Caption 2': { size: 'var(--font-caption-2-size)', height: 'var(--font-caption-2-height)', spacing: 'var(--font-caption-2-spacing)' },
  }

  const vars = varMap[item.name]
  if (!vars) {
    return { fontSize: item.size, lineHeight: item.lineHeight.split(' ')[0], letterSpacing: item.letterSpacing }
  }

  return {
    fontSize: vars.size,
    lineHeight: vars.height,
    letterSpacing: vars.spacing,
  }
}

export const getCopyCode = (item: TypographyItem) => {
  const style = getTypographyStyle(item)
  const className = item.name.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-')
  return `.${className} {
  font-size: ${style.fontSize};
  line-height: ${style.lineHeight};
  letter-spacing: ${style.letterSpacing};
}`
}

export const typographyData: TypographyItem[] = [
  {
    name: 'Display 1',
    size: '56px',
    lineHeight: '72px (1.286)',
    letterSpacing: '-0.0319em',
    preview: '역시 마찬가지로',
    previewLatin: 'Lorem ipsum',
    previewMixed: '때문에 고통 그 자체를 사랑하거나',
    cssVar: '--font-display-1',
  },
  {
    name: 'Display 2',
    size: '40px',
    lineHeight: '52px (1.3)',
    letterSpacing: '-0.0282em',
    preview: '단순히 고통이 라는 이유',
    previewLatin: 'dolor sit amet',
    previewMixed: 'consectetur adipiscing elit',
    cssVar: '--font-display-2',
  },
  {
    name: 'Title 1',
    size: '36px',
    lineHeight: '48px (1.334)',
    letterSpacing: '-0.027em',
    preview: '때문에 고통 그 자체를 사랑하거나',
    previewLatin: 'consectetur adipiscing elit',
    previewMixed: '때문에 고통 그 자체를 사랑하거나',
    cssVar: '--font-title-1',
  },
  {
    name: 'Title 2',
    size: '28px',
    lineHeight: '38px (1.358)',
    letterSpacing: '-0.0236em',
    preview: '때문에 고통 그 자체를 사랑하거나',
    previewLatin: 'consectetur adipiscing elit',
    previewMixed: '때문에 고통 그 자체를 사랑하거나',
    cssVar: '--font-title-2',
  },
  {
    name: 'Title 3',
    size: '24px',
    lineHeight: '32px (1.334)',
    letterSpacing: '-0.023em',
    preview: '때문에 고통 그 자체를 사랑하거나',
    previewLatin: 'consectetur adipiscing elit',
    previewMixed: '때문에 고통 그 자체를 사랑하거나',
    cssVar: '--font-title-3',
  },
  {
    name: 'Heading 1',
    size: '22px',
    lineHeight: '30px (1.364)',
    letterSpacing: '-0.0194em',
    preview: '때로는 발생하기 때문에 고통을 찾는 사람이 있는 것이다.',
    previewLatin: 'ad minim veniam, quis nostrud exercitation',
    previewMixed: '때로는 발생하기 때문에 고통을 찾는 사람이 있는 것이다.',
    cssVar: '--font-heading-1',
  },
  {
    name: 'Heading 2',
    size: '20px',
    lineHeight: '28px (1.4)',
    letterSpacing: '-0.012em',
    preview: '때로는 발생하기 때문에 고통을 찾는 사람이 있는 것이다.',
    previewLatin: 'ad minim veniam, quis nostrud exercitation',
    previewMixed: '때로는 발생하기 때문에 고통을 찾는 사람이 있는 것이다.',
    cssVar: '--font-heading-2',
  },
  {
    name: 'Headline 1',
    size: '18px',
    lineHeight: '26px (1.445)',
    letterSpacing: '-0.002em',
    preview: '때로는 발생하기 때문에 고통을 찾는 사람이 있는 것이다.',
    previewLatin: 'ad minim veniam, quis nostrud exercitation',
    previewMixed: '때로는 발생하기 때문에 고통을 찾는 사람이 있는 것이다.',
    cssVar: '--font-headline-1',
  },
  {
    name: 'Headline 2',
    size: '17px',
    lineHeight: '24px (1.412)',
    letterSpacing: '0em',
    preview: '때로는 발생하기 때문에 고통을 찾는 사람이 있는 것이다.',
    previewLatin: 'ad minim veniam, quis nostrud exercitation',
    previewMixed: '때로는 발생하기 때문에 고통을 찾는 사람이 있는 것이다.',
    cssVar: '--font-headline-2',
  },
  {
    name: 'Body 1/Normal',
    size: '16px',
    lineHeight: '24px (1.5)',
    letterSpacing: '0.0057em',
    preview: '아무런 즐거움도 생기지 않는 고통을 회피하는 사람을 누가 탓할 수',
    previewLatin: 'Excepteur sint occaecat cupidatat non proident, sunt in',
    previewMixed: '아무런 즐거움도 생기지 않는 고통을 회피하는 사람을 누가 탓할 수',
    cssVar: '--font-body-1',
  },
  {
    name: 'Body 1/Reading',
    size: '16px',
    lineHeight: '26px (1.625)',
    letterSpacing: '0.0057em',
    preview: '아무런 즐거움도 생기지 않는 고통을 회피하는 사람을 누가 탓할 수',
    previewLatin: 'Excepteur sint occaecat cupidatat non proident, sunt in',
    previewMixed: '아무런 즐거움도 생기지 않는 고통을 회피하는 사람을 누가 탓할 수',
    cssVar: '--font-body-1-reading',
  },
  {
    name: 'Body 2/Normal',
    size: '15px',
    lineHeight: '22px (1.467)',
    letterSpacing: '0.0096em',
    preview: '아무런 즐거움도 생기지 않는 고통을 회피하는 사람을 누가 탓할 수',
    previewLatin: 'Excepteur sint occaecat cupidatat non proident, sunt in',
    previewMixed: '아무런 즐거움도 생기지 않는 고통을 회피하는 사람을 누가 탓할 수',
    cssVar: '--font-body-2',
  },
  {
    name: 'Body 2/Reading',
    size: '15px',
    lineHeight: '24px (1.6)',
    letterSpacing: '0.0096em',
    preview: '아무런 즐거움도 생기지 않는 고통을 회피하는 사람을 누가 탓할 수',
    previewLatin: 'Excepteur sint occaecat cupidatat non proident, sunt in',
    previewMixed: '아무런 즐거움도 생기지 않는 고통을 회피하는 사람을 누가 탓할 수',
    cssVar: '--font-body-2-reading',
  },
  {
    name: 'Label 1/Normal',
    size: '14px',
    lineHeight: '20px (1.429)',
    letterSpacing: '0.0145em',
    preview: '것이다. 간단한 예를 들자면, 모종의 이익을 얻을 수도 없는데 힘든 육체적 노력을',
    previewLatin: 'minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
    previewMixed: '것이다. 간단한 예를 들자면, 모종의 이익을 얻을 수도 없는데 힘든 육체적 노력을',
    cssVar: '--font-label-1',
  },
  {
    name: 'Label 1/Reading',
    size: '14px',
    lineHeight: '22px (1.571)',
    letterSpacing: '0.0145em',
    preview: '것이다. 간단한 예를 들자면, 모종의 이익을 얻을 수도 없는데 힘든 육체적 노력을',
    previewLatin: 'minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
    previewMixed: '것이다. 간단한 예를 들자면, 모종의 이익을 얻을 수도 없는데 힘든 육체적 노력을',
    cssVar: '--font-label-1-reading',
  },
  {
    name: 'Label 2',
    size: '13px',
    lineHeight: '18px (1.385)',
    letterSpacing: '0.0194em',
    preview: '것이다. 간단한 예를 들자면, 모종의 이익을 얻을 수도 없는데 힘든 육체적 노력을',
    previewLatin: 'minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
    previewMixed: '것이다. 간단한 예를 들자면, 모종의 이익을 얻을 수도 없는데 힘든 육체적 노력을',
    cssVar: '--font-label-2',
  },
  {
    name: 'Caption 1',
    size: '12px',
    lineHeight: '16px (1.334)',
    letterSpacing: '0.0252em',
    preview: '사람을 누가 탓할 수 있겠는가? 역시 마찬가지로, 단순히 고통이라는 이유 때문에 고통 그 자체를',
    previewLatin: 'sint occaecat cupidatat non proident, sunt in qui officia deserunt mollit anim id',
    previewMixed: '사람을 누가 탓할 수 있겠는가? 역시 마찬가지로, 단순히 고통이라는 이유 때문에 고통 그 자체를',
    cssVar: '--font-caption-1',
  },
  {
    name: 'Caption 2',
    size: '11px',
    lineHeight: '14px (1.273)',
    letterSpacing: '0.0311em',
    preview: '사람을 누가 탓할 수 있겠는가? 역시 마찬가지로, 단순히 고통이라는 이유 때문에 고통 그 자체를',
    previewLatin: 'sint occaecat cupidatat non proident, sunt in qui officia deserunt mollit anim id',
    previewMixed: '사람을 누가 탓할 수 있겠는가? 역시 마찬가지로, 단순히 고통이라는 이유 때문에 고통 그 자체를',
    cssVar: '--font-caption-2',
  },
]




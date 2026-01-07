export interface TypographyItem {
  name: string;
  size: string;
  lineHeight: string;
  letterSpacing: string;
  preview: string;
  previewLatin: string;
  previewMixed: string;
  cssVar: string;
}

export const getTypographyStyle = (item: TypographyItem) => {
  const varMap: Record<
    string,
    { size: string; height: string; weight?: string }
  > = {
    "Display 1": {
      size: "var(--font-display-1-size)",
      height: "var(--font-display-1-height)",
      weight: "var(--font-display-1-weight)",
    },
    "Display 2": {
      size: "var(--font-display-2-size)",
      height: "var(--font-display-2-height)",
      weight: "var(--font-display-2-weight)",
    },
    "Title 1": {
      size: "var(--font-title-1-size)",
      height: "var(--font-title-1-height)",
      weight: "var(--font-title-1-weight)",
    },
    "Title 2": {
      size: "var(--font-title-2-size)",
      height: "var(--font-title-2-height)",
      weight: "var(--font-title-2-weight)",
    },
    "Title 3": {
      size: "var(--font-title-3-size)",
      height: "var(--font-title-3-height)",
      weight: "var(--font-title-3-weight)",
    },
    "Headline 1": {
      size: "var(--font-headline-1-size)",
      height: "var(--font-headline-1-height)",
      weight: "var(--font-headline-1-weight)",
    },
    "Headline 2": {
      size: "var(--font-headline-2-size)",
      height: "var(--font-headline-2-height)",
      weight: "var(--font-headline-2-weight)",
    },
    "Headline 3": {
      size: "var(--font-headline-3-size)",
      height: "var(--font-headline-3-height)",
      weight: "var(--font-headline-3-weight)",
    },
    "Body 1/Normal": {
      size: "var(--font-body-1-size)",
      height: "var(--font-body-1-height)",
      weight: "var(--font-body-1-weight)",
    },
    "Body 1/Reading": {
      size: "var(--font-body-1-size)",
      height: "var(--font-body-1-reading-height)",
      weight: "var(--font-body-1-weight)",
    },
    "Body 2/Normal": {
      size: "var(--font-body-2-size)",
      height: "var(--font-body-2-height)",
      weight: "var(--font-body-2-weight)",
    },
    "Body 2/Reading": {
      size: "var(--font-body-2-size)",
      height: "var(--font-body-2-reading-height)",
      weight: "var(--font-body-2-weight)",
    },
    "Label 1/Normal": {
      size: "var(--font-label-1-size)",
      height: "var(--font-label-1-height)",
      weight: "var(--font-label-1-weight)",
    },
    "Label 2": {
      size: "var(--font-label-2-size)",
      height: "var(--font-label-2-height)",
      weight: "var(--font-label-2-weight)",
    },
  };

  const vars = varMap[item.name];
  if (!vars) {
    const lineHeight =
      item.lineHeight === "normal" ? "normal" : item.lineHeight.split(" ")[0];
    return {
      fontSize: item.size,
      lineHeight: lineHeight,
      letterSpacing: "0em",
      fontWeight: undefined,
    };
  }

  return {
    fontSize: vars.size,
    lineHeight: vars.height,
    letterSpacing: "0em",
    fontWeight: vars.weight,
  };
};

export const getCopyCode = (item: TypographyItem) => {
  const style = getTypographyStyle(item);
  const className = item.name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/\//g, "-");
  const fontWeightLine = style.fontWeight
    ? `  font-weight: ${style.fontWeight};\n`
    : "";
  return `.${className} {
  font-size: ${style.fontSize};
  line-height: ${style.lineHeight};
  letter-spacing: ${style.letterSpacing};${fontWeightLine}}`;
};

export const typographyData: TypographyItem[] = [
  {
    name: "Display 1",
    size: "72px",
    lineHeight: "100.8px (140%)",
    letterSpacing: "0em",
    preview: "역시 마찬가지로",
    previewLatin: "Lorem ipsum",
    previewMixed: "때문에 고통 그 자체를 사랑하거나",
    cssVar: "--font-display-1",
  },
  {
    name: "Display 2",
    size: "64px",
    lineHeight: "89.6px (140%)",
    letterSpacing: "0em",
    preview: "단순히 고통이 라는 이유",
    previewLatin: "dolor sit amet",
    previewMixed: "consectetur adipiscing elit",
    cssVar: "--font-display-2",
  },
  {
    name: "Title 1",
    size: "28px",
    lineHeight: "33.6px (120%)",
    letterSpacing: "0em",
    preview: "때문에 고통 그 자체를 사랑하거나",
    previewLatin: "consectetur adipiscing elit",
    previewMixed: "때문에 고통 그 자체를 사랑하거나",
    cssVar: "--font-title-1",
  },
  {
    name: "Title 2",
    size: "24px",
    lineHeight: "28.8px (120%)",
    letterSpacing: "0em",
    preview: "때문에 고통 그 자체를 사랑하거나",
    previewLatin: "consectetur adipiscing elit",
    previewMixed: "때문에 고통 그 자체를 사랑하거나",
    cssVar: "--font-title-2",
  },
  {
    name: "Title 3",
    size: "18px",
    lineHeight: "21.6px (120%)",
    letterSpacing: "0em",
    preview: "때문에 고통 그 자체를 사랑하거나",
    previewLatin: "consectetur adipiscing elit",
    previewMixed: "때문에 고통 그 자체를 사랑하거나",
    cssVar: "--font-title-3",
  },
  {
    name: "Headline 1",
    size: "42px",
    lineHeight: "50.4px (120%)",
    letterSpacing: "0em",
    preview: "때로는 발생하기 때문에 고통을 찾는 사람이 있는 것이다.",
    previewLatin: "ad minim veniam, quis nostrud exercitation",
    previewMixed: "때로는 발생하기 때문에 고통을 찾는 사람이 있는 것이다.",
    cssVar: "--font-headline-1",
  },
  {
    name: "Headline 2",
    size: "36px",
    lineHeight: "43.2px (120%)",
    letterSpacing: "0em",
    preview: "때로는 발생하기 때문에 고통을 찾는 사람이 있는 것이다.",
    previewLatin: "ad minim veniam, quis nostrud exercitation",
    previewMixed: "때로는 발생하기 때문에 고통을 찾는 사람이 있는 것이다.",
    cssVar: "--font-headline-2",
  },
  {
    name: "Headline 3",
    size: "28px",
    lineHeight: "33.6px (120%)",
    letterSpacing: "0em",
    preview: "때로는 발생하기 때문에 고통을 찾는 사람이 있는 것이다.",
    previewLatin: "ad minim veniam, quis nostrud exercitation",
    previewMixed: "때로는 발생하기 때문에 고통을 찾는 사람이 있는 것이다.",
    cssVar: "--font-headline-3",
  },
  {
    name: "Body 1/Normal",
    size: "18px",
    lineHeight: "21.6px (120%)",
    letterSpacing: "0em",
    preview: "아무런 즐거움도 생기지 않는 고통을 회피하는 사람을 누가 탓할 수",
    previewLatin: "Excepteur sint occaecat cupidatat non proident, sunt in",
    previewMixed:
      "아무런 즐거움도 생기지 않는 고통을 회피하는 사람을 누가 탓할 수",
    cssVar: "--font-body-1",
  },
  {
    name: "Body 1/Reading",
    size: "18px",
    lineHeight: "25.2px (140%)",
    letterSpacing: "0em",
    preview: "아무런 즐거움도 생기지 않는 고통을 회피하는 사람을 누가 탓할 수",
    previewLatin: "Excepteur sint occaecat cupidatat non proident, sunt in",
    previewMixed:
      "아무런 즐거움도 생기지 않는 고통을 회피하는 사람을 누가 탓할 수",
    cssVar: "--font-body-1-reading",
  },
  {
    name: "Body 2/Normal",
    size: "16px",
    lineHeight: "19.2px (120%)",
    letterSpacing: "0em",
    preview: "아무런 즐거움도 생기지 않는 고통을 회피하는 사람을 누가 탓할 수",
    previewLatin: "Excepteur sint occaecat cupidatat non proident, sunt in",
    previewMixed:
      "아무런 즐거움도 생기지 않는 고통을 회피하는 사람을 누가 탓할 수",
    cssVar: "--font-body-2",
  },
  {
    name: "Body 2/Reading",
    size: "16px",
    lineHeight: "22.4px (140%)",
    letterSpacing: "0em",
    preview: "아무런 즐거움도 생기지 않는 고통을 회피하는 사람을 누가 탓할 수",
    previewLatin: "Excepteur sint occaecat cupidatat non proident, sunt in",
    previewMixed:
      "아무런 즐거움도 생기지 않는 고통을 회피하는 사람을 누가 탓할 수",
    cssVar: "--font-body-2-reading",
  },
  {
    name: "Label 1/Normal",
    size: "14px",
    lineHeight: "normal",
    letterSpacing: "0em",
    preview:
      "것이다. 간단한 예를 들자면, 모종의 이익을 얻을 수도 없는데 힘든 육체적 노력을",
    previewLatin:
      "minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    previewMixed:
      "것이다. 간단한 예를 들자면, 모종의 이익을 얻을 수도 없는데 힘든 육체적 노력을",
    cssVar: "--font-label-1",
  },
  {
    name: "Label 2",
    size: "12px",
    lineHeight: "normal",
    letterSpacing: "0em",
    preview:
      "것이다. 간단한 예를 들자면, 모종의 이익을 얻을 수도 없는데 힘든 육체적 노력을",
    previewLatin:
      "minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    previewMixed:
      "것이다. 간단한 예를 들자면, 모종의 이익을 얻을 수도 없는데 힘든 육체적 노력을",
    cssVar: "--font-label-2",
  },
];

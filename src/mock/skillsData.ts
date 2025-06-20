import { Wand2, Paintbrush, MousePointerClick, PersonStanding } from "lucide-react";
import { SiAngular, SiBem, SiCss, SiCssmodules, SiFigma, SiJavascript, SiReact, SiSass, SiStorybook, SiStyledcomponents, SiStylelint, SiTypescript, SiVuedotjs } from "@icons-pack/react-simple-icons";

import RwdIcon from '../components/Icons/RwdIcon';
import DevelopmentIcon from '../components/Icons/DevelopmentIcon';
import CreativeIcon from '../components/Icons/CreativeIcon';
import type { ISkillsData } from "../types/common";

export const skillsData: ISkillsData = {
  "markup": {
    title: 'skills.markup.title',
    "items": [
      { icon: DevelopmentIcon, title: 'skills.markup.html.title', description: 'skills.markup.html.description' },
      { icon: PersonStanding, title: 'skills.markup.a11y.title', description: 'skills.markup.a11y.description' },
      { icon: RwdIcon, title: 'skills.markup.responsive_crossbrowser.title', description: 'skills.markup.responsive_crossbrowser.description' },
      { icon: SiBem, title: 'skills.markup.bem.title', description: 'skills.markup.bem.description' },
    ],
  },
  "styling": {
    title: 'skills.styling.title',
    "items": [
      { icon: SiCss, title: 'skills.styling.css.title', description: 'skills.styling.css.description' },
      { icon: SiSass, title: 'skills.styling.preprocessors.title', description: 'skills.styling.preprocessors.description' },
      { icon: SiStorybook, title: 'skills.styling.storybook.title', description: 'skills.styling.storybook.description' },
      { icon: SiCssmodules, title: 'skills.styling.css_modules.title', description: 'skills.styling.css_modules.description' },
      { icon: SiStyledcomponents, title: 'skills.styling.css_in_js.title', description: 'skills.styling.css_in_js.description' },
    ],
  },
  "uiux": {
    title: 'skills.uiux.title',
    "items": [
      { icon: MousePointerClick, title: 'skills.uiux.interactivity.title', description: 'skills.uiux.interactivity.description' },
      { icon: Wand2, title: 'skills.uiux.animations.title', description: 'skills.uiux.animations.description' },
      { icon: SiFigma, title: 'skills.uiux.figma.title', description: 'skills.uiux.figma.description' },
      { icon: CreativeIcon, title: 'skills.uiux.ui_kit.title', description: 'skills.uiux.ui_kit.description' },
      { icon: Paintbrush, title: 'skills.uiux.ui_libs.title', description: 'skills.uiux.ui_libs.description' },
    ],
  },
  "code": {
    title: 'skills.code.title',
    "items": [
      { icon: SiJavascript, title: 'skills.code.javascript.title', description: 'skills.code.javascript.description' },
      { icon: SiTypescript, title: 'skills.code.typescript.title', description: 'skills.code.typescript.description' },
      { icon: SiReact, title: 'skills.code.react.title', description: 'skills.code.react.description' },
      { icon: SiVuedotjs, title: 'skills.code.vue.title', description: 'skills.code.vue.description' },
      { icon: SiAngular, title: 'skills.code.angular.title', description: 'skills.code.angular.description' },
      { icon: SiStylelint, title: 'skills.code.tooling.title', description: 'skills.code.tooling.description' },
    ]
  }
}; 
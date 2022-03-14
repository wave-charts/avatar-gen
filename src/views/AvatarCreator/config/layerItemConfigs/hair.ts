import { avaiableColors } from './../avaiable-colors';
import { GenderType, LAYER_ID } from './../../interface/avatar.interface';
import { LayerItemConfig } from './../../interface/layer.interface';
const hairConfig: LayerItemConfig[] = [
  {
    filename: 'Danny Phantom',
    genderType: GenderType.MALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
  },
  {
    filename: 'Double Ponytail',
    genderType: GenderType.FEMAL,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
    removeLayers: [LAYER_ID.FACIAL_HAIR],
  },
  {
    filename: 'Doug Funny',
    genderType: GenderType.MALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
  },
  {
    filename: 'Fonze',
    genderType: GenderType.MALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
  },
  {
    filename: 'Full',
    genderType: GenderType.FEMAL,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND, LAYER_ID.SHIRT],
    weight: 10,
    removeLayers: [LAYER_ID.FACIAL_HAIR],
  },
  {
    filename: 'handsome',
    genderType: GenderType.MALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
  },

  {
    filename: 'Mr Clean',
    genderType: GenderType.MALE,
    weight: 10,
  },

  {
    filename: 'Mr T',
    genderType: GenderType.MALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
  },

  {
    filename: 'Pixie',
    genderType: GenderType.FEMAL,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
    removeLayers: [LAYER_ID.FACIAL_HAIR],
  },

  {
    filename: 'QY-03',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
  },

  {
    filename: 'QY-04',
    genderType: GenderType.FEMAL,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
    removeLayers: [LAYER_ID.FACIAL_HAIR],
  },

  {
    filename: 'QY-05',
    genderType: GenderType.MALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
  },

  {
    filename: 'Turban',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
  },

  {
    filename: "爆炸头",
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
  },
  
  {
    filename: "大波浪",
    genderType: GenderType.FEMAL,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
  },

  {
    filename: "齐刘海",
    genderType: GenderType.FEMAL,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
  },

  {
    filename: "秃头",
    genderType: GenderType.MALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 5,
  },

  {
    filename: "Short",
    genderType: GenderType.FEMAL,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
  },
];
export default hairConfig;

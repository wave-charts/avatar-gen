import { GenderType } from './../../interface/avatar.interface';
import { LayerItemConfig } from '../../interface/layer.interface';
const eyesConfig: LayerItemConfig[] = [
  {
    genderType: GenderType.UNSET,
    filename: 'Eyes',
    weight: 10,
  },
  {
    genderType: GenderType.UNSET,
    filename: 'Round',
    weight: 10,
  },
  {
    genderType: GenderType.UNSET,
    filename: 'Smiling',
    weight: 10,
  },
  {
    genderType: GenderType.UNSET,
    filename: 'stare',
    weight: 10,
  },
];
export default eyesConfig;

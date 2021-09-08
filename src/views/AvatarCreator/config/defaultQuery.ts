import { GenderType, RenderType } from '../interface/avatar.interface';
import { CreateAvatarDto } from './../dto/create-avatar.dto';
export const defaultCreateAvatarQuery: CreateAvatarDto = {
  renderer: RenderType.JPEG,
  amount: 1,
  size: 500,
  gender: GenderType.UNSET,
};
